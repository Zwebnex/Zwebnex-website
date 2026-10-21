-- =========================================================================
-- ZWEBNEX DIGITAL AGENCY - SUPABASE SCHEMA MIGRATION
-- Project: Zwebnex Official Website
-- Tables: service_leads, newsletter_subscribers
-- Security: Row Level Security (RLS) enabled with strict insert-only public policies
-- =========================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Table: service_leads
CREATE TABLE IF NOT EXISTS public.service_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    business_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    service_interest TEXT DEFAULT 'General Inquiry',
    budget_range TEXT DEFAULT 'Flexible',
    project_description TEXT NOT NULL,
    preferred_contact_method TEXT DEFAULT 'email',
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for service_leads queries
CREATE INDEX IF NOT EXISTS idx_service_leads_created_at ON public.service_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_service_leads_status ON public.service_leads(status);
CREATE INDEX IF NOT EXISTS idx_service_leads_email ON public.service_leads(email);

-- 2. Table: newsletter_subscribers
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
    subscribed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for newsletter_subscribers
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON public.newsletter_subscribers(subscribed_at DESC);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

-- Enable RLS on both tables
ALTER TABLE public.service_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop any existing public policies to ensure clean state
DROP POLICY IF EXISTS "Public insert only for service leads" ON public.service_leads;
DROP POLICY IF EXISTS "Public insert only for newsletter" ON public.newsletter_subscribers;

-- Policy: service_leads public insert only
-- Allows anon / authenticated visitors to insert leads with mandatory fields and safe default status ('new')
-- Anonymous SELECT, UPDATE, DELETE are strictly prohibited (denied by default in RLS)
CREATE POLICY "Public insert only for service leads"
    ON public.service_leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        full_name IS NOT NULL AND
        email IS NOT NULL AND
        project_description IS NOT NULL AND
        status = 'new'
    );

-- Policy: newsletter_subscribers public insert only
-- Allows anon / authenticated visitors to subscribe with verified 'subscribed' status
-- Anonymous SELECT, UPDATE, DELETE are strictly prohibited (denied by default in RLS)
CREATE POLICY "Public insert only for newsletter"
    ON public.newsletter_subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        email IS NOT NULL AND
        status = 'subscribed'
    );
