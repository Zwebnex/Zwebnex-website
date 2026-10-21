'use client';

import React from 'react';
import Link from 'next/link';
import { PRICING_PACKAGES } from '@/lib/data';
import { Check, ArrowRight, Sparkles, HelpCircle } from '@/components/Icons';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySelector from '@/components/CurrencySelector';

export default function PricingSection() {
  const { formatPrice, currency, currencyInfo } = useCurrency();

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D45607] text-xs font-semibold uppercase tracking-wider">
            Packages & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transparent, Fixed-Scope Investment Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No surprise billing or hidden fees. Every package is tailored to deliver verifiable return on investment and clear business milestones.
          </p>

          {/* Interactive Currency & Country Switcher */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Display Currency:
            </span>
            <CurrencySelector variant="pricing" />
            <span className="text-xs text-slate-400 hidden sm:inline">
              (Default: Indian Rupee · ₹ INR)
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const formattedPrice = formatPrice(pkg.baseInrPrice);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-white border-2 border-[#F27322] shadow-xl md:-translate-y-3'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#F27322] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 min-h-[40px] leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Display in Selected Currency (Default Rupees) */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        {formattedPrice}
                      </span>
                      {pkg.priceSuffix && (
                        <span className="text-xs font-semibold text-slate-400 lowercase">
                          /{pkg.priceSuffix}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500 font-medium">
                        Estimated Delivery: {pkg.timeline}
                      </span>
                      <span className="text-[11px] font-semibold text-[#F27322] bg-orange-50 px-2 py-0.5 rounded-full">
                        {currencyInfo.code}
                      </span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(formattedPrice)}&currency=${currency}`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      pkg.isPopular
                        ? 'bg-[#F27322] hover:bg-[#D45607] text-white shadow-md hover:shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-center text-slate-600 mt-2">
                    Ideal for: {pkg.idealFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Custom Quotes */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need custom architecture, specialized integrations, or enterprise SLAs?{' '}
            <Link href="/contact?intent=custom" className="text-[#F27322] font-semibold hover:underline">
              Request a Bespoke Proposal →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
