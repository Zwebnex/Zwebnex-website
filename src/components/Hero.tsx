'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Headphones, CheckCircle2, TrendingUp, Sparkles, Rocket } from '@/components/Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

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

            {/* Trust Indicators Strip (Direct from Reference) */}
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

          {/* Right Column: 3D SaaS Growth Composition (Inspired by Reference Design) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-3xl p-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl overflow-hidden">
              
              {/* Background Glow Inside Frame */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27322]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Grid lines inside mockup */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Top Revenue Card (Matching Reference total revenue $58,480 +27.6%) */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 max-w-[260px] animate-in fade-in zoom-in duration-500">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-medium">Total Revenue</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-[11px] flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +27.6%
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  $58,480
                </div>
                {/* Sparkline curve */}
                <div className="mt-2.5 h-8 w-full flex items-end gap-1">
                  <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M0,25 Q20,10 40,18 T70,8 T100,3"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="3" r="3.5" fill="#10B981" />
                  </svg>
                </div>
              </div>

              {/* Center Left: Growth Circular Overview (Matching Reference 72% card) */}
              <div className="absolute top-28 left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 w-36 text-center">
                <span className="text-[11px] font-medium text-slate-500 block mb-2">Growth Overview</span>
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="#FED7AA" strokeWidth="5" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke="#F27322"
                      strokeWidth="5"
                      strokeDasharray="163.3"
                      strokeDashoffset="45.7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute text-sm font-extrabold text-slate-900">72%</span>
                </div>
              </div>

              {/* Bottom Right: Website Traffic Bar Chart (Matching Reference 8,620 card) */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 w-44">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span>Website Traffic</span>
                  <span className="text-emerald-600 font-bold">+35.4%</span>
                </div>
                <div className="text-lg font-black text-slate-900 mb-2">
                  8,620
                </div>
                {/* Vertical Bars in Orange */}
                <div className="flex items-end justify-between gap-1.5 h-10 pt-1">
                  <div className="w-2.5 h-[35%] bg-orange-200 rounded-t" />
                  <div className="w-2.5 h-[50%] bg-orange-300 rounded-t" />
                  <div className="w-2.5 h-[40%] bg-orange-300 rounded-t" />
                  <div className="w-2.5 h-[70%] bg-[#F27322] rounded-t" />
                  <div className="w-2.5 h-[60%] bg-orange-400 rounded-t" />
                  <div className="w-2.5 h-[85%] bg-[#F27322] rounded-t" />
                  <div className="w-2.5 h-[100%] bg-[#D45607] rounded-t shadow-xs" />
                </div>
              </div>

              {/* 3D Rocket & Billowing Launch Cloud (Center Composition) */}
              <div className="absolute right-12 top-6 z-30 pointer-events-none transform translate-y-2 hover:-translate-y-1 transition-transform duration-700">
                {/* SVG 3D Rocket */}
                <div className="relative w-44 h-56 flex flex-col items-center">
                  <svg className="w-36 h-36 drop-shadow-2xl" viewBox="0 0 120 120" fill="none">
                    {/* Rocket Body */}
                    <path
                      d="M60,10 C45,25 40,55 42,75 L78,75 C80,55 75,25 60,10 Z"
                      fill="#FFFFFF"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    {/* Nose Cone in Orange */}
                    <path d="M60,10 C54,18 50,28 50,34 L70,34 C70,28 66,18 60,10 Z" fill="#F27322" />
                    {/* Porthole */}
                    <circle cx="60" cy="46" r="9" fill="#1E293B" stroke="#CBD5E1" strokeWidth="2.5" />
                    <circle cx="60" cy="46" r="5" fill="#38BDF8" />
                    {/* Left Fin */}
                    <path d="M42,65 C32,68 25,82 24,90 C34,88 42,82 43,75 Z" fill="#F27322" />
                    {/* Right Fin */}
                    <path d="M78,65 C88,68 95,82 96,90 C86,88 78,82 77,75 Z" fill="#F27322" />
                    {/* Thruster Flame */}
                    <path d="M48,76 Q60,98 72,76 Z" fill="#F97316" />
                    <path d="M52,76 Q60,92 68,76 Z" fill="#FDE047" />
                  </svg>

                  {/* Billowing Cloud Smoke */}
                  <div className="relative -mt-6 w-36 h-20 flex items-center justify-center opacity-95">
                    <div className="absolute w-20 h-14 bg-white/90 rounded-full blur-md" />
                    <div className="absolute -left-2 w-16 h-12 bg-orange-100/80 rounded-full blur-md" />
                    <div className="absolute -right-2 w-16 h-12 bg-white/90 rounded-full blur-md" />
                    <div className="absolute top-2 w-24 h-10 bg-white rounded-full shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Floating conversion pill */}
              <div className="absolute top-4 right-4 z-40 bg-slate-900/90 text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#F27322]" />
                <span>AI Automation Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
