import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { Mail, Clock, ShieldCheck, CheckCircle2, Sparkles, MessageSquare } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact Us & Request a Free Quote | Zwebnex Agency',
  description: 'Discuss your digital project with Zwebnex. Request a free custom proposal for website development, e-commerce, AI automation, or digital marketing.',
};

export default function ContactPage() {
  return (
    <div className="pt-4 pb-20 bg-gradient-to-b from-orange-50/30 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F27322] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#F27322] font-semibold">Contact</span>
          </nav>

          <div className="block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F27322] animate-pulse" />
              <span>Direct Project Inquiry</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Something{' '}
            <span className="text-[#F27322]">Exceptional Together</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below with your project goals. We analyze your requirements and prepare a custom, fixed-scope proposal within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form with Suspense Boundary */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="p-12 text-center rounded-3xl bg-white border border-slate-200">
                <div className="w-8 h-8 border-2 border-[#F27322] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="mt-3 text-xs text-slate-500">Loading inquiry form...</p>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Why Work With Us & Agency Assurances */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-900 text-white p-8 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F27322]" />
                <span>What Happens Next?</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-[#F27322] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Technical Review</strong>
                    Our engineering and UI leads evaluate your business requirements and technical stack fit.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-[#F27322] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Fixed-Scope Proposal</strong>
                    You receive a tailored quote with transparent milestones, deliverables, and exact timelines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-[#F27322] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Zero-Obligation Consultation</strong>
                    We review the plan together to ensure 100% alignment before any commitment is made.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>NDA & Confidentiality guaranteed for all project discussions.</span>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4 text-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Agency Commitments
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F27322]" />
                  <span>Prompt Response Within 24 Business Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Direct Communication with Senior Developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F27322]" />
                  <span>Secure Supabase Data Infrastructure</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
