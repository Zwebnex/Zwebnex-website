import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import ConversionBanner from '@/components/ConversionBanner';
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
  CheckCircle2,
  Users,
  PackageCheck
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Digital Agency Services | Websites, E-Commerce & AI Automation',
  description: 'Explore Zwebnex core services: Next.js website development, e-commerce stores, custom AI chatbots, voice call agents, SEO, and business automation.',
};

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

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-16">
      {/* Hero Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            Comprehensive Digital Agency Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Specialized Services Built For{' '}
            <span className="text-[#F27322]">Modern Business Growth</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From lightning-fast web applications to autonomous AI voice and chatbot workflows, explore our full suite of technical capabilities.
          </p>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {SERVICES.map((service, idx) => {
          const Icon = iconMap[service.iconName] || Globe;
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Service Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#F27322] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100/70 text-[#D45607]">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Target Audience Pill */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                  <Users className="w-4 h-4 text-[#F27322] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Ideal For:</strong> {service.targetAudience}
                  </span>
                </div>

                {/* Primary CTA */}
                <div className="pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow-sm hover:shadow transition-all group"
                  >
                    <span>Request Proposal for {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Deliverables & Features Box */}
              <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/80 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Key Capabilities
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27322] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <PackageCheck className="w-4 h-4 text-[#F27322]" />
                    Client Deliverables
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {service.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
}
