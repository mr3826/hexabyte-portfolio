-- Create inquiries table for form submissions
-- Run this migration in Supabase SQL Editor

CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  role text NOT NULL,
  project_type text[] DEFAULT '{}',
  current_tools text[] DEFAULT '{}',
  other_tool text,
  challenges text[] DEFAULT '{}',
  goals text NOT NULL,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  cta_source text,
  inquiry_started_at timestamp with time zone,
  submitted_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX idx_inquiries_email ON public.inquiries(email);
CREATE INDEX idx_inquiries_created_at ON public.inquiries(created_at DESC);
CREATE INDEX idx_inquiries_role ON public.inquiries(role);
CREATE INDEX idx_inquiries_utm_source ON public.inquiries(utm_source);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow insert from Edge Function
CREATE POLICY "Allow service role to insert inquiries"
  ON public.inquiries
  FOR INSERT
  WITH CHECK (true);

-- Allow read from authenticated users (dashboard access)
CREATE POLICY "Allow authenticated to read inquiries"
  ON public.inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create a view for inquiries summary (useful for dashboards)
CREATE VIEW public.inquiries_summary AS
SELECT
  id,
  name,
  email,
  company,
  role,
  project_type,
  challenges,
  utm_source,
  cta_source,
  created_at
FROM public.inquiries
ORDER BY created_at DESC;

-- Grant select on view to authenticated users
GRANT SELECT ON public.inquiries_summary TO authenticated;
