/**
 * Supabase Edge Function: Form Submission Handler
 * 
 * Deploy to Supabase with:
 * supabase functions deploy submit-inquiry
 * 
 * Set up environment variables:
 * - RESEND_API_KEY: Your Resend API key
 * - SUPABASE_URL: Your Supabase project URL
 * - SUPABASE_SERVICE_ROLE_KEY: Your service role key (from settings)
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/**
 * Only the site may call this.
 *
 * This was "*", which let anyone POST from anywhere, unthrottled — and every
 * call writes a row and sends two Resend emails. That is a spam amplifier
 * pointed at the project's own billing, not merely an open endpoint.
 *
 * ALLOWED_ORIGINS is comma-separated so a staging domain can be added without a
 * redeploy; it defaults to production.
 */
const allowedOrigins = (
  Deno.env.get("ALLOWED_ORIGINS") ||
  "https://hexabyte.tech,https://www.hexabyte.tech"
)
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

function corsFor(req: Request) {
  const origin = req.headers.get("origin") || "";
  return {
    // Echo only a recognised origin. An unknown one gets no ACAO header at all,
    // and the browser blocks the response.
    ...(allowedOrigins.includes(origin)
      ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" }
      : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

async function sendEmail({
  to,
  name,
  subject,
  html,
  isImportant = false,
}: {
  to: string;
  name: string;
  subject: string;
  html: string;
  isImportant?: boolean;
}) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@hexabyte.tech";

  if (!resendApiKey) {
    console.warn("[submit-inquiry] RESEND_API_KEY not configured, skipping email");
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to,
        subject,
        html,
        headers: isImportant
          ? {
              "X-Priority": "1",
              Importance: "high",
              "X-MSMail-Priority": "High",
            }
          : undefined,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[submit-inquiry] Email error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[submit-inquiry] Email send error:", error);
    return false;
  }
}

async function sendSlackNotification(payload: {
  inquiryId: string;
  name: string;
  email: string;
  company: string | null;
  role: string;
  projectType: string[];
  challenges: string[];
  goals: string;
  ctaSource: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  referrer: string | null;
  submittedAt: string;
}) {
  const webhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");

  if (!webhookUrl) {
    console.warn("[submit-inquiry] SLACK_WEBHOOK_URL not configured, skipping Slack notification");
    return;
  }

  const text = [
    "*New Inquiry Received*",
    `• ID: ${payload.inquiryId}`,
    `• Name: ${payload.name}`,
    `• Email: ${payload.email}`,
    `• Company: ${payload.company || "Not specified"}`,
    `• Role: ${payload.role}`,
    `• Project Types: ${payload.projectType.length ? payload.projectType.join(", ") : "Not specified"}`,
    `• Challenges: ${payload.challenges.length ? payload.challenges.join(", ") : "Not specified"}`,
    `• Goals: ${payload.goals}`,
    `• CTA Source: ${payload.ctaSource || "Unknown"}`,
    `• Attribution: ${(payload.utmSource || "Direct")} / ${(payload.utmMedium || "None")} / ${(payload.utmCampaign || "None")}`,
    `• Referrer: ${payload.referrer || "Direct"}`,
    `• Submitted: ${payload.submittedAt}`,
  ].join("\n");

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[submit-inquiry] Slack webhook error:", errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[submit-inquiry] Slack notification error:", error);
    return false;
  }
}

serve(async (req) => {
  const corsHeaders = corsFor(req);
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const internalNotificationEmail =
      Deno.env.get("INTERNAL_NOTIFICATION_EMAIL") || "contact@hexabyte.tech";

    const inquiryData = await req.json();

    // Honeypot. The form renders a field no human sees; a bot fills every field
    // it finds. Answer 200 so the bot has nothing to tune against, and write
    // nothing.
    if (inquiryData.website || inquiryData.fax) {
      console.log("[submit-inquiry] Honeypot triggered, discarding");
      return json({ success: true, message: "Inquiry received successfully" });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Newsletter signups carry an email address and nothing else. Validating
    // them against the inquiry rules below would reject every one of them with
    // "Name and email are required", which is what would have happened the
    // moment this endpoint went live.
    if (inquiryData.type === "newsletter") {
      if (!inquiryData.email) {
        return json({ success: false, message: "Email is required" }, 400);
      }

      const { error } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            // Lowercased so the plain unique index dedupes case-insensitively.
            email: String(inquiryData.email).trim().toLowerCase(),
            cta_source: inquiryData.cta_source || null,
            referrer: inquiryData.referrer || null,
            submitted_at: inquiryData.submittedAt || new Date().toISOString(),
          },
          { onConflict: "email" }
        );

      if (error) {
        console.error("[submit-inquiry] Newsletter error:", error);
        throw error;
      }

      return json({ success: true, message: "Subscribed" });
    }

    const projectType = Array.isArray(inquiryData.projectType) ? inquiryData.projectType : [];
    const currentTools = Array.isArray(inquiryData.currentTools) ? inquiryData.currentTools : [];
    const challenges = Array.isArray(inquiryData.challenges) ? inquiryData.challenges : [];
    const submittedAt = inquiryData.submittedAt || new Date().toISOString();
    // NOT NULL in the table, and interpolated into the confirmation email below,
    // where .toLowerCase() on undefined threw a 500 on any POST that omitted it.
    const goals = typeof inquiryData.goals === "string" ? inquiryData.goals : "";

    if (!inquiryData.name || !inquiryData.email) {
      return json({ success: false, message: "Name and email are required" }, 400);
    }

    // Insert inquiry into database
    const { data: inquiry, error: dbError } = await supabase
      .from("inquiries")
      .insert([
        {
          name: inquiryData.name,
          email: inquiryData.email,
          company: inquiryData.company || null,
          phone: inquiryData.phone || null,
          role: inquiryData.role,
          project_type: projectType,
          current_tools: currentTools,
          other_tool: inquiryData.otherTool || null,
          challenges,
          goals,
          utm_source: inquiryData.utm_source || null,
          utm_medium: inquiryData.utm_medium || null,
          utm_campaign: inquiryData.utm_campaign || null,
          referrer: inquiryData.referrer || null,
          cta_source: inquiryData.cta_source || null,
          inquiry_started_at: inquiryData.inquiry_started_at || new Date().toISOString(),
          submitted_at: submittedAt,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("[submit-inquiry] Database error:", dbError);
      throw dbError;
    }

    console.log("[submit-inquiry] Inquiry created:", inquiry.id);

    // Send confirmation email to user
    const confirmationHtml = `
      <h2>Hi ${inquiryData.name},</h2>
      <p>Thank you for reaching out! We've received your inquiry and will review it shortly.</p>
      ${
        goals
          ? `<p>We're interested in learning more about your ${projectType.join(", ")} project and your goals to ${goals.toLowerCase()}.</p>`
          : ""
      }
      <p>Our team will follow up within 24 hours with available times to discuss your project and how we can help.</p>
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      <p><strong>What we'll cover:</strong></p>
      <ul>
        <li>Your current challenges and goals</li>
        <li>Recommended solutions and approach</li>
        <li>Timeline and investment</li>
        <li>Next steps if we're a good fit</li>
      </ul>
      <p>In the meantime, feel free to check out our <a href="https://hexabyte.tech/case-studies">recent projects</a> to see what we've built for other founders and early-stage companies.</p>
      <p>Best regards,<br/>
      <strong>Hexabyte Technologies</strong><br/>
      <a href="https://hexabyte.tech">hexabyte.tech</a></p>
    `;

    // Only write to the visitor from a Hexabyte address. The email signs off as
    // Hexabyte Technologies and links to hexabyte.tech; arriving from some other
    // brand's domain it reads as phishing, which is a poor first contact with a
    // prospect who just handed over their phone number. The internal
    // notification below is unaffected — it goes to us, where deliverability
    // matters and branding does not.
    //
    // This unblocks itself: verify hexabyte.tech with the email provider, point
    // FROM_EMAIL at it, and the confirmation starts sending with no code change.
    const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@hexabyte.tech";

    if (fromEmail.endsWith("@hexabyte.tech")) {
      await sendEmail({
        to: inquiryData.email,
        name: inquiryData.name,
        subject: "We received your inquiry - Next steps",
        html: confirmationHtml,
      });
    } else {
      console.warn(
        `[submit-inquiry] Skipping visitor confirmation: FROM_EMAIL is ${fromEmail}, not a hexabyte.tech address`
      );
    }

    // Send internal notification to team
    const internalHtml = `
      <h3>${inquiryData.name} (${inquiryData.role})</h3>
      <p><strong>Email:</strong> <a href="mailto:${inquiryData.email}">${inquiryData.email}</a></p>
      <p><strong>Company:</strong> ${inquiryData.company || "Not specified"}</p>
      <p><strong>Phone:</strong> ${inquiryData.phone || "Not provided"}</p>
      <p><strong>Project Types:</strong> ${projectType.length ? projectType.join(", ") : "Not specified"}</p>
      <p><strong>Current Tools:</strong> ${currentTools.length ? currentTools.join(", ") : "Not specified"}</p>
      <p><strong>Challenges:</strong> ${challenges.length ? challenges.join(", ") : "Not specified"}</p>
      <p><strong>Goals:</strong> ${goals}</p>
      <hr>
      <p><strong>Attribution:</strong></p>
      <p>Source: ${inquiryData.utm_source || "Direct"} | Medium: ${inquiryData.utm_medium || "None"} | Campaign: ${inquiryData.utm_campaign || "None"}</p>
      <p><strong>CTA Source:</strong> ${inquiryData.cta_source || "Unknown"}</p>
      <p><strong>Referrer:</strong> ${inquiryData.referrer || "Direct"}</p>
      <p><strong>Submitted:</strong> ${new Date(submittedAt).toLocaleString()}</p>
      <p><strong>Inquiry ID:</strong> ${inquiry.id}</p>
    `;

    await sendEmail({
      to: internalNotificationEmail,
      name: "Hexabyte Team",
      subject: `New Inquiry: ${inquiryData.name} - ${inquiryData.role}`,
      html: internalHtml,
      isImportant: true,
    });

    await sendSlackNotification({
      inquiryId: inquiry.id,
      name: inquiryData.name,
      email: inquiryData.email,
      company: inquiryData.company || null,
      role: inquiryData.role,
      projectType,
      challenges,
      goals,
      ctaSource: inquiryData.cta_source || null,
      utmSource: inquiryData.utm_source || null,
      utmMedium: inquiryData.utm_medium || null,
      utmCampaign: inquiryData.utm_campaign || null,
      referrer: inquiryData.referrer || null,
      submittedAt,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry received successfully",
        inquiryId: inquiry.id,
        nextStep: "booking",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[submit-inquiry] Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : "Failed to process inquiry",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
