import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: '#F27322',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zwebnex.com'),
  title: {
    default: 'Zwebnex | Premium Website Builder & Digital Growth Agency',
    template: '%s | Zwebnex Digital Agency',
  },
  description:
    'Zwebnex helps ambitious businesses scale with high-converting websites, modern e-commerce stores, data-backed digital marketing, and intelligent AI automation.',
  keywords: [
    'Zwebnex',
    'Website Development',
    'Next.js Agency',
    'E-commerce Development',
    'AI Chatbots',
    'AI Voice Calling Agents',
    'Digital Marketing',
    'SEO Optimization',
    'Branding & Logo Design',
    'Business Automation'
  ],
  authors: [{ name: 'Zwebnex Agency' }],
  creator: 'Zwebnex',
  publisher: 'Zwebnex',
  icons: {
    icon: '/brand/zwebnex-icon-orange-white.jpg',
    apple: '/brand/zwebnex-icon-orange-white.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zwebnex.com',
    siteName: 'Zwebnex',
    title: 'Zwebnex | Premium Website Builder & Digital Growth Agency',
    description:
      'High-converting websites, e-commerce solutions, digital marketing, and AI automation tailored for ambitious businesses.',
    images: [
      {
        url: '/brand/zwebnex-logo-orange.jpg',
        width: 1200,
        height: 630,
        alt: 'Zwebnex Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zwebnex | Premium Website Builder & Digital Growth Agency',
    description:
      'High-converting websites, e-commerce, and AI automation for ambitious brands.',
    images: ['/brand/zwebnex-logo-orange.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
