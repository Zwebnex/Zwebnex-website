'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { Compass, FileText, Code2, Rocket, ArrowRight } from '@/components/Icons';

const stepIcons = [Compass, FileText, Code2, Rocket];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            Our Proven Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Build & Scale Your Solution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A transparent four-phase roadmap engineered to eliminate guesswork and deliver measurable business outcomes on schedule.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={step.step}
                className="group relative p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#F27322]/50 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 group-hover:text-orange-100/80 transition-colors pointer-events-none">
                  {step.step}
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F27322] flex items-center justify-center mb-5 group-hover:bg-[#F27322] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#F27322] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#F27322] mb-3">
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Phase {step.step} of 04</span>
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#F27322] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
