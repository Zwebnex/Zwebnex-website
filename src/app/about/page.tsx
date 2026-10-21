import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND_VALUES } from '@/lib/data';
import ConversionBanner from '@/components/ConversionBanner';
import ProcessSection from '@/components/ProcessSection';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Target, Compass } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Zwebnex | Premium Website Builder & Digital Agency',
  description: 'Learn about Zwebnex, our engineering philosophy, mission, and how we help ambitious businesses build high-performing digital flagship solutions.',
};

export default function AboutPage() {
  return (
    <div className="pt-8 pb-16">
      {/* Hero Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            About Zwebnex
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Premium Website Builder &{' '}
            <span className="text-[#F27322]">Digital Growth Agency</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We partner with businesses to architect, build, and deploy high-converting websites, e-commerce stores, and autonomous AI automation.
          </p>
        </div>
      </section>

      {/* Agency Philosophy Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineering Digital Experiences That Convert
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Zwebnex, we believe a modern website must do far more than look clean. It must be an active growth asset—capturing qualified leads, accelerating e-commerce checkout velocity, and communicating your brand authority with precision.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We reject bloated templates and fragile page builders. Instead, our team leverages Next.js, modern TypeScript, and enterprise database infrastructure with Supabase to deliver sub-second performance, bulletproof security, and seamless API integrations.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F27322]" />
                <span>Zero bloated templates — tailored architectures for every client</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F27322]" />
                <span>Modern cloud deployment on global serverless CDNs</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#F27322]" />
                <span>Integrated AI workflows that capture inquiries 24 hours a day</span>
              </div>
            </div>
          </div>

          {/* Right Brand Showcase Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-8 bg-[#0B0F19] text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F27322]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative h-12 w-48">
                <Image
                  src="/brand/zwebnex-logo-white-transparent.png"
                  alt="Zwebnex"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Brand Identity:</strong> "A Premium Website Builder Agency"
                </p>
                <p>
                  <strong>Core Stack:</strong> Next.js App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL, and Vercel Global Edge Network.
                </p>
                <p>
                  <strong>Our Commitment:</strong> Transparent milestone roadmaps, fixed-scope proposals, direct communication, and dependable post-launch support.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to build something exceptional?</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F27322] hover:text-[#D45607]"
                >
                  <span>Start Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Principles
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental standards that guide every line of code and user interface we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_VALUES.slice(0, 3).map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
                <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <ProcessSection />

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
}
