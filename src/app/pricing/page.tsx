import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRICING_PACKAGES, FAQS } from '@/lib/data';
import PricingSection from '@/components/PricingSection';
import ConversionBanner from '@/components/ConversionBanner';
import { Check, HelpCircle, ShieldCheck, Globe, Server, Clock } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Pricing & Investment Packages | Transparent Proposals | Zwebnex',
  description: 'Explore Zwebnex digital agency packages. From starter web identity to enterprise e-commerce and autonomous AI automation.',
};

export default function PricingPage() {
  return (
    <div className="pt-4 pb-16">
      {/* Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-orange-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F27322] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#F27322] font-semibold">Pricing</span>
          </nav>

          <div className="block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
              Predictable & Transparent Scope
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Packages for <span className="text-[#F27322]">Every Stage</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All Zwebnex projects feature clear milestone deliverables, fixed-scope agreements, and zero unexpected renewal surprises.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <PricingSection />

      {/* Transparent Terms & Hosting Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl font-bold text-slate-900">
              Clear Hosting, Domain & Maintenance Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              We ensure you maintain complete ownership and transparency of all digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#F27322] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Domain Ownership</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain 100% legal ownership of your domain name. We configure your DNS records, SSL certificates, and canonical routing seamlessly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#F27322] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Global Cloud Hosting</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deployments run on Vercel's enterprise global CDN network backed by Supabase cloud database with automatic SSL and daily backups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#F27322] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Post-Launch Guarantee</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every project includes 30 to 60 days of complimentary bug resolution, performance monitoring, and team training upon deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
}
