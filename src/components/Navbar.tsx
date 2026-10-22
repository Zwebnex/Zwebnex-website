'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, User as UserIcon } from '@/components/Icons';
import CurrencySelector from '@/components/CurrencySelector';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu when navigating between pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white py-4 border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Exact Zwebnex Logo */}
          <Link href="/" scroll={true} className="flex items-center gap-2 group focus:outline-none">
            <div className="relative h-10 w-44 sm:h-11 sm:w-48 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/brand/zwebnex-logo-transparent.png"
                alt="Zwebnex - A Premium Website Builder Agency"
                fill
                priority
                sizes="(max-width: 768px) 180px, 200px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Dynamic Active Indicator */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={true}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    active
                      ? 'text-[#F27322] font-semibold'
                      : 'text-slate-600 hover:text-[#F27322]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F27322] rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA & Currency Selector */}
          <div className="hidden lg:flex items-center gap-3">
            <CurrencySelector variant="navbar" />
            <Link
              href="/login"
              scroll={true}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isLinkActive('/login')
                  ? 'text-[#F27322] bg-orange-50'
                  : 'text-slate-600 hover:text-[#F27322] hover:bg-slate-50'
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span>Log In</span>
            </Link>
            <Link
              href="/contact?intent=quote"
              scroll={true}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow-sm hover:shadow transition-all duration-200 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <CurrencySelector variant="navbar" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#F27322] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#F27322]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl px-4 pt-3 pb-6 transition-all animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-base font-medium transition-all ${
                    active
                      ? 'bg-orange-50 text-[#F27322] font-semibold'
                      : 'text-slate-700 hover:text-[#F27322] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/login"
                scroll={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <UserIcon className="w-4 h-4 text-slate-600" />
                <span>Client Log In / Sign Up</span>
              </Link>
              <Link
                href="/contact?intent=quote"
                scroll={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow transition-colors"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
