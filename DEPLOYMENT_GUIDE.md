# Production Deployment Guide

This guide covers deploying the Phase 1 portfolio site to production with form submission enabled.

## Architecture Overview

```
Frontend (Vercel)
    ↓
Environment: VITE_FORM_SUBMISSION_ENDPOINT
    ↓
Supabase Edge Function (API)
    ↓
Supabase Database (PostgreSQL)
    ↓
Email Service (Resend)
```

## Prerequisites

- Supabase project created (https://supabase.com)
- Resend account for emails (https://resend.com)
- Vercel account for hosting (https://vercel.com)
- GitHub repo connected to Vercel

## Step 1: Set Up Supabase

### 1.1 Create Supabase Project
1. Go to https://supabase.com and create a new project
2. Note your **Project URL** and **Anon Key**
3. Go to **Settings → API** and copy:
   - `Project URL`
   - `Service Role Key` (under "Project API keys")

### 1.2 Create inquiries Table
1. Go to **SQL Editor**
2. Run the migration: `supabase/migrations/20260320_create_inquiries_table.sql`
3. Verify the table is created: Tables → inquiries

### 1.3 Deploy Edge Function
1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Link your project:
   ```bash
   supabase link --project-ref YOUR_PROJECT_ID
   ```
   (Find YOUR_PROJECT_ID in Supabase dashboard URL)

3. Deploy the function:
   ```bash
   supabase functions deploy submit-inquiry
   ```

4. Verify deployment:
   ```bash
   supabase functions list
   ```
   You should see `submit-inquiry` with a URL like:
   `https://YOUR_PROJECT_ID.supabase.co/functions/v1/submit-inquiry`

## Step 2: Set Up Email Service

### 2.1 Create Resend Account
1. Go to https://resend.com and sign up
2. Create API key in **Settings → API Keys**
3. Copy your API key (starts with `re_`)

### 2.2 Configure Sender Email
1. Go to **Emails** section
2. Add your domain or use default Resend domain
3. Verify sender email if using custom domain

## Step 3: Configure Environment Variables

### 3.1 Set Supabase Secrets
Set secrets for Supabase Edge Function:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
```

Verify it was set:
```bash
supabase secrets list
```

### 3.2 Set Vercel Environment Variables
1. Go to your **Vercel Dashboard**
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add:
   ```
   VITE_FORM_SUBMISSION_ENDPOINT=https://YOUR_PROJECT_ID.supabase.co/functions/v1/submit-inquiry
   ```

## Step 4: Build & Deploy

### 4.1 Build Application
```bash
npm run build
```

Verify build succeeds with no errors.

### 4.2 Deploy to Vercel
Option A: Automatic (recommended)
- Push to your GitHub repo
- Vercel automatically deploys on push to main

Option B: Manual
```bash
vercel --prod
```

## Step 5: Test Form Submission

### 5.1 Test in Production
1. Go to your deployed site
2. Click "Book Your Discovery Inquiry"
3. Fill out the form
4. Click "Continue to Book a Call"
5. Verify:
   - Success message appears
   - Modal moves to calendar step
   - Check Supabase: Table → inquiries → refresh
   - Check email inbox for confirmation

### 5.2 Verify Analytics
1. Open browser DevTools → Console
2. Scroll and trigger form submission
3. Verify in console: `[FormSubmission] Success: ...`
4. Check in Supabase: Table data should show new row

### 5.3 Verify Internal Notification
1. Confirmation email should arrive at leads@hexabyte.com
2. Check email contains all form data

## Step 6: Monitor & Troubleshoot

### Monitor Logs

Check Supabase Edge Function logs:
```bash
supabase functions get-all-logs submit-inquiry
```

Or in dashboard: **Edge Functions → submit-inquiry → Logs**

### Common Issues

**Issue: "Form submission failed: Failed to submit inquiry"**
- Check Supabase secrets are set: `supabase secrets list`
- Verify Edge Function deployed: `supabase functions list`
- Check logs: `supabase functions get-all-logs submit-inquiry`

**Issue: No database record created**
- Verify table exists: Supabase → Tables → inquiries
- Check function logs for database errors
- Verify SERVICE_ROLE_KEY has correct permissions

**Issue: Emails not sent**
- Verify RESEND_API_KEY is set correctly
- Check Resend dashboard for bounces/issues
- Verify sender email is verified in Resend

**Issue: CORS errors**
- Verify CORS headers in Edge Function are correct
- Check browser Network tab for 403/413 errors
- Verify frontend endpoint URL matches function URL

## Step 7: Set Up CRM Integration (Optional)

After form submissions are working, integrate with CRM:

### Option A: HubSpot
1. Get HubSpot API key
2. Modify Edge Function to create contact:
   ```typescript
   const hubspotResponse = await fetch(
     'https://api.hubapi.com/crm/v3/objects/contacts',
     {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${hubspotApiKey}`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         properties: {
           firstname: inquiryData.name,
           email: inquiryData.email,
           company: inquiryData.company,
          }
       })
     }
   );
   ```

### Option B: Airtable Webhook
1. Create Airtable API token
2. Modify Edge Function to add record to base

### Option C: n8n Automation
1. Create n8n webhook that triggers on HTTP POST
2. Configure n8n to:
   - Add to database
   - Send emails
   - Create calendar invite

## Step 8: Set Up Calendar Booking

Update the modal step 2 to show calendar embed:

### Calendly
```typescript
<iframe
  src="https://calendly.com/YOUR_USERNAME?background_color=000000"
  width="100%"
  height="600"
/>
```

### Cal.com
```typescript
Cal.inline({
  elementOrSelector: "cal-embed",
  calLink: "your-username",
  config: {
    layout: "month_view",
  }
})
```

## Monitoring Dashboard

Create a simple monitoring view in Supabase:

```sql
SELECT
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as inquiries,
  COUNT(DISTINCT email) as unique_visitors,
  array_agg(DISTINCT utm_source) as sources
FROM inquiries
GROUP BY date
ORDER BY date DESC;
```

Or in Vercel Analytics:
- Track form conversion rate
- Monitor page performance
- Check Core Web Vitals

## Rollback Procedure

If issues occur:

1. **Revert frontend code**:
   ```bash
   git revert HEAD
   git push origin main
   # Vercel auto-deploys
   ```

2. **Disable form submissions** (temporary):
   Set `VITE_FORM_SUBMISSION_ENDPOINT` to undefined in Vercel
   Forms will show graceful error

3. **Restore from backup**:
   Supabase → Backups → Restore

## Performance Checklist

- [ ] Form submission completes in < 2 seconds
- [ ] Page load time < 3 seconds
- [ ] No console errors on production
- [ ] Database queries optimized (check Supabase metrics)
- [ ] Email delivery rate > 95%
- [ ] No CORS blocking issues

## Security Checklist

- [ ] Supabase RLS policies enabled
- [ ] API keys not exposed in frontend code
- [ ] Service role key only in Supabase secrets
- [ ] Email validation on submit
- [ ] Rate limiting on form endpoint
- [ ] HTTPS enforced on all requests

## Next Steps

1. Monitor form submissions daily for first week
2. Set up CRM integration for lead management
3. Add calendar booking calendar system
4. Configure automated follow-up emails
5. Build admin dashboard for managing inquiries

## Support

For issues:
1. Check Supabase documentation: https://supabase.com/docs
2. Check Vercel docs: https://vercel.com/docs
3. Check Resend: https://resend.com/docs
4. Open issue in GitHub repo

---

**Status**: Phase 1 production deployment ready
**Last Updated**: March 20, 2026
