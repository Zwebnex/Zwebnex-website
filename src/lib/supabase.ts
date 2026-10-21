import { createClient } from '@supabase/supabase-js';
import { ServiceLead, NewsletterSubscriber } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wfssqoirmhvlpudooigx.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmc3Nxb2lybWh2bHB1ZG9vaWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxODIyMDEsImV4cCI6MjEwNzc1ODIwMX0.if37nY5Nf8TBxec6x84Ag8HjV0799eKP8wUlC7pM1Pc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export async function submitServiceLead(lead: ServiceLead): Promise<{ success: boolean; error?: string; data?: any }> {
  try {
    // Validate required fields
    if (!lead.full_name || !lead.email || !lead.project_description) {
      return { success: false, error: 'Please provide your full name, email, and project description.' };
    }

    const normalizedEmail = lead.email.trim().toLowerCase();
    const leadId = crypto.randomUUID();
    const payload = {
      id: leadId,
      full_name: lead.full_name.trim(),
      business_name: lead.business_name?.trim() || null,
      email: normalizedEmail,
      phone: lead.phone?.trim() || null,
      service_interest: lead.service_interest || 'General Inquiry',
      budget_range: lead.budget_range || 'Flexible',
      project_description: lead.project_description.trim(),
      preferred_contact_method: lead.preferred_contact_method || 'email',
      status: 'new'
    };

    const { error } = await supabase
      .from('service_leads')
      .insert([payload]);

    if (error) {
      console.error('Supabase lead submission error:', error);
      return { success: false, error: error.message || 'Failed to submit inquiry. Please try again.' };
    }

    return { success: true, data: { id: leadId } };
  } catch (err: any) {
    console.error('Lead submission exception:', err);
    return { success: false, error: err.message || 'An unexpected error occurred.' };
  }
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; error?: string; alreadySubscribed?: boolean }> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !normalizedEmail.includes('@') || !normalizedEmail.includes('.')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{
        email: normalizedEmail,
        status: 'subscribed'
      }]);

    if (error) {
      // Postgres unique violation code 23505
      if (error.code === '23505' || error.message?.includes('duplicate key') || error.message?.includes('unique')) {
        return { success: true, alreadySubscribed: true };
      }
      console.error('Supabase newsletter subscription error:', error);
      return { success: false, error: error.message || 'Failed to subscribe. Please try again.' };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Newsletter subscription exception:', err);
    return { success: false, error: err.message || 'An unexpected error occurred.' };
  }
}
