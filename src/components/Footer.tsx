'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';
import { Globe, Mail, Phone, MapPin, ArrowUpRight } from '@/components/Icons';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0B0F19] text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group focus:outline-none">
              <div className="relative h-11 w-48">
                <Image
                  src="/brand/zwebnex-logo-white-transparent.png"
                  alt="Zwebnex Digital Agency"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Zwebnex is a premium digital agency engineering high-performing websites, modern e-commerce stores, data-backed marketing, and autonomous AI automation for fast-growing businesses.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Accepting New Client Projects</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F27322] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F27322] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F27322] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#F27322] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F27322] transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F27322] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#website-development" className="hover:text-[#F27322] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce-development" className="hover:text-[#F27322] transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#ai-chatbots" className="hover:text-[#F27322] transition-colors">
                  AI Chatbots & Agents
                </Link>
              </li>
              <li>
                <Link href="/services#ai-voice-agents" className="hover:text-[#F27322] transition-colors">
                  AI Voice Calling
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="hover:text-[#F27322] transition-colors">
                  Paid Advertising (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services#seo-optimization" className="hover:text-[#F27322] transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#business-automation" className="hover:text-[#F27322] transition-colors">
                  Business Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Ahead
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get the latest agency insights, high-converting digital strategies, and AI automations.
            </p>
            <NewsletterForm variant="footer" />
            <div className="pt-2">
              <Link
                href="/contact?intent=quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F27322] hover:text-[#D45607] transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Zwebnex Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
