# Production Deployment Checklist

## Phase 1: Pre-Deployment (Setup Infrastructure)

- [ ] **Supabase Setup**
  - [ ] Create Supabase project at https://supabase.com
  - [ ] Copy Project URL and Service Role Key
  - [ ] Set up `supabase/config.json` with your `project_id`
  - [ ] Run migration: `supabase/migrations/20260320_create_inquiries_table.sql`
  - [ ] Verify inquiries table created in Supabase dashboard

- [ ] **Resend Setup**
  - [ ] Create account at https://resend.com
  - [ ] Create API key in Settings → API Keys
  - [ ] Set up sender email (verify domain or use Resend domain)
  - [ ] Note: leads@hexabyte.com must be configured in frontend

- [ ] **Supabase Edge Function Deployment**
  - [ ] Install Supabase CLI: `npm install -g supabase`
  - [ ] Link project: `supabase link --project-ref YOUR_PROJECT_ID`
  - [ ] Set secret: `supabase secrets set RESEND_API_KEY=your_key`
  - [ ] Deploy function: `supabase functions deploy submit-inquiry`
  - [ ] Verify: `supabase functions list` → copy function URL

## Phase 2: Frontend Configuration

- [ ] **Vercel Project Setup**
  - [ ] Connect GitHub repo to Vercel (if not already done)
  - [ ] Select project in Vercel dashboard

- [ ] **Environment Variables (Vercel)**
  - [ ] Go to Settings → Environment Variables
  - [ ] Add: `VITE_FORM_SUBMISSION_ENDPOINT=https://YOUR_PROJECT_ID.supabase.co/functions/v1/submit-inquiry`
  - [ ] Save and rebuild

- [ ] **Domain Configuration**
  - [ ] Set custom domain in Vercel (if using custom domain)
  - [ ] Update DNS records (if applicable)
  - [ ] Wait for SSL certificate generation

## Phase 3: Deployment & Testing

- [ ] **Deploy Application**
  - [ ] Push any pending changes to main branch
  - [ ] Verify Vercel build succeeds automatically
  - [ ] Check deployment URL is working

- [ ] **Test Form Submission (Staging)**
  - [ ] Go to deployed staging site
  - [ ] Scroll to "Book Your Discovery Inquiry" button
  - [ ] Fill out all required fields
  - [ ] Submit form
  - [ ] Verify success message appears
  - [ ] Verify modal advances to calendar step

- [ ] **Verify Database Records**
  - [ ] Go to Supabase dashboard → Tables → inquiries
  - [ ] Refresh table view
  - [ ] Verify test inquiry appears with correct data

- [ ] **Verify Email Delivery**
  - [ ] Check sender email for confirmation (check spam/promotions)
  - [ ] Confirm all email contains correct name and details
  - [ ] Check leads@hexabyte.com for internal notification
  - [ ] Verify both emails have correct formatting

- [ ] **Check Analytics Events**
  - [ ] Open DevTools Console
  - [ ] Submit form
  - [ ] Verify: `[FormSubmission] Success: { success: true, ... }`
  - [ ] Check: `inquiry_submitted` event logged

## Phase 4: Performance & Security

- [ ] **Performance Checks**
  - [ ] Form submission completes in < 2 seconds
  - [ ] Page load time remains < 3 seconds
  - [ ] Mobile responsiveness working
  - [ ] Modal keyboard navigation working
  - [ ] Touch targets ≥ 44px on mobile

- [ ] **Security Verification**
  - [ ] No API keys visible in frontend code
  - [ ] CORS headers correct in Edge Function
  - [ ] RLS policies enabled on inquiries table
  - [ ] Service role key only in Supabase secrets
  - [ ] No sensitive data in browser console logs

- [ ] **Accessibility Check**
  - [ ] Modal keyboard accessible (Tab, Escape)
  - [ ] Focus visible on all interactive elements
  - [ ] Form labels associated with inputs
  - [ ] Error messages accessible

## Phase 5: Monitoring & Alerts

- [ ] **Log Monitoring Setup**
  - [ ] Test getting function logs: `supabase functions get-all-logs submit-inquiry`
  - [ ] Bookmark Supabase Edge Function logs page
  - [ ] Check logs for errors in first hour

- [ ] **Sentry/Error Tracking (Optional)**
  - [ ] Set up error tracking service
  - [ ] Configure API endpoint error reporting

- [ ] **Database Monitoring**
  - [ ] Note current database usage
  - [ ] Set up monitoring alerts if applicable

## Phase 6: Production Cutover

- [ ] **Switch to Production**
  - [ ] If staging domain, switch DNS to production
  - [ ] Verify production domain accessible
  - [ ] Confirm no mixed-content warnings

- [ ] **Submit to Search Engines**
  - [ ] Add site to Google Search Console
  - [ ] Submit sitemap.xml
  - [ ] Verify robots.txt is accessible

- [ ] **First Day Monitoring**
  - [ ] Monitor form submissions every hour
  - [ ] Check email delivery working
  - [ ] Monitor Supabase database size
  - [ ] Monitor Vercel response times

## Phase 7: Post-Deployment

- [ ] **Team Communication**
  - [ ] Notify team of deployment
  - [ ] Share product link
  - [ ] Document any manual steps taken

- [ ] **Set Up Automations**
  - [ ] Configure CRM integration (HubSpot/Pipedrive)
  - [ ] Set up calendar booking embed (Calendly/Cal.com)
  - [ ] Configure email automation sequences

- [ ] **Documentation Updates**
  - [ ] Update README with production URL
  - [ ] Document actual Supabase project ID
  - [ ] Document any custom configuration

- [ ] **Backup & Disaster Recovery**
  - [ ] Test Supabase backups
  - [ ] Document recovery procedure
  - [ ] Set up automated backups

## Troubleshooting Reference

### Form Not Submitting
1. Check browser console for errors
2. Check Vercel environment variables
3. Check Supabase function logs: `supabase functions get-all-logs submit-inquiry`
4. Verify endpoint URL matches exactly

### Emails Not Sending
1. Check RESEND_API_KEY is set correctly
2. Verify sender email in Resend dashboard
3. Check spam folder on recipient email
4. Check Resend dashboard for bounces

### Database Errors
1. Verify inquiries table exists
2. Verify RLS policies are correct
3. Check Supabase function has service role credentials

### CORS Issues
1. Check browser Network tab
2. Verify CORS headers in Edge Function
3. Clear browser cache and retry

## Verification Command (POST Deployment)

```bash
# Test form submission endpoint directly
curl -X POST https://YOUR_PROJECT_ID.supabase.co/functions/v1/submit-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "role": "founder",
    "projectType": ["AI Automation"],
    "challenges": ["Scaling"],
    "goals": "Test submission"
  }'

# Expected response:
# {
#   "success": true,
#   "message": "Inquiry received successfully",
#   "inquiryId": "uuid-here",
#   "nextStep": "booking"
# }
```

## Rollback Procedure

If critical issues:
1. Revert main branch: `git revert HEAD`
2. Push to GitHub (auto-deploys via Vercel)
3. Or disable form temporarily via Vercel env var
4. Contact Supabase support if database issues

## Sign-Off Checklist

- [ ] All tests passing
- [ ] Form submission working end-to-end
- [ ] Emails sending correctly
- [ ] No console errors in production
- [ ] Performance meets targets
- [ ] Security review completed
- [ ] Team informed and ready
- [ ] Monitoring system active
- [ ] Ready for marketing/launch

---

**Status**: Deployment ready
**Last Updated**: March 20, 2026
**Owner**: Hexabyte Technologies

For detailed instructions, see: DEPLOYMENT_GUIDE.md
