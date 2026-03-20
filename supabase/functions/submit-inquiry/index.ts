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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function sendEmail({
  to,
  name,
  subject,
  html,
}: {
  to: string;
  name: string;
  subject: string;
  html: string;
}) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

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
        from: "noreply@hexabyte.com",
        to,
        subject,
        html,
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

serve(async (req) => {
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
    const inquiryData = await req.json();

    // Validate required fields
    if (!inquiryData.name || !inquiryData.email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name and email are required",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

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
          project_type: inquiryData.projectType || [],
          current_tools: inquiryData.currentTools || [],
          other_tool: inquiryData.otherTool || null,
          challenges: inquiryData.challenges || [],
          goals: inquiryData.goals,
          utm_source: inquiryData.utm_source || null,
          utm_medium: inquiryData.utm_medium || null,
          utm_campaign: inquiryData.utm_campaign || null,
          referrer: inquiryData.referrer || null,
          cta_source: inquiryData.cta_source || null,
          inquiry_started_at: inquiryData.inquiry_started_at || new Date().toISOString(),
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
      <p>We're interested in learning more about your ${inquiryData.projectType.join(", ")} project and your goals to ${inquiryData.goals.toLowerCase()}.</p>
      <p>Our team will follow up within 24 hours with available times to discuss your project and how we can help.</p>
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e5e7eb;">
      <p><strong>What we'll cover:</strong></p>
      <ul>
        <li>Your current challenges and goals</li>
        <li>Recommended solutions and approach</li>
        <li>Timeline and investment</li>
        <li>Next steps if we're a good fit</li>
      </ul>
      <p>In the meantime, feel free to check out our <a href="https://hexabyte-portfolio.com/case-studies">recent projects</a> to see what we've built for other founders and early-stage companies.</p>
      <p>Best regards,<br/>
      <strong>Hexabyte Technologies</strong><br/>
      <a href="https://hexabyte-portfolio.com">hexabyte-portfolio.com</a></p>
    `;

    await sendEmail({
      to: inquiryData.email,
      name: inquiryData.name,
      subject: "We received your inquiry - Next steps",
      html: confirmationHtml,
    });

    // Send internal notification to team
    const internalHtml = `
      <h3>${inquiryData.name} (${inquiryData.role})</h3>
      <p><strong>Email:</strong> <a href="mailto:${inquiryData.email}">${inquiryData.email}</a></p>
      <p><strong>Company:</strong> ${inquiryData.company || "Not specified"}</p>
      <p><strong>Phone:</strong> ${inquiryData.phone || "Not provided"}</p>
      <p><strong>Project Types:</strong> ${inquiryData.projectType.join(", ")}</p>
      <p><strong>Current Tools:</strong> ${inquiryData.currentTools.join(", ") || "Not specified"}</p>
      <p><strong>Challenges:</strong> ${inquiryData.challenges.join(", ")}</p>
      <p><strong>Goals:</strong> ${inquiryData.goals}</p>
      <hr>
      <p><strong>Attribution:</strong></p>
      <p>Source: ${inquiryData.utm_source || "Direct"} | Medium: ${inquiryData.utm_medium || "None"} | Campaign: ${inquiryData.utm_campaign || "None"}</p>
      <p><strong>CTA Source:</strong> ${inquiryData.cta_source || "Unknown"}</p>
      <p><strong>Referrer:</strong> ${inquiryData.referrer || "Direct"}</p>
      <p><strong>Submitted:</strong> ${new Date(inquiryData.submittedAt).toLocaleString()}</p>
      <p><strong>Inquiry ID:</strong> ${inquiry.id}</p>
    `;

    await sendEmail({
      to: "leads@hexabyte.com",
      name: "Hexabyte Team",
      subject: `New Inquiry: ${inquiryData.name} - ${inquiryData.role}`,
      html: internalHtml,
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
