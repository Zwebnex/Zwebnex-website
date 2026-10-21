import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zwebnex Digital Agency',
  description: 'Understand how Zwebnex collects, uses, and safeguards information submitted through our website and services.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        
        <div className="space-y-2 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: October 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            When you request a proposal, contact our team, or subscribe to our newsletter, Zwebnex collects only the personal information you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number (if provided)</li>
            <li>Business or Organization Name</li>
            <li>Project Requirements, Budget Preferences & Communication Intent</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed">
            We use your submitted details exclusively to:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
            <li>Evaluate project requirements and deliver customized project proposals.</li>
            <li>Communicate with you regarding your inquiry via your preferred method.</li>
            <li>Distribute occasional digital agency insights if you voluntarily subscribed to our newsletter.</li>
            <li>Maintain internal business records and satisfy legal obligations.</li>
          </ul>
          <p className="text-sm leading-relaxed font-semibold text-slate-900">
            We never sell, rent, or trade your contact information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Data Storage & Security</h2>
          <p className="text-sm leading-relaxed">
            All submitted enquiries and newsletter subscriptions are stored within an encrypted Supabase PostgreSQL database protected by strict Row-Level Security (RLS) policies. Unauthorized public queries or anonymous scraping of submitted data are systematically denied.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Your Data Rights</h2>
          <p className="text-sm leading-relaxed">
            You may at any time request access to, correction of, or permanent deletion of your stored records by submitting a request through our{' '}
            <Link href="/contact" className="text-[#F27322] font-semibold hover:underline">
              Contact Page
            </Link>.
          </p>
        </section>

      </div>
    </div>
  );
}
