'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from '@/components/Icons';

interface NewsletterFormProps {
  variant?: 'footer' | 'inline';
}

export default function NewsletterForm({ variant = 'footer' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'already'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (data.alreadySubscribed) {
          setStatus({ type: 'already', message: 'You are already subscribed!' });
        } else {
          setStatus({ type: 'success', message: 'Subscribed successfully! Welcome aboard.' });
          setEmail('');
        }
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err: any) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const isFooter = variant === 'footer';

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={loading}
          required
          className={`w-full pr-12 pl-4 py-3 rounded-full text-sm outline-none transition-all ${
            isFooter
              ? 'bg-[#182234] text-white placeholder-slate-400 border border-slate-700/60 focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20'
              : 'bg-white text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-[#F27322] focus:ring-2 focus:ring-[#F27322]/20 shadow-sm'
          }`}
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Subscribe"
          className="absolute right-1.5 p-2 rounded-full bg-[#F27322] text-white hover:bg-[#D45607] transition-all disabled:opacity-50 flex items-center justify-center shadow-sm"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </form>

      {status && (
        <div
          className={`mt-2.5 flex items-center gap-1.5 text-xs ${
            status.type === 'error'
              ? 'text-rose-400'
              : status.type === 'already'
              ? 'text-amber-400'
              : 'text-emerald-400'
          }`}
        >
          {status.type === 'error' ? (
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}
    </div>
  );
}
