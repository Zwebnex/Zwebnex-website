import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import AuthForm from '@/components/AuthForm';

export const metadata: Metadata = {
  title: 'Client Portal Log In | Zwebnex Agency',
  description: 'Log in to your Zwebnex client account to view project progress, manage websites, and access AI automation.',
};

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#07090E] flex items-center justify-center text-slate-400">
          <div className="w-8 h-8 border-2 border-[#F27322] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AuthForm initialMode="login" />
    </Suspense>
  );
}
