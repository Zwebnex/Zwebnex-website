'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Phone, Mail, MessageSquare } from '@/components/Icons';
import { SERVICES } from '@/lib/data';

interface ContactFormProps {
  initialService?: string;
  initialPackage?: string;
}

export default function ContactForm({ initialService, initialPackage }: ContactFormProps) {
  const searchParams = useSearchParams();
  
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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const packageParam = searchParams.get('package');
    const intentParam = searchParams.get('intent');

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceInterest: serviceParam }));
    }
    if (packageParam) {
      setFormData((prev) => ({ ...prev, budgetRange: `Package: ${packageParam}` }));
    }
    if (intentParam === 'quote' && !serviceParam) {
      setFormData((prev) => ({ ...prev, serviceInterest: 'Website Development' }));
    }
  }, [searchParams]);

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          business_name: formData.businessName.trim() || null,
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          service_interest: formData.serviceInterest || 'General Inquiry',
          budget_range: formData.budgetRange || 'Flexible',
          project_description: formData.projectDescription.trim(),
          preferred_contact_method: formData.preferredContactMethod,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setSubmissionId(data.id || 'ZW-' + Math.floor(100000 + Math.random() * 900000));
      } else {
        setErrorMsg(data.error || 'Failed to submit proposal request. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('A network error occurred while submitting your enquiry. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-center space-y-5 animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            Project Proposal Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our technical agency lead is reviewing your requirements and will reach out via <span className="font-semibold">{formData.preferredContactMethod}</span> within 24 business hours.
          </p>
        </div>

        {submissionId && (
          <div className="inline-block px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
            Reference ID: {submissionId}
          </div>
        )}

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
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
          Request a Free Custom Proposal
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Tell us about your project goals. We analyze your requirements and provide a fixed-scope roadmap.
        </p>
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
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service of Interest & Budget */}
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
            Approximate Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 bg-white transition-all"
          >
            <option value="">Select an investment tier...</option>
            <option value="Under $2,500">Starter (Under $2,500)</option>
            <option value="$2,500 - $5,000">Growth ($2,500 – $5,000)</option>
            <option value="$5,000 - $10,000">Scale ($5,000 – $10,000)</option>
            <option value="$10,000+">Enterprise ($10,000+)</option>
            <option value="Flexible / Needs Consultation">Flexible / Needs Consultation</option>
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
              <button
                key={method.id}
                type="button"
                onClick={() => setFormData({ ...formData, preferredContactMethod: method.id as any })}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-orange-50 border-[#F27322] text-[#D45607]'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{method.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          type="checkbox"
          id="agreePrivacy"
          checked={formData.agreePrivacy}
          onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
          className="w-4 h-4 rounded text-[#F27322] focus:ring-[#F27322] border-slate-300 mt-0.5"
        />
        <label htmlFor="agreePrivacy" className="text-xs text-slate-500 leading-normal">
          I agree that Zwebnex may process my details to respond to this inquiry in accordance with our{' '}
          <a href="/privacy" target="_blank" className="text-[#F27322] hover:underline">
            Privacy Policy
          </a>.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white bg-[#F27322] hover:bg-[#D45607] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Secure Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Proposal Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400">
        🔒 All data is securely handled via Supabase PostgreSQL with strict Row Level Security.
      </p>

    </form>
  );
}
