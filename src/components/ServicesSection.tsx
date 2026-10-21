'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { 
  Globe, 
  ShoppingCart, 
  Bot, 
  PhoneCall, 
  TrendingUp, 
  Search, 
  Palette, 
  Zap, 
  ArrowRight,
  CheckCircle2
} from '@/components/Icons';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Bot,
  PhoneCall,
  TrendingUp,
  Search,
  Palette,
  Zap,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Grow Digitally
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From your first website to intelligent business automation, we help turn digital opportunities into measurable business results.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#F27322]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#F27322] flex items-center justify-center transition-colors group-hover:bg-[#F27322] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-[#D45607] transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#F27322] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key Features List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-500">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F27322] group-hover:text-[#D45607] transition-colors"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Details Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>View Full Service Specs & Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
