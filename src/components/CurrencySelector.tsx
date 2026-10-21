'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '@/context/CurrencyContext';
import { Check, Globe } from '@/components/Icons';

interface CurrencySelectorProps {
  variant?: 'navbar' | 'pricing' | 'form' | 'inline';
  showLabel?: boolean;
  className?: string;
}

export default function CurrencySelector({
  variant = 'pricing',
  showLabel = false,
  className = ''
}: CurrencySelectorProps) {
  const { currency, currencyInfo, setCurrency, availableCurrencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setCurrency(code);
    setIsOpen(false);
  };

  // Styles tailored to variant
  if (variant === 'navbar') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-[#F27322]/20"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          title="Select Country & Currency"
        >
          <span className="text-sm leading-none">{currencyInfo.flag}</span>
          <span>{currencyInfo.code} ({currencyInfo.symbol.trim()})</span>
          <svg
            className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Select Currency & Region
            </div>
            <div className="max-h-64 overflow-y-auto py-1">
              {availableCurrencies.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                    item.code === currency
                      ? 'bg-orange-50 text-[#F27322] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{item.flag}</span>
                    <div>
                      <div className="font-semibold">{item.countryName}</div>
                      <div className="text-[11px] text-slate-400">
                        {item.name} ({item.code} · {item.symbol.trim()})
                      </div>
                    </div>
                  </div>
                  {item.code === currency && (
                    <Check className="w-4 h-4 text-[#F27322] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'form') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        {showLabel && (
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Region & Currency
          </label>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 hover:border-[#F27322] focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all text-left shadow-2xs"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-lg leading-none">{currencyInfo.flag}</span>
            <div>
              <span className="font-semibold text-slate-900">{currencyInfo.countryName}</span>
              <span className="text-xs text-slate-500 ml-1.5 font-medium">
                ({currencyInfo.code} · {currencyInfo.symbol.trim()})
              </span>
            </div>
          </div>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50">
            <div className="px-3.5 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Choose Your Country / Currency</span>
              <span className="text-[#F27322] font-semibold">Active: {currencyInfo.code}</span>
            </div>
            <div className="max-h-60 overflow-y-auto py-1">
              {availableCurrencies.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-xs text-left transition-colors ${
                    item.code === currency
                      ? 'bg-orange-50 text-[#F27322] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl leading-none">{item.flag}</span>
                    <div>
                      <div className="font-semibold text-slate-900">{item.countryName}</div>
                      <div className="text-[11px] text-slate-500">
                        {item.name} ({item.code} · {item.symbol.trim()})
                      </div>
                    </div>
                  </div>
                  {item.code === currency && (
                    <div className="flex items-center gap-1 text-[#F27322] font-bold text-[11px]">
                      <span>Selected</span>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default: 'pricing' / 'inline' variant
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div className="flex items-center gap-2 p-1.5 pl-3 pr-2 rounded-full bg-white border border-slate-200 shadow-xs hover:border-[#F27322] transition-all">
        <Globe className="w-4 h-4 text-[#F27322]" />
        <span className="text-xs text-slate-500 font-medium">Currency:</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-900 bg-orange-50 hover:bg-orange-100/80 text-[#D45607] transition-all"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="text-sm leading-none">{currencyInfo.flag}</span>
          <span>{currencyInfo.code} ({currencyInfo.symbol.trim()})</span>
          <svg
            className={`w-3 h-3 text-[#D45607] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3.5 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Select Currency</span>
            <span className="text-[#F27322] font-semibold">{currencyInfo.code}</span>
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {availableCurrencies.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                  item.code === currency
                    ? 'bg-orange-50 text-[#F27322] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{item.flag}</span>
                  <div>
                    <div className="font-semibold text-slate-900">{item.countryName}</div>
                    <div className="text-[11px] text-slate-500">
                      {item.code} · {item.symbol.trim()} ({item.name})
                    </div>
                  </div>
                </div>
                {item.code === currency && (
                  <Check className="w-4 h-4 text-[#F27322] shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
