import { NextRequest, NextResponse } from 'next/server';
import { submitServiceLead } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const full_name = body.full_name || body.fullName;
    const email = body.email;
    const business_name = body.business_name || body.businessName;
    const phone = body.phone;
    const service_interest = body.service_interest || body.serviceInterest;
    const budget_range = body.budget_range || body.budgetRange;
    const project_description = body.project_description || body.projectDescription;
    const preferred_contact_method = body.preferred_contact_method || body.preferredContactMethod;

    // Server-side validation
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Full name is required (min 2 characters).' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!project_description || typeof project_description !== 'string' || project_description.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Please provide a project description (min 10 characters).' }, { status: 400 });
    }

    const result = await submitServiceLead({
      full_name,
      business_name,
      email,
      phone,
      service_interest,
      budget_range,
      project_description,
      preferred_contact_method
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our team will reach out within 24 business hours.',
      id: result.data?.id
    });
  } catch (error: any) {
    console.error('API /api/contact error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error while processing request.' }, { status: 500 });
  }
}
