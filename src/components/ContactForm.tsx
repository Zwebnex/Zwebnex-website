'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Phone, Mail, MessageSquare, Globe } from '@/components/Icons';
import { SERVICES } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySelector from '@/components/CurrencySelector';

interface ContactFormProps {
  initialService?: string;
  initialPackage?: string;
}

export default function ContactForm({ initialService, initialPackage }: ContactFormProps) {
  const searchParams = useSearchParams();
  const { currency, currencyInfo, setCurrency, budgetTiers } = useCurrency();
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceInterest: initialService || '',
    budgetRange: initialPackage ? `Package: ${initialPackage}` : '',
    projectDescription: '',
    preferredContactMethod: 'email' as 'email' | 'phone' | 'whatsapp',
    agreePrivacy: true,
  });

  const [selectedPackageBadge, setSelectedPackageBadge] = useState<{ name: string; price?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const packageParam = searchParams.get('package');
    const priceParam = searchParams.get('price');
    const currencyParam = searchParams.get('currency');
    const intentParam = searchParams.get('intent');

    if (currencyParam) {
      setCurrency(currencyParam);
    }

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceInterest: serviceParam }));
    }

    if (packageParam) {
      const budgetValue = priceParam
        ? `Package: ${packageParam} (${priceParam})`
        : `Package: ${packageParam}`;
      setFormData((prev) => ({ ...prev, budgetRange: budgetValue }));
      setSelectedPackageBadge({ name: packageParam, price: priceParam || undefined });
    }

    if (intentParam === 'quote' && !serviceParam) {
      setFormData((prev) => ({ ...prev, serviceInterest: 'Website Development' }));
    }
  }, [searchParams, setCurrency]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      setErrorMsg('Please provide a brief description of your project (min 10 characters).');
      return;
    }
    if (!formData.agreePrivacy) {
      setErrorMsg('Please agree to the privacy policy to proceed.');
      return;
    }

    setLoading(true);

    try {
      const budgetFormatted = formData.budgetRange
        ? `${formData.budgetRange} [${currencyInfo.code}]`
        : `Flexible [${currencyInfo.code}]`;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          business_name: formData.businessName.trim() || null,
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          service_interest: formData.serviceInterest || 'General Inquiry',
          budget_range: budgetFormatted,
          project_description: formData.projectDescription.trim(),
          preferred_contact_method: formData.preferredContactMethod,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit project inquiry.');
      }

      setSubmissionId(data.id || null);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong while submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        
        <div className="space-y-2 max-w-lg mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F27322]">
            Inquiry Successfully Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Thank you, {formData.fullName}!
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your project details have been securely logged in our system. A senior Zwebnex solutions engineer will review your requirements and reach out within <strong>24 business hours</strong>.
          </p>
        </div>

        {submissionId && (
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
            Reference ID: {submissionId}
          </div>
        )}

        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSelectedPackageBadge(null);
              setFormData({
                fullName: '',
                businessName: '',
                email: '',
                phone: '',
                serviceInterest: '',
                budgetRange: '',
                projectDescription: '',
                preferredContactMethod: 'email',
                agreePrivacy: true,
              });
            }}
            className="text-xs font-semibold text-[#F27322] hover:underline"
          >
            ← Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6">
      
      {/* Header inside form */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Request a Custom Proposal
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Tell us about your project goals. We analyze your requirements and provide a fixed-scope roadmap in your preferred currency.
        </p>
      </div>

      {/* Selected Package Banner (if redirected from pricing with preselected package) */}
      {selectedPackageBadge && (
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#F27322] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                Selected Plan: {selectedPackageBadge.name}
              </span>
              {selectedPackageBadge.price && (
                <span className="text-xs font-semibold text-[#D45607]">
                  Pricing: {selectedPackageBadge.price} onwards
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedPackageBadge(null);
              setFormData((prev) => ({ ...prev, budgetRange: '' }));
            }}
            className="text-xs text-slate-400 hover:text-slate-700 underline"
          >
            Clear
          </button>
        </div>
      )}

      {/* Region & Currency Selector Card */}
      <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#F27322]" />
            <span className="text-xs font-bold text-slate-900">
              Purchasing Region & Currency
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Investment tiers and proposals adapt to your chosen currency. Default is <strong>Indian Rupee (₹ INR)</strong>.
          </p>
        </div>
        <CurrencySelector variant="navbar" />
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name & Business */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-[#F27322]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Business / Organization <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="e.g. Acme Studio"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-[#F27322]">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service of Interest & Budget in Selected Currency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Service of Interest
          </label>
          <select
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 bg-white transition-all"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Digital Transformation">Complete Digital Transformation</option>
            <option value="General Inquiry">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Approximate Budget ({currencyInfo.code} · {currencyInfo.symbol.trim()})
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 bg-white transition-all"
          >
            <option value="">Select an investment tier...</option>
            
            {/* If a custom package was selected from query param */}
            {formData.budgetRange && !budgetTiers.some(t => t.value === formData.budgetRange) && (
              <option value={formData.budgetRange}>
                {formData.budgetRange}
              </option>
            )}

            {budgetTiers.map((tier) => (
              <option key={tier.value} value={tier.value}>
                {tier.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Project Description */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Project Description & Goals <span className="text-[#F27322]">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          placeholder="Describe your project, objectives, desired timeline, or any specific problems you want Zwebnex to solve..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all resize-y"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'email', label: 'Email', icon: Mail },
            { id: 'phone', label: 'Phone', icon: Phone },
            { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
          ].map((method) => {
            const Icon = method.icon;
            const isSelected = formData.preferredContactMethod === method.id;
            return (
              <label
                key={method.id}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-[#F27322] bg-orange-50/50 text-[#D45607] font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={method.id}
                  checked={isSelected}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      preferredContactMethod: method.id as 'email' | 'phone' | 'whatsapp',
                    })
                  }
                  className="sr-only"
                />
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F27322]' : 'text-slate-400'}`} />
                <span>{method.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Privacy Agreement Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.agreePrivacy}
            onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#F27322] focus:ring-[#F27322]"
          />
          <span className="text-xs text-slate-500 leading-relaxed">
            I agree to the{' '}
            <a href="/privacy" target="_blank" className="text-[#F27322] hover:underline">
              Privacy Policy
            </a>{' '}
            and consent to Zwebnex processing my contact details for the purpose of preparing a tailored project proposal.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#F27322] hover:bg-[#D45607] disabled:opacity-60 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed group"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Encrypting & Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <div className="text-center">
        <span className="text-[11px] text-slate-400">
          Strictly confidential · Zero spam guarantee · 100% Free Consultation
        </span>
      </div>

    </form>
  );
}
