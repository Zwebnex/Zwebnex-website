import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AuthForm from '@/components/AuthForm';

export const metadata: Metadata = {
  title: 'Create Client Account | Zwebnex Agency',
  description: 'Create your Zwebnex client account to build high-converting websites, e-commerce stores, and autonomous AI automation.',
};

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#07090E] flex items-center justify-center text-slate-400">
          <div className="w-8 h-8 border-2 border-[#F27322] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AuthForm initialMode="signup" />
    </Suspense>
  );
}
