'use client';

import React from 'react';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ConversionBanner from '@/components/ConversionBanner';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';
import { FAQS } from '@/lib/data';
import { HelpCircle, ChevronRight, MessageSquareQuote, ArrowRight } from '@/components/Icons';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Trust & Capability Indicators */}
      <TrustStrip />

      {/* Core Services Section */}
      <ServicesSection />

      {/* Prominent Conversion Banner */}
      <ConversionBanner />

      {/* Four-Step Process Section */}
      <ProcessSection />

      {/* Case Studies & Proven Results */}
      <CaseStudiesSection />

      {/* Why Choose Zwebnex */}
      <WhyChooseUs />

      {/* Pricing & Packages */}
      <PricingSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about our development timelines, process, and modern tech stack.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-2xs open:shadow-md transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg select-none list-none group-open:text-[#F27322] transition-colors">
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-open:bg-orange-100 text-slate-600 group-open:text-[#F27322] flex items-center justify-center shrink-0 transition-transform group-open:rotate-90">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3">
            <h3 className="text-lg font-bold text-slate-900">
              Have a specific question not covered here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Our engineering team is happy to discuss your specific technical needs or project scope.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow transition-colors"
              >
                <span>Ask Us Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pre-Footer CTA */}
      <ConversionBanner preselectedService="Digital Transformation" />
    </div>
  );
}
