'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User as UserIcon,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  LogOut,
  Sparkles,
  ShieldCheck,
} from '@/components/Icons';

interface AuthFormProps {
  initialMode?: 'login' | 'signup';
}

export default function AuthForm({ initialMode = 'login' }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryMode = searchParams.get('mode');

  const [mode, setMode] = useState<'login' | 'signup'>(
    queryMode === 'signup' || initialMode === 'signup' ? 'signup' : 'login'
  );

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // States
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Forgot password modal
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [resetError, setResetError] = useState<string | null>(null);

  // Check current session on mount
  useEffect(() => {
    async function checkUser() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setCurrentUser(session.user);
        }
      } catch (err) {
        console.error('Session check error:', err);
      }
    }
    checkUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Update mode when URL param changes
  useEffect(() => {
    if (queryMode === 'signup') setMode('signup');
    if (queryMode === 'login') setMode('login');
  }, [queryMode]);

  // Handle Log In
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !password) {
      setErrorMsg('Please enter both your email address and password.');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setErrorMsg('Invalid email or password. Please verify your details or reset your password.');
        } else if (error.message.includes('Email not confirmed')) {
          setErrorMsg('Your email has not been confirmed yet. Please check your inbox for the confirmation link.');
        } else {
          setErrorMsg(error.message);
        }
        return;
      }

      if (data.user) {
        setSuccessMsg('Authentication successful! Welcome back.');
        setTimeout(() => {
          router.push('/');
        }, 1200);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during log in.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = fullName.trim();

    if (!cleanName) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please re-enter your password.');
      return;
    }
    if (!agreeTerms) {
      setErrorMsg('Please agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: password,
        options: {
          data: {
            full_name: cleanName,
          },
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/login` : undefined,
        },
      });

      if (error) {
        if (error.message.includes('already registered')) {
          setErrorMsg('An account with this email already exists. Please log in instead.');
        } else {
          setErrorMsg(error.message);
        }
        return;
      }

      if (data.session) {
        setSuccessMsg('Account created and logged in successfully! Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 1200);
      } else if (data.user) {
        setSuccessMsg(
          'Account created successfully! We sent a confirmation link to your email. Please check your inbox.'
        );
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  // Handle OAuth (Google / GitHub)
  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setErrorMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/` : undefined,
        },
      });
      if (error) {
        setErrorMsg(error.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || `Failed to sign in with ${provider}.`);
    }
  };

  // Handle Forgot Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError(null);
    setResetSuccess(null);

    const cleanEmail = resetEmail.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setResetError('Please enter a valid email address.');
      return;
    }

    setResetLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/login?mode=reset` : undefined,
      });

      if (error) {
        setResetError(error.message);
      } else {
        setResetSuccess('Password reset link sent! Please check your inbox.');
      }
    } catch (err: any) {
      setResetError(err.message || 'Failed to send password reset email.');
    } finally {
      setResetLoading(false);
    }
  };

  // Handle Sign Out
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      setCurrentUser(null);
      setSuccessMsg('Logged out successfully.');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to sign out.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F27322]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Two-Column Card Container */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-[#0D111A]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden min-h-[680px]">
        
        {/* LEFT COLUMN: Immersive Cosmic Artwork Card (Directly inspired by reference) */}
        <div className="lg:col-span-6 relative hidden lg:flex flex-col justify-between p-10 xl:p-12 overflow-hidden bg-gradient-to-b from-[#090D18] via-[#0B0F1E] to-[#05070D] border-r border-slate-800/80">
          
          {/* Cosmic Atmosphere Background Graphics */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Night Sky Radial Star Glow */}
            <div className="absolute -top-24 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#F27322]/15 rounded-full blur-3xl" />

            {/* Subtle Star Points */}
            <div className="absolute top-16 right-20 w-1 h-1 bg-white rounded-full opacity-80 shadow-[0_0_8px_#ffffff]" />
            <div className="absolute top-28 left-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-60 shadow-[0_0_6px_#60a5fa]" />
            <div className="absolute top-44 right-1/3 w-1 h-1 bg-amber-100 rounded-full opacity-70" />
            <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-90 shadow-[0_0_10px_#ffffff]" />
            <div className="absolute top-80 right-16 w-1 h-1 bg-blue-100 rounded-full opacity-50" />
            <div className="absolute top-96 left-16 w-1 h-1 bg-white rounded-full opacity-70" />

            {/* Glowing Flow Curves & Mountain Dunes (Matching reference bottom wave curves) */}
            <svg
              className="absolute bottom-0 left-0 right-0 w-full h-80 opacity-90"
              viewBox="0 0 500 350"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="duneGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0F172A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F27322" stopOpacity="0.4" />
                  <stop offset="40%" stopColor="#2563EB" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#F27322" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background Dune Wave */}
              <path
                d="M0,220 Q120,130 260,200 T500,160 L500,350 L0,350 Z"
                fill="url(#duneGrad2)"
              />

              {/* Foreground Dark Dune Wave */}
              <path
                d="M0,260 Q150,180 300,240 T500,210 L500,350 L0,350 Z"
                fill="url(#duneGrad1)"
              />

              {/* Luminous Ridge Edge */}
              <path
                d="M0,260 Q150,180 300,240 T500,210"
                stroke="url(#glowLine)"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Top Brand Logo */}
          <div className="relative z-10 flex items-center justify-between">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none">
              <div className="relative h-11 w-44">
                <Image
                  src="/brand/zwebnex-logo-white-transparent.png"
                  alt="Zwebnex"
                  fill
                  priority
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] font-medium text-slate-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Supabase Connected</span>
            </div>
          </div>

          {/* Bottom Inspiring Typography (Direct adaptation from reference "Enter Your Flow State.") */}
          <div className="relative z-10 space-y-4 max-w-md pt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27322]/15 border border-[#F27322]/30 text-xs font-semibold text-[#F27322] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Portal & Cloud Workspace</span>
            </div>

            <h2 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Build Smarter.{' '}
              <span className="text-[#F27322] inline-block">Scale Faster.</span>
            </h2>

            <p className="text-sm xl:text-base text-slate-300 leading-relaxed font-normal">
              A unified digital architecture engineered for ambitious businesses, high-converting e-commerce, and autonomous AI automation.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encrypted PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27322]" />
                <span>Row Level Security (RLS)</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Authentication Form (Log In + Sign Up) */}
        <div className="lg:col-span-6 flex flex-col justify-center p-6 sm:p-10 xl:p-12 relative">
          
          {/* Top Logo for Mobile Devices */}
          <div className="lg:hidden mb-8 flex items-center justify-between">
            <Link href="/" className="inline-block">
              <div className="relative h-9 w-36">
                <Image
                  src="/brand/zwebnex-logo-white-transparent.png"
                  alt="Zwebnex"
                  fill
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <Link
              href="/"
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Back to Home →
            </Link>
          </div>

          <div className="max-w-md w-full mx-auto space-y-6">
            
            {/* If user is already logged in, show user dashboard card */}
            {currentUser ? (
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-[#F27322]/30 text-[#F27322] flex items-center justify-center mx-auto text-2xl font-bold">
                  {currentUser.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Welcome Back!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    You are currently authenticated with Supabase.
                  </p>
                  <div className="mt-3 inline-block px-3.5 py-1.5 rounded-full bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                    {currentUser.email}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#F27322] hover:bg-[#D45607] shadow-lg shadow-orange-500/25 transition-all"
                  >
                    <span>Return to Homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-slate-400" />
                    <span>{loading ? 'Signing out...' : 'Sign Out of Account'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Mode Selector Tabs (Log In vs Sign Up) */}
                <div className="flex p-1 rounded-xl bg-slate-900/80 border border-slate-800 max-w-xs mx-auto lg:mx-0">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      mode === 'login'
                        ? 'bg-[#F27322] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      mode === 'signup'
                        ? 'bg-[#F27322] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Form Header (Directly matching reference: "Welcome Back!") */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {mode === 'login' ? 'Welcome Back!' : 'Create an Account'}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400 font-normal">
                    {mode === 'login'
                      ? 'Welcome back! Please enter your details!'
                      : 'Join ambitious brands building high-converting architectures.'}
                  </p>
                </div>

                {/* Status Messages */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {successMsg && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{successMsg}</span>
                  </div>
                )}

                {/* Main Form */}
                <form onSubmit={mode === 'login' ? handleLogin : handleSignUp} className="space-y-4">
                  
                  {/* Full Name Field (Sign Up Only) */}
                  {mode === 'signup' && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27322] border-0 transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                          <UserIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Email Field (Matching white/light rounded input in reference) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27322] border-0 transition-all"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Password Field with Show/Hide Toggle */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Input password"
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27322] border-0 pr-10 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-800 transition-colors focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password (Sign Up Only) */}
                  {mode === 'signup' && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Re-enter your password"
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F27322] border-0 pr-10 transition-all"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Checkbox & Forgot Password Row (Matching reference) */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    {mode === 'login' ? (
                      <>
                        <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-[#F27322] focus:ring-[#F27322] focus:ring-offset-slate-900"
                          />
                          <span>Remember me</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setForgotPasswordOpen(true);
                            setResetEmail(email);
                            setResetError(null);
                            setResetSuccess(null);
                          }}
                          className="text-[#F27322] hover:text-[#D45607] transition-colors font-medium"
                        >
                          Forgot password?
                        </button>
                      </>
                    ) : (
                      <label className="flex items-start gap-2 cursor-pointer select-none text-slate-300">
                        <input
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-[#F27322] focus:ring-[#F27322] focus:ring-offset-slate-900 mt-0.5"
                        />
                        <span className="text-[11px] text-slate-400 leading-tight">
                          I agree to the{' '}
                          <Link href="/terms" className="text-[#F27322] hover:underline">Terms</Link>
                          {' '}and{' '}
                          <Link href="/privacy" className="text-[#F27322] hover:underline">Privacy Policy</Link>.
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Primary Action Button (Styled with Zwebnex Orange theme) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F27322] hover:bg-[#D45607] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{mode === 'login' ? 'Authenticating...' : 'Creating Account...'}</span>
                        </>
                      ) : (
                        <span>{mode === 'login' ? 'Log In' : 'Create Account'}</span>
                      )}
                    </button>
                  </div>
                </form>

                {/* "Or continue with" divider (Matching reference) */}
                <div className="relative flex items-center justify-center pt-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800" />
                  </div>
                  <span className="relative px-3 bg-[#0D111A] text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    Or continue with
                  </span>
                </div>

                {/* Social Login Buttons (Google + GitHub/Apple) */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Google OAuth */}
                  <button
                    type="button"
                    onClick={() => handleOAuthLogin('google')}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-xs font-semibold text-slate-200 transition-colors shadow-2xs group"
                  >
                    {/* Official Google G Logo */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.675-5.17 3.675-9.15z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.34 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  {/* GitHub OAuth */}
                  <button
                    type="button"
                    onClick={() => handleOAuthLogin('github')}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-xs font-semibold text-slate-200 transition-colors shadow-2xs group"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>

                {/* Bottom Toggle Link */}
                <div className="text-center pt-2">
                  <p className="text-xs text-slate-400">
                    {mode === 'login' ? (
                      <>
                        Don’t have an account?{' '}
                        <button
                          type="button"
                          onClick={() => {
                            setMode('signup');
                            setErrorMsg(null);
                            setSuccessMsg(null);
                          }}
                          className="font-bold text-[#F27322] hover:text-[#D45607] transition-colors"
                        >
                          Sign Up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button
                          type="button"
                          onClick={() => {
                            setMode('login');
                            setErrorMsg(null);
                            setSuccessMsg(null);
                          }}
                          className="font-bold text-[#F27322] hover:text-[#D45607] transition-colors"
                        >
                          Log In
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </>
            )}

          </div>
        </div>

      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F27322]/15 text-[#F27322] flex items-center justify-center">
              <KeyRound className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Reset Your Password</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Enter your account email address and we will send you a secure link to reset your password.
              </p>
            </div>

            {resetError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{resetError}</span>
              </div>
            )}

            {resetSuccess && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{resetSuccess}</span>
              </div>
            )}

            {!resetSuccess ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Account Email
                  </label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F27322]"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setForgotPasswordOpen(false)}
                    className="flex-1 py-3 rounded-xl text-xs font-semibold text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-[#F27322] hover:bg-[#D45607] shadow transition-colors flex items-center justify-center gap-2"
                  >
                    {resetLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <span>Send Link</span>}
                  </button>
                </div>
              </form>
            ) : (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(false)}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#F27322] hover:bg-[#D45607] transition-colors"
                >
                  Close & Return to Log In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
