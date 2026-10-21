'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/data';
import { ShoppingCart, Rocket, Building2, ArrowRight, ExternalLink, CheckCircle } from '@/components/Icons';

const categoryIcons: Record<string, React.ElementType> = {
  'e-commerce': ShoppingCart,
  saas: Rocket,
  local: Building2,
};

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'e-commerce' | 'saas' | 'local'>('all');

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Results from Real Clients
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal">
              Explore how our digital architecture, conversion optimization, and AI automation accelerate measurable client outcomes.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F27322] hover:text-[#D45607] transition-colors shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'e-commerce', label: 'E-commerce' },
            { id: 'saas', label: 'SaaS & Platforms' },
            { id: 'local', label: 'Local Business' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === tab.id
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid (Matching reference layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredStudies.map((cs) => {
            const Icon = categoryIcons[cs.category] || Rocket;
            return (
              <div
                key={cs.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#F27322]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Category Pill with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 text-[#F27322] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    {cs.isDemo && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        Demo Showcase
                      </span>
                    )}
                  </div>

                  {/* Industry Label */}
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {cs.categoryLabel}
                  </span>

                  {/* Metric Callout (Like +180% / +250% in reference) */}
                  <div className="text-3xl font-black text-[#F27322] mb-1 tracking-tight">
                    {cs.metric}
                  </div>
                  <div className="text-xs font-medium text-slate-700 mb-4">
                    {cs.metricLabel}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {cs.summary}
                  </p>

                  {/* Key Results */}
                  <div className="space-y-1.5 mb-6">
                    {cs.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 group-hover:text-[#F27322] transition-colors">
                    {cs.client}
                  </span>
                  <Link
                    href={`/contact?service=Case%20Study%20Inquiry%20(${encodeURIComponent(cs.title)})`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F27322] group-hover:text-[#D45607]"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
