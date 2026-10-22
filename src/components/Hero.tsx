'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Headphones, CheckCircle2, TrendingUp, Sparkles } from '@/components/Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-semibold uppercase tracking-wider text-[#D45607]">
              <span className="w-2 h-2 rounded-full bg-[#F27322] animate-pulse" />
              <span>Digital Growth Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Build Smarter. Grow Faster.{' '}
              <span className="text-[#F27322] inline-block relative">
                Stand Out Digitally.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F27322]/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Zwebnex helps ambitious businesses scale with high-converting websites, e-commerce stores, data-backed digital marketing, and intelligent AI automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact?intent=quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/60 p-2 rounded-lg border border-slate-100 shadow-2xs">
                  <BarChart3 className="w-4 h-4 text-[#F27322] shrink-0" />
                  <span>Data-Driven</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/60 p-2 rounded-lg border border-slate-100 shadow-2xs">
                  <Zap className="w-4 h-4 text-[#F27322] shrink-0" />
                  <span>ROI Focused</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/60 p-2 rounded-lg border border-slate-100 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#F27322] shrink-0" />
                  <span>Verified Tech</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/60 p-2 rounded-lg border border-slate-100 shadow-2xs">
                  <Headphones className="w-4 h-4 text-[#F27322] shrink-0" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature with Uploaded Megaphone Artwork */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Visual Wrapper with ambient glow */}
            <div suppressHydrationWarning className="relative w-full max-w-lg">
              {/* Outer Glow Halo matching image tones */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F27322]/25 via-purple-500/20 to-amber-300/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Main Image Container */}
              <div
                suppressHydrationWarning
                className="relative rounded-3xl overflow-hidden border border-orange-100/80 bg-white shadow-2xl shadow-orange-500/10 group"
              >
                <Image
                  src="/hero-marketing.jpg"
                  alt="Zwebnex Digital Growth and Brand Amplification"
                  width={640}
                  height={640}
                  priority
                  suppressHydrationWarning
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle soft border overlay for ultra-crisp finish */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
              </div>

              {/* Top Floating Badge: Brand Amplification Active */}
              <div className="absolute -top-3.5 right-2 sm:-right-3 z-20 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1.5 sm:py-2 rounded-2xl border border-slate-700/60 shadow-xl flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide">Brand Amplification Active</span>
                <Sparkles className="w-3.5 h-3.5 text-[#F27322]" />
              </div>

              {/* Floating Metric Card: Bottom Left - Growth & Traffic */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 max-w-[200px] sm:max-w-[220px]">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span className="font-medium">Organic Reach</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +240%
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  128,450+
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27322]"></span>
                  Targeted Impressions
                </div>
              </div>

              {/* Floating Metric Card: Mid Right - Conversion Rate */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F27322] shrink-0 font-bold">
                  <Zap className="w-5 h-5 fill-[#F27322]/20" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500">Conversion Rate</div>
                  <div className="text-lg font-black text-slate-900 leading-tight">4.8x Higher</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
