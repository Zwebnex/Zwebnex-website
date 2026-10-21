import { ServiceItem, CaseStudy, PricingPackage, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'High-converting business websites, custom web apps, and lightning-fast digital experiences built on Next.js.',
    fullDescription: 'We build enterprise-grade, high-performance websites engineered for measurable business conversion. Powered by modern frameworks like Next.js, TypeScript, and modern styling, your site delivers sub-second load times, flawless responsiveness across all devices, and intuitive user journeys.',
    iconName: 'Globe',
    badge: 'Core Service',
    features: [
      'Next.js App Router Architecture',
      'Ultra-Fast Core Web Vitals & Sub-second Loads',
      'Mobile-First Responsive Layouts',
      'Interactive Micro-Animations & Dynamic UI',
      'CMS & Headless Integration',
      'Accessibility & WCAG AA Compliance'
    ],
    deliverables: [
      'Fully responsive custom website',
      'Production deployment on cloud infrastructure',
      'Performance audit report (95+ score)',
      'CMS documentation & client handoff'
    ],
    targetAudience: 'Growing businesses, SaaS startups, professional services, and brands ready for a high-performing digital flagship.'
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDescription: 'Modern online stores, smooth checkout funnels, inventory sync, and conversion-optimized storefronts.',
    fullDescription: 'Turn visitors into lifelong customers with custom e-commerce experiences. From product showcase grids and real-time inventory management to secure payment processing and friction-free checkout workflows, we design storefronts that scale with your sales volume.',
    iconName: 'ShoppingCart',
    badge: 'High ROI',
    features: [
      'Stripe & Multi-Currency Payment Gateways',
      'High-Speed Filterable Product Catalog',
      'One-Click Checkout & Abandoned Cart Recovery',
      'Inventory & Order Management Sync',
      'Customer Accounts & Order Tracking Portals',
      'SSL-Certified Secure Architecture'
    ],
    deliverables: [
      'Complete e-commerce store with live checkout',
      'Payment gateway & shipping setup',
      'Product catalog configuration',
      'Admin dashboard training'
    ],
    targetAudience: 'DTC retail brands, wholesale distributors, and businesses transitioning from brick-and-mortar to omnichannel retail.'
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    shortDescription: '24/7 intelligent website assistants for instant customer support, lead qualification, and automated FAQ resolution.',
    fullDescription: 'Never lose a lead outside business hours. Our custom AI chatbots are trained directly on your business knowledge base, product documentation, and FAQs. They qualify incoming visitors, answer complex questions naturally, capture contact information, and route high-value leads directly into your CRM.',
    iconName: 'Bot',
    badge: 'AI Powered',
    features: [
      'Trained on Your Custom Knowledge Base',
      'Autonomous Lead Qualification & Capture',
      '24/7 Instant Multi-Turn Conversational Support',
      'Seamless Hand-Off to Human Agents',
      'CRM, Email & Slack Real-Time Alerts',
      'Multi-Language Support'
    ],
    deliverables: [
      'Custom trained AI chatbot embedded on website',
      'Admin knowledge base manager',
      'Conversation logs & lead analytics dashboard',
      'Integration with lead capture tables'
    ],
    targetAudience: 'Service providers, agencies, high-traffic stores, and B2B platforms seeking round-the-clock sales conversion.'
  },
  {
    id: 'ai-voice-agents',
    slug: 'ai-voice-agents',
    title: 'AI Voice & Call Agents',
    shortDescription: 'Intelligent voice agents for automated inbound enquiry handling, appointment booking, and customer qualification.',
    fullDescription: 'Elevate your phone and audio touchpoints with natural-sounding AI voice agents. Designed for high-volume appointment requests, initial customer screening, and answering frequent inquiries over telephony or web-audio interfaces with ultra-low latency.',
    iconName: 'PhoneCall',
    badge: 'Next-Gen',
    features: [
      'Natural-Sounding Low-Latency Voice Generation',
      'Automated Appointment & Calendar Scheduling',
      'Inbound Call Screening & Routing',
      'CRM Call Summary & Transcription Logging',
      'Custom Scripting & Business Guardrails',
      'VoIP & Telephony API Integration'
    ],
    deliverables: [
      'Configured AI voice agent workflow',
      'Telephony or web voice trigger integration',
      'Automated booking link integration',
      'Audio transcription & call report pipeline'
    ],
    targetAudience: 'Clinics, consultation firms, salons, logistics, and local service businesses with heavy call volumes.'
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Paid Ads',
    shortDescription: 'Data-driven PPC campaigns, social media ads, strategic funnel optimization, and high-ROI lead generation.',
    fullDescription: 'Stop wasting budget on vanity metrics. We design targeted paid acquisition campaigns across Google Ads, Meta (Instagram/Facebook), and LinkedIn with relentless focus on Customer Acquisition Cost (CAC) and Return on Ad Spend (ROAS).',
    iconName: 'TrendingUp',
    badge: 'Growth Engine',
    features: [
      'Precision Google Search & Display Campaigns',
      'High-Impact Social Media Ad Creatives',
      'Audience Retargeting & Lookalike Modeling',
      'Conversion Rate Optimization (CRO) Audits',
      'Real-Time Transparent Performance Dashboards',
      'Continuous A/B Copy & Creative Testing'
    ],
    deliverables: [
      'Custom paid ad campaign strategy',
      'Ad creative sets (copy, visuals, videos)',
      'Pixel tracking & conversion API setup',
      'Bi-weekly performance & ROI reports'
    ],
    targetAudience: 'Businesses ready to scale customer acquisition with quantifiable, positive return on investment.'
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Technical SEO audits, on-page optimization, semantic architecture, and long-term organic search ranking growth.',
    fullDescription: 'Build enduring organic authority that compounds month after month. We resolve critical crawl and indexing issues, implement rich schema markup, optimize page speed, and construct targeted keyword architectures that place your brand in front of high-intent searchers.',
    iconName: 'Search',
    badge: 'Compounding',
    features: [
      'Comprehensive Technical SEO Architecture',
      'Semantic HTML5 & JSON-LD Structured Data',
      'On-Page Meta, Header & Content Optimization',
      'Keyword Research & Competitive Gap Analysis',
      'Core Web Vitals Speed Engineering',
      'XML Sitemaps, Robots.txt & Canonical Indexing'
    ],
    deliverables: [
      'Full technical SEO audit & fix implementation',
      'Keyword strategy blueprint',
      'Complete meta description & structured data setup',
      'Google Search Console & Analytics configuration'
    ],
    targetAudience: 'Companies seeking sustainable organic traffic without relying exclusively on continuous ad spend.'
  },
  {
    id: 'branding-design',
    slug: 'branding-design',
    title: 'Branding & Logo Design',
    shortDescription: 'Distinctive brand identities, logos, color palettes, typography systems, and modern digital brand guidelines.',
    fullDescription: 'Your visual identity is the foundation of customer trust. We create memorable brand identities that resonate with your target market—from distinctive logo marks and harmonious color palettes to comprehensive typography systems and digital asset toolkits.',
    iconName: 'Palette',
    badge: 'Identity',
    features: [
      'Custom Logo Marks & Wordmarks',
      'Cohesive Color Systems & Accessible Contrast',
      'Modern Typography Selection & Hierarchy',
      'Comprehensive Brand Style Guide PDF',
      'Vector Asset Suites (SVG, EPS, PNG, Favicon)',
      'Social Media Kit & Business Card Templates'
    ],
    deliverables: [
      'Primary, secondary & monochrome logo variations',
      'Complete vector and raster asset export package',
      'Digital brand guidelines documentation',
      'Brand style sheet for web application use'
    ],
    targetAudience: 'Startups launching new ventures or established brands requiring a modern, premium visual refresh.'
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    title: 'Business Automation & Integrations',
    shortDescription: 'Eliminate repetitive manual tasks with automated workflows connecting your forms, CRM, databases, and apps.',
    fullDescription: 'Scale your business operations without increasing headcount. We connect your web forms, CRM, email marketing tools, inventory systems, and cloud databases into unified, automated workflows that save hours of manual data entry every single day.',
    iconName: 'Zap',
    badge: 'Efficiency',
    features: [
      'Custom Webhook & API Integrations',
      'Automated Lead Routing & Instant Notifications',
      'CRM Synchronization (HubSpot, Notion, Airtable)',
      'Automated Invoice & Document Generation',
      'Multi-Step Zapier / Make / Cloud Automation',
      'Secure Database Pipelines with Supabase'
    ],
    deliverables: [
      'Configured end-to-end automation pipelines',
      'Live database synchronization verified',
      'Error handling & retry monitoring alerts',
      'Operational workflow documentation'
    ],
    targetAudience: 'Operational leaders, founders, and teams spending valuable hours on manual copy-pasting and follow-ups.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep Dive & Needs Analysis',
    description: 'We analyze your business model, target audience, competitive landscape, and digital objectives to define clear project milestones.'
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Architecture & Strategy Blueprint',
    description: 'We map out the user flow, wireframes, technical stack, content requirements, and implementation schedule with complete transparency.'
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Design, Development & QA',
    description: 'Our team crafts the user interface, writes clean TypeScript code, connects databases, integrates APIs, and tests across real devices.'
  },
  {
    step: '04',
    title: 'Launch & Improve',
    tagline: 'Production Deploy & Ongoing Growth',
    description: 'We deploy to global cloud CDN, verify analytics, configure custom domains with SSL, and provide continuous optimization support.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumina-retail',
    title: 'Omnichannel Storefront Re-Architecture',
    client: 'Lumina Home Goods',
    category: 'e-commerce',
    categoryLabel: 'E-commerce Brand',
    metric: '+180%',
    metricLabel: 'Increase in organic traffic within 6 months',
    summary: 'A complete custom e-commerce redesign using Next.js and Supabase, reducing page load times from 4.2s to 0.7s and boosting checkout conversions.',
    results: [
      '180% surge in qualified organic search visits',
      '43% decrease in cart abandonment rate',
      'Sub-second page transitions across 1,200+ SKU catalog',
      'Fully automated inventory and order webhook sync'
    ],
    deliverables: ['Custom Next.js Storefront', 'Checkout Pipeline', 'Technical SEO', 'Stripe Integration'],
    imagePlaceholderGradient: 'from-orange-500 to-amber-600',
    isDemo: true
  },
  {
    id: 'novasync-saas',
    title: 'B2B SaaS Growth & Automated Lead Qualification',
    client: 'NovaSync Cloud Solutions',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    metric: '+250%',
    metricLabel: 'Boost in demo leads through custom AI qualification',
    summary: 'Integrated an autonomous AI customer assistant and converted the landing page into a high-converting product demo experience with interactive charts.',
    results: [
      '250% increase in booked sales consultations',
      '24/7 autonomous inquiry resolution for 82% of visitors',
      'Zero lead drop-off outside standard business hours',
      'Direct CRM sync with automated lead scoring'
    ],
    deliverables: ['SaaS Marketing Website', 'Trained AI Chatbot', 'CRM Integration', 'Conversion Design'],
    imagePlaceholderGradient: 'from-zinc-800 to-orange-950',
    isDemo: true
  },
  {
    id: 'metro-dental',
    title: 'Multi-Location Practice Local Visibility & Booking',
    client: 'MetroCare Healthcare',
    category: 'local',
    categoryLabel: 'Healthcare & Local Practice',
    metric: '+120%',
    metricLabel: 'Revenue growth with localized SEO & AI voice booking',
    summary: 'Designed a localized patient portal with one-tap appointment requests, automated telephone enquiry answering, and schema-structured local SEO.',
    results: [
      '120% growth in new patient bookings within 90 days',
      '#1 local ranking across 14 target service keywords',
      '65% reduction in missed front-desk phone calls',
      'HIPAA-compliant contact data flow'
    ],
    deliverables: ['Medical Website', 'Local SEO Architecture', 'AI Booking Flow', 'Speed Optimization'],
    imagePlaceholderGradient: 'from-orange-600 to-stone-900',
    isDemo: true
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter-presence',
    name: 'Starter Presence',
    tagline: 'Perfect for emerging brands & single-service companies wanting a modern digital identity.',
    priceDisplay: 'Custom Quote',
    timeline: '2 – 3 Weeks Delivery',
    idealFor: 'Startups, consultants, and local businesses establishing a professional online presence.',
    ctaText: 'Request Starter Proposal',
    features: [
      'Custom 5-Page Responsive Website',
      'Next.js High-Performance Architecture',
      'Zwebnex Orange Brand Integration',
      'Mobile & Tablet Responsive Layouts',
      'Contact Form with Supabase Database Sync',
      'On-Page Technical SEO & Meta Tags',
      'Vercel Global CDN Hosting Setup',
      'Standard SSL Certificate Included',
      '30 Days Post-Launch Support'
    ]
  },
  {
    id: 'growth-ecommerce',
    name: 'Growth & E-Commerce',
    tagline: 'Comprehensive solution for ambitious brands ready to sell online and drive aggressive traffic.',
    priceDisplay: 'Custom Quote',
    isPopular: true,
    timeline: '3 – 5 Weeks Delivery',
    idealFor: 'E-commerce stores, expanding businesses, and companies needing marketing funnels.',
    ctaText: 'Get Growth Proposal',
    features: [
      'Everything in Starter Presence',
      'Up to 15 Custom Dynamic Pages',
      'Full E-Commerce Store & Stripe Integration',
      'Filterable Product Catalog & Cart Checkout',
      'AI Chatbot Integration for 24/7 Lead Capture',
      'Newsletter Subscription with Supabase Backend',
      'Advanced Conversion Rate Optimization (CRO)',
      'Google Analytics 4 & Conversion Tracking',
      'Interactive Micro-Animations & Charts',
      '60 Days Dedicated Follow-up Support'
    ]
  },
  {
    id: 'enterprise-automation',
    name: 'Enterprise & AI Scale',
    tagline: 'End-to-end bespoke digital agency partnership with AI automation, custom APIs, and continuous optimization.',
    priceDisplay: 'Custom Quote',
    timeline: 'Custom Scope / 6+ Weeks',
    idealFor: 'Established companies, multi-brand organizations, and high-volume operations.',
    ctaText: 'Schedule Consultation',
    features: [
      'Everything in Growth & E-Commerce',
      'Unlimited Pages & Custom Web Application Flow',
      'Custom AI Voice & Phone Calling Agents',
      'Tailored Business CRM & Workflow Automations',
      'Custom Role-Based Portals & Admin Panels',
      'Multi-Language & Global CDN Configuration',
      'Rigorous Security & RLS Row-Level Hardening',
      'Dedicated Account Manager & Slack Channel',
      'Quarterly Performance & Growth Strategy Audits',
      'Priority 24/7 Emergency Support SLA'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Carter',
    role: 'CEO & Founder',
    company: 'Bright Ventures',
    quote: 'Zwebnex transformed our digital presence completely. Their engineering is top-tier, the custom Next.js build is blazingly fast, and our organic conversion rate jumped noticeably within the first month. Highly recommended partner!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    rating: 5,
    isDemo: true
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Head of Growth',
    company: 'Apex Retail Brands',
    quote: 'The team at Zwebnex built our e-commerce platform with precision. The checkout experience is seamless, and their AI lead integration means we never lose a potential customer even in off-hours. A truly premium agency.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
    rating: 5,
    isDemo: true
  },
  {
    id: '3',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'NexaScale Global',
    quote: 'Working with Zwebnex was an absolute pleasure. Communication was transparent from discovery to launch, deadlines were met without friction, and the final website has elevated our brand positioning above competitors.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    rating: 5,
    isDemo: true
  }
];

export const FAQS = [
  {
    question: 'How long does a typical website development project take?',
    answer: 'Standard business websites generally take 2 to 4 weeks from discovery to production launch. E-commerce platforms or enterprise projects with custom AI and workflow integrations typically range from 4 to 8 weeks depending on the overall scope.'
  },
  {
    question: 'What modern technologies does Zwebnex use?',
    answer: 'We build primarily with Next.js, TypeScript, and Tailwind CSS for frontend performance, hosted globally on Vercel CDN. For databases and backend logic, we leverage Supabase with PostgreSQL and strict Row-Level Security (RLS).'
  },
  {
    question: 'Will our website be mobile-responsive and SEO-friendly?',
    answer: 'Absolutely. Every site we build is mobile-first, tested rigorously across iOS and Android devices, and includes clean semantic HTML, structured JSON-LD data, open graph tags, XML sitemaps, and optimized Core Web Vitals.'
  },
  {
    question: 'How does the AI Chatbot and Voice Agent integration work?',
    answer: 'We train autonomous agents on your specific business documentation, services, and FAQs. They integrate directly into your site to answer user questions, qualify high-intent prospects, and push captured lead information securely to your database or CRM.'
  },
  {
    question: 'How does payment and quote pricing work?',
    answer: 'We provide transparent, fixed-scope proposals tailored to your specific deliverables so you never encounter surprise fees. Invoicing is typically milestone-based (e.g. 50% upon project kickoff, 50% upon final sign-off and deployment).'
  }
];

export const BRAND_VALUES = [
  {
    title: 'Tailored Solutions',
    description: 'Every business is unique. We never force rigid cookie-cutter templates—every design and architecture is built for your business objectives.',
    iconName: 'Sparkles'
  },
  {
    title: 'Speed & Performance',
    description: 'Sub-second load times keep bounce rates low and conversions high. We engineer for top-tier Google Core Web Vitals performance.',
    iconName: 'Gauge'
  },
  {
    title: 'Business-Driven ROI',
    description: 'A website is an investment that should generate revenue. We prioritize conversion funnels, clear CTAs, and automated lead capture.',
    iconName: 'Target'
  },
  {
    title: 'Reliable Cloud Infrastructure',
    description: 'Deployed across global Vercel serverless edge nodes backed by enterprise Supabase PostgreSQL for 99.9% uptime and zero maintenance headaches.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Transparent Communication',
    description: 'No jargon, no disappearing acts. You receive clear weekly milestones, direct access to your build lead, and collaborative feedback loops.',
    iconName: 'MessageSquareCheck'
  },
  {
    title: 'Future-Proof Scalability',
    description: 'Engineered with clean TypeScript, modular components, and extensible database schemas that grow effortlessly with your business.',
    iconName: 'Layers'
  }
];
