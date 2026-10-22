import React from 'react';
import Link from 'next/link';
import { BRAND_VALUES } from '@/lib/data';
import { Sparkles, Gauge, Target, ShieldCheck, MessageSquareCheck, Layers, ArrowRight } from '@/components/Icons';

const valueIcons: Record<string, React.ElementType> = {
  Sparkles,
  Gauge,
  Target,
  ShieldCheck,
  MessageSquareCheck,
  Layers,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            Why Partner With Zwebnex
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered For Measurable Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We bridge the gap between creative visual excellence and rock-solid software engineering to build assets that drive revenue.
          </p>
        </div>

        {/* 6 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_VALUES.map((val, idx) => {
            const Icon = valueIcons[val.iconName] || Sparkles;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-200 shadow-2xs hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F27322] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to Dedicated About Page */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            scroll={true}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors shadow-2xs group"
          >
            <span>Read Our Full Story & Engineering Philosophy</span>
            <ArrowRight className="w-4 h-4 text-[#F27322] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
