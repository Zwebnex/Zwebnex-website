'use client';

import React from 'react';
import { Layers, ShieldCheck, Cpu, Gauge, Smartphone, Sparkles } from '@/components/Icons';

export default function TrustStrip() {
  const capabilities = [
    { label: 'Next.js App Architecture', icon: Layers },
    { label: 'Supabase PostgreSQL Security', icon: ShieldCheck },
    { label: 'Autonomous AI Integration', icon: Cpu },
    { label: 'Sub-Second Core Web Vitals', icon: Gauge },
    { label: 'Mobile-First Responsive', icon: Smartphone },
    { label: '99.9% Cloud Serverless SLA', icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-slate-50/80 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Built For Fast-Growing & Ambitious Businesses
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-orange-200 hover:shadow-xs transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-[#F27322] shrink-0" />
                <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
