'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, TrendingUp } from '@/components/Icons';

interface ConversionBannerProps {
  preselectedService?: string;
}

export default function ConversionBanner({ preselectedService }: ConversionBannerProps) {
  const queryParam = preselectedService
    ? `?service=${encodeURIComponent(preselectedService)}`
    : '?intent=proposal';

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container inspired by the Reference Screenshot */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-[#182234] to-slate-900 border border-slate-700/80 shadow-2xl p-8 sm:p-12 lg:p-14">
          
          {/* Subtle Orange Glow behind banner */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#F27322]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left: 3D Target & Growth Visual Graphic */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                {/* Concentric Bullseye Circles */}
                <div className="absolute inset-0 rounded-full bg-slate-800/80 border-2 border-slate-700 flex items-center justify-center shadow-inner">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-700/60 border-2 border-orange-500/30 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F27322] flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Mini Bar Accent */}
                <div className="absolute -bottom-2 -right-2 bg-slate-800/90 border border-slate-700 px-2 py-1 rounded-md flex items-end gap-1 shadow-lg">
                  <div className="w-1.5 h-3 bg-orange-300 rounded-t" />
                  <div className="w-1.5 h-5 bg-[#F27322] rounded-t" />
                  <div className="w-1.5 h-7 bg-emerald-400 rounded-t" />
                </div>
              </div>
            </div>

            {/* Center: Bold Headline and Copy */}
            <div className="flex-1 text-center lg:text-left space-y-2.5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Take Your Business to the Next Level?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Let’s create a winning digital solution that fits your exact business goals and drives quantifiable revenue growth.
              </p>
            </div>

            {/* Right: Button & Guarantee Badge */}
            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <Link
                href={`/contact${queryParam}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-slate-900 bg-white hover:bg-orange-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 group"
              >
                <span>Get Your Free Proposal</span>
                <ArrowRight className="w-4 h-4 text-[#F27322] transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>No obligation · 100% Free Consultation</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
