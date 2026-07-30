-- Newsletter signups, separate from inquiries.
--
-- The Resources form collects an email address and nothing else. Writing those
-- into public.inquiries would mean inventing a name, a role and a goals string
-- to satisfy its NOT NULL columns — fabricated data in the table the founder
-- reads to decide who to call back. They get their own table instead.

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  cta_source text,
  referrer text,
  submitted_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- One row per address. The Edge Function upserts on this, so a repeat signup
-- refreshes the row rather than failing the request in the visitor's face.
CREATE UNIQUE INDEX idx_newsletter_subscribers_email
  ON public.newsletter_subscribers (lower(email));

CREATE INDEX idx_newsletter_subscribers_created_at
  ON public.newsletter_subscribers (created_at DESC);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Inserts arrive only via the Edge Function, which uses the service role and
-- bypasses RLS. No anon policy: nothing else should be writing here.
CREATE POLICY "Allow authenticated to read newsletter subscribers"
  ON public.newsletter_subscribers
  FOR SELECT
  USING (auth.role() = 'authenticated');
