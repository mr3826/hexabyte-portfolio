# Form Submission Integration Guide

This document describes how to set up the inquiry form submission endpoint for Phase 1B.

## Overview

The inquiry form collects user data and submits it to a backend endpoint. The form includes:
- Contact information (name, email, company, phone)
- Project details (role, project type, tools, challenges, goals)
- Attribution data (UTM parameters, referrer)

## Configuration

### 1. Environment Setup

Create a `.env.local` file in the project root:

```bash
VITE_FORM_SUBMISSION_ENDPOINT=http://localhost:3001/api/inquiries/submit
```

For production, set this to your deployed endpoint URL.

### 2. Expected Request Format

The form submission service sends a POST request with this structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc.",
  "phone": "+1 (555) 000-0000",
  "role": "founder",
  "projectType": ["AI Automation", "Web Application"],
  "currentTools": ["Airtable", "Internal tools"],
  "otherTool": "Custom scripts",
  "challenges": ["Too much manual work", "Scaling issues"],
  "goals": "Automate our data processing pipeline",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "brand",
  "referrer": "https://google.com",
  "cta_source": "project_modal_submit",
  "inquiry_started_at": "2026-03-20T12:34:56.789Z",
  "submittedAt": "2026-03-20T12:35:00.789Z"
}
```

### 3. Expected Response Format

The endpoint should return:

```json
{
  "success": true,
  "message": "Inquiry received successfully",
  "inquiryId": "inq_123456789",
  "nextStep": "booking"
}
```

On error:

```json
{
  "success": false,
  "message": "Failed to process inquiry: [specific error]"
}
```

## Implementation Options

### Option A: Node.js/Express

```typescript
import express from 'express';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

app.post('/api/inquiries/submit', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      role,
      projectType,
      goals,
      utm_source,
      referrer,
    } = req.body;

    // 1. Store in database
    const inquiry = await db.inquiries.create({
      name,
      email,
      company,
      phone,
      role,
      projectType: projectType.join(', '),
      goals,
      utmSource: utm_source,
      referrer,
      submittedAt: new Date(),
    });

    // 2. Send confirmation email to user
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'noreply@hexabyte.com',
      to: email,
      subject: 'We received your inquiry - Next steps',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! We've received your inquiry and will review it shortly.</p>
        <p>Our team will follow up within 24 hours with available times to discuss your ${projectType.join(
          ', '
        )} project.</p>
        <p>Best regards,<br/>Hexabyte Technologies</p>
      `,
    });

    // 3. Send internal notification
    await resend.emails.send({
      from: 'noreply@hexabyte.com',
      to: 'leads@hexabyte.com',
      subject: `New Inquiry: ${name} - ${role}`,
      html: `
        <h3>${name} (${role})</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Types:</strong> ${projectType.join(', ')}</p>
        <p><strong>Goals:</strong> ${goals}</p>
        <p><strong>Source:</strong> ${utm_source}</p>
      `,
    });

    // 4. Optionally: Create calendar invite or CRM record
    // await createHubSpotContact(inquiry);
    // await createCalendlyEventType(inquiry);

    return res.json({
      success: true,
      message: 'Inquiry received successfully',
      inquiryId: inquiry.id,
      nextStep: 'booking',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry',
    });
  }
});
```

### Option B: Vercel Edge Function

```typescript
// pages/api/inquiries/submit.ts
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const inquiryData = req.body;

    // Store in database
    const response = await fetch('https://db.supabase.co/rest/v1/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SUPABASE_API_KEY}`,
        apikey: process.env.SUPABASE_API_KEY!,
      },
      body: JSON.stringify(inquiryData),
    });

    const inquiry = await response.json();

    // Send emails via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'noreply@hexabyte.com',
      to: inquiryData.email,
      subject: 'We received your inquiry',
      react: <ConfirmationEmail name={inquiryData.name} />,
    });

    return res.json({
      success: true,
      message: 'Inquiry received',
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry',
    });
  }
}
```

### Option C: Supabase Edge Function

```typescript
// supabase/functions/submit-inquiry/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const inquiryData = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
    );

    // Insert into inquiries table
    const { data, error } = await supabase
      .from('inquiries')
      .insert([inquiryData])
      .select()
      .single();

    if (error) throw error;

    // Send confirmation email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@hexabyte.com',
        to: inquiryData.email,
        subject: 'We received your inquiry',
        html: `Thank you for your inquiry, ${inquiryData.name}!`,
      }),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inquiry received',
        inquiryId: data.id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message,
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

### Option D: n8n Webhook

Create a webhook workflow in n8n that:

1. Receives POST requests to your webhook URL
2. Stores data in a database node (PostgreSQL, MongoDB, or spreadsheet)
3. Sends confirmation emails (Gmail, SendGrid, Resend)
4. Creates calendar invites or CRM contacts
5. Returns success response

Webhook URL pattern:
```
https://n8n.example.com/webhook/inquiry-submission
```

## Testing

### Local Development

1. Start your backend server on port 3001
2. Set `VITE_FORM_SUBMISSION_ENDPOINT=http://localhost:3001/api/inquiries/submit`
3. Run `npm run dev`
4. Fill out the form and check:
   - Backend receives POST request
   - Response is valid JSON with `success: true`
   - Browser console shows "submission successful"

### Production Deployment

1. Deploy backend endpoint to your platform (Vercel, Supabase, AWS, etc.)
2. Set `VITE_FORM_SUBMISSION_ENDPOINT` to production URL in build environment
3. Test on deployed site
4. Monitor form submissions in your database/CRM

## Database Schema (Example)

If using Supabase/PostgreSQL:

```sql
CREATE TABLE inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  role TEXT NOT NULL,
  project_type TEXT[],
  current_tools TEXT[],
  other_tool TEXT,
  challenges TEXT[],
  goals TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  cta_source TEXT,
  inquiry_started_at TIMESTAMP,
  submitted_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_inquiries_email ON inquiries(email);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);
```

## Error Handling

The form submission service handles these scenarios:

1. **Network Error**: Shows user-friendly error message, suggestion to try again
2. **Validation Error**: Shows specific field validation errors
3. **Server Error (5xx)**: Shows "Unable to process request" with retry button
4. **Timeout (>10s)**: Shows timeout error with retry option

All errors are logged to analytics with `inquiry_submission_failed` event.

## Next Steps

After setting up the form submission endpoint:

1. Test end-to-end with real form submissions
2. Monitor database for received inquiries
3. Set up email notifications to the team
4. Integrate with CRM (HubSpot, Pipedrive, etc.)
5. Connect booking calendar (Calendly, Cal.com)
6. Set up automated follow-up sequences
