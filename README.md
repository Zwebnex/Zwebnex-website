# Zwebnex Digital Agency — Official Website

> **Build Smarter. Grow Faster. Stand Out Digitally.**  
> Production-ready flagship website for **Zwebnex**, a modern digital agency specializing in website development, e-commerce architectures, AI chatbots, autonomous voice call agents, SEO, branding, and enterprise business automation.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack & React 19
- **Language**: TypeScript (strict type checking enabled)
- **Styling**: Tailwind CSS with custom brand design tokens and modern responsive utilities
- **Database & Backend**: [Supabase](https://supabase.com/) (PostgreSQL with strict Row Level Security)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: Server-side normalization, strict schema validation, and duplicate detection
- **Hosting & Edge Network**: [Vercel](https://vercel.com/) Global Edge Network
- **SEO & Performance**: Dynamic XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), OpenGraph meta, responsive images, semantic landmarks

---

## 🎨 Brand Identity & Design System

The visual design system is derived directly from the official **Zwebnex** logo assets (`public/brand/`):

- **Primary Brand Orange**: `#F27322` (rgb: 242, 115, 34) — sampled from the official Zwebnex mark
- **Dark Brand Orange (Hover & Accessible Text)**: `#D45607` (WCAG AA compliant contrast)
- **Primary Headings & Dark UI**: `#0B0F19` / `#111827` (slate-900 / dark charcoal)
- **Primary Backgrounds**: Pure White (`#FFFFFF`) and Warm Off-White (`#FAFAFA`)
- **Accent Glows & Peach Highlights**: `#FFF7ED` (orange-50) & `#FED7AA` (orange-200)
- **Supporting Neutral**: Slate grays (`#475569`, `#94A3B8`, `#E2E8F0`)

### Brand Assets

- Transparent Dark-Text Logo: `public/brand/zwebnex-logo-transparent.png`
- Transparent White-Text Logo: `public/brand/zwebnex-logo-white-transparent.png`
- Official Favicon & App Icon: `public/favicon.jpg` & `src/app/icon.jpg`

---

## 📁 Project Structure

```
├── public/
│   ├── brand/               # Official transparent Zwebnex logo variations & marks
│   ├── favicon.jpg          # High-resolution brand favicon
│   └── robots.txt           # Generated production robots directive
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with navbar, footer, and OpenGraph metadata
│   │   ├── page.tsx         # Conversion-focused homepage with 3D hero composition
│   │   ├── services/        # Detailed 8-service showcase with scope breakdown
│   │   ├── portfolio/       # Filterable case study showcase with demo indicators
│   │   ├── about/           # Agency engineering principles and mission
│   │   ├── pricing/         # Package comparison cards & quote deep-links
│   │   ├── contact/         # Lead capture form with live Supabase persistence
│   │   ├── privacy/         # Comprehensive privacy policy
│   │   ├── terms/           # Terms of service
│   │   ├── sitemap.ts       # Dynamic XML sitemap generator
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── api/
│   │       ├── contact/     # Server-side lead intake & validation endpoint
│   │       └── newsletter/  # Server-side subscriber intake & duplicate handler
│   ├── components/          # Modular UI components (Navbar, Footer, Hero, Forms, etc.)
│   └── lib/
│       ├── supabase.ts      # Typed Supabase client with safe server/client separation
│       ├── types.ts         # TypeScript data contracts & schema interfaces
│       └── data.ts          # Centralized services, portfolio, and pricing repository
└── supabase/
    └── migrations/          # Checked-in database SQL schema and RLS policies
```

---

## 🗄️ Database Schema & Supabase Setup

The database uses PostgreSQL hosted on Supabase with **Row Level Security (RLS)** strictly enabled.

### Database Tables

1. **`service_leads`**:
   - `id`: UUID (Primary Key, client/server generated)
   - `full_name`: TEXT (Required, minimum 2 characters)
   - `business_name`: TEXT (Nullable)
   - `email`: TEXT (Required, normalized lowercase)
   - `phone`: TEXT (Nullable)
   - `service_interest`: TEXT (Default: 'General Inquiry')
   - `budget_range`: TEXT (Default: 'Flexible')
   - `project_description`: TEXT (Required, minimum 10 characters)
   - `preferred_contact_method`: TEXT (Default: 'email')
   - `status`: TEXT ('new', 'contacted', 'in_progress', 'completed', 'archived')
   - `created_at`: TIMESTAMPTZ (UTC)
   - `updated_at`: TIMESTAMPTZ (UTC)

2. **`newsletter_subscribers`**:
   - `id`: UUID (Primary Key)
   - `email`: TEXT (Required, normalized lowercase, UNIQUE constraint)
   - `status`: TEXT ('subscribed', 'unsubscribed')
   - `subscribed_at`: TIMESTAMPTZ (UTC)
   - `updated_at`: TIMESTAMPTZ (UTC)

### Security & Row Level Security (RLS)

- **Strict Denial by Default**: All anonymous `SELECT`, `UPDATE`, and `DELETE` requests are prohibited. Anonymous visitors cannot view or query private leads or subscriber email addresses.
- **Controlled Public Insert**: Public and anonymous visitors are permitted only to execute `INSERT` operations with verified safe default statuses (`status = 'new'`, `status = 'subscribed'`).
- **No Secret Leakage**: Service role keys are never exposed to browser bundles.

To apply migrations manually:
Execute `supabase/migrations/20261021_init_schema.sql` in the Supabase SQL Editor.

---

## ⚙️ Environment Variables

Create `.env.local` in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-id>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

# Optional: Server-side administrative key (never expose to client)
# SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>

# Production Domain Configuration
NEXT_PUBLIC_SITE_URL=https://zwebnex.com
```

Refer to `.env.example` for safe placeholder values.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Validate production build & type checks**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

1. Push code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Zwebnex digital agency website with Supabase integration"
   git branch -M main
   git remote add origin https://github.com/<your-username>/zwebnex-agency-website.git
   git push -u origin main
   ```

2. Import repository into **Vercel**:
   - Framework preset: `Next.js`
   - Set Environment Variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_SITE_URL`

3. Deploy and verify edge routing, contact enquiry delivery, and newsletter synchronization.

---

## 📄 License & Ownership

Copyright © 2026 Zwebnex. All rights reserved. Official brand assets and logo artwork are proprietary to Zwebnex.
