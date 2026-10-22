import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/data';
import ConversionBanner from '@/components/ConversionBanner';
import { ShoppingCart, Rocket, Building2, CheckCircle, ArrowRight, ExternalLink } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Real Results from Real Clients',
  description: 'Explore Zwebnex client case studies and demonstrated project outcomes across e-commerce re-architecture, SaaS growth, and local business digital transformation.',
};

const iconMap: Record<string, React.ElementType> = {
  'e-commerce': ShoppingCart,
  saas: Rocket,
  local: Building2,
};

export default function PortfolioPage() {
  return (
    <div className="pt-4 pb-16">
      {/* Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-orange-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F27322] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#F27322] font-semibold">Case Studies</span>
          </nav>

          <div className="block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
              Proven Results & Architecture
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Case Studies & <span className="text-[#F27322]">Client Outcomes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover how we translate business challenges into high-converting digital storefronts, SaaS applications, and automated customer acquisition pipelines.
          </p>
        </div>
      </section>

      {/* Case Studies Detailed Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {CASE_STUDIES.map((study) => {
          const Icon = iconMap[study.category] || Rocket;
          return (
            <div
              key={study.id}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Metrics & Results */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#F27322] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      {study.categoryLabel}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {study.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.summary}
                </p>

                {/* Measurable Results */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Measurable Project Impacts:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {study.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className="pt-3">
                  <Link
                    href={`/contact?service=Inquiry%20regarding%20${encodeURIComponent(study.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow-sm hover:shadow transition-all group"
                  >
                    <span>Discuss a Similar Solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Impact Metric Dashboard */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white border border-slate-700 shadow-xl flex flex-col justify-between min-h-[300px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Core Outcome
                  </span>
                  {study.isDemo && (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                      Demonstration Model
                    </span>
                  )}
                </div>

                <div className="my-6">
                  <div className="text-5xl sm:text-6xl font-black text-[#F27322] tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-slate-200 mt-2">
                    {study.metricLabel}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Client: {study.client}</span>
                  <span className="text-emerald-400 font-medium">Verified Architecture</span>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      <ConversionBanner />
    </div>
  );
}
