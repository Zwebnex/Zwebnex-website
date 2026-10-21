import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Zwebnex Digital Agency',
  description: 'Review the service terms, project milestones, intellectual property, and client engagement guidelines for Zwebnex.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        
        <div className="space-y-2 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: October 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Scope of Services</h2>
          <p className="text-sm leading-relaxed">
            Zwebnex provides digital agency services including custom website development, e-commerce engineering, search engine optimization, paid marketing management, branding design, and AI automation. Specific project scopes, milestones, deliverables, and timelines are formally defined in individual Statements of Work (SOW) or project proposals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Client Ownership & Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            Upon final receipt of payment, the client retains 100% intellectual property ownership of the custom code, designs, and digital assets developed specifically for their project. Any third-party open-source libraries (e.g. Next.js, React, Tailwind CSS) remain subject to their respective open-source licenses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Milestone Payments & Invoicing</h2>
          <p className="text-sm leading-relaxed">
            Projects are invoiced on agreed milestone schedules (typically 50% deposit upon kickoff and 50% upon final sign-off and deployment). Work progresses upon confirmation of agreed milestones.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Warranties & Post-Launch Support</h2>
          <p className="text-sm leading-relaxed">
            All custom deliverables include a 30 to 60-day post-launch warranty period during which any technical defects, responsive rendering issues, or bugs directly related to the contracted scope are corrected at zero additional cost.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Contact & Questions</h2>
          <p className="text-sm leading-relaxed">
            If you have questions regarding these terms, please contact our leadership team via our{' '}
            <Link href="/contact" className="text-[#F27322] font-semibold hover:underline">
              Contact Page
            </Link>.
          </p>
        </section>

      </div>
    </div>
  );
}
