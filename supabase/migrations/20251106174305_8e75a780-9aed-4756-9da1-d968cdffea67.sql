-- Create table for builder inquiries
CREATE TABLE public.builder_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  vehicle_types TEXT NOT NULL,
  annual_production TEXT NOT NULL,
  questions TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.builder_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Anyone can submit builder inquiry"
ON public.builder_inquiries
FOR INSERT
TO public
WITH CHECK (true);