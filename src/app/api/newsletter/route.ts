import { NextRequest, NextResponse } from 'next/server';
import { subscribeNewsletter } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    const result = await subscribeNewsletter(email);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    if (result.alreadySubscribed) {
      return NextResponse.json({
        success: true,
        message: 'You are already subscribed to our newsletter with this email address.'
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to digital insights and updates!'
    });
  } catch (error: any) {
    console.error('API /api/newsletter error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error while subscribing.' }, { status: 500 });
  }
}
