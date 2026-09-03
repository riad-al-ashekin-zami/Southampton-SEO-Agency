import {
  ServiceItem,
  ProblemItem,
  DifferentiatorItem,
  CaseStudyPlaceholder,
  ProcessStep,
  PricingPackage,
  PricingComparisonRow,
  IndustryCategory,
  LocalArea,
  FAQItem,
} from '../types';

export const BRAND = {
  name: 'Southampton Seo Firm',
  tradeName: 'Southampton SEO',
  legalName: 'Southampton Seo Firm',
  domain: 'southamptonseo.agency',
  tagline: 'Search. Visibility. Growth.',
  positioning:
    'A specialist SEO agency helping Southampton and Hampshire businesses increase Google visibility, qualified traffic, enquiries and revenue.',
  serviceArea: 'Southampton & Hampshire, United Kingdom',
  category: 'Internet marketing service',
  
  // Google Business Profile Verified NAP (Name, Address, Phone)
  phone: '023 8000 0568',
  phoneDisplay: '+44 23 8000 0568',
  phoneClean: '+442380000568',
  
  address: {
    street: '51 Cranbury Ave',
    city: 'Southampton',
    postcode: 'SO14 0LS',
    country: 'United Kingdom',
    countryCode: 'GB',
    formatted: '51 Cranbury Ave, Southampton SO14 0LS, United Kingdom',
  },
  
  hours: 'Mon – Fri: 9:00 AM – 6:00 PM',
  hoursShort: 'Open · Closes 6 PM',
  mapsUrl: 'https://maps.app.goo.gl/2VUmAmA2bpZi3ThRA',
  plusCode: 'WJ73+GQ Southampton, United Kingdom',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-seo',
    title: 'Local SEO',
    badge: 'Maps & Geo-Targeting',
    description:
      'Dominate high-intent local search queries across Southampton and surrounding Hampshire areas with hyper-targeted geographical relevance.',
    highlights: [
      'Google Maps 3-Pack prominence',
      'Local landing pages with distinct geo-signals',
      'Structured UK local citation cleanup & building',
      'Localized review acquisition strategy',
      'High-intent "near me" and Southampton search capture',
    ],
    details: {
      overview:
        'When local prospective customers search for your services in Southampton, Eastleigh, or Winchester, they have immediate commercial intent. Our Local SEO infrastructure aligns your website, citations, and geographical signals to capture prominent positions on both standard Google search results and Google Maps.',
      deliverables: [
        'Geo-specific keyword clustering and local competitor gap analysis',
        'NAP (Name, Address, Phone) consistency audits across key UK directories',
        'Service-area landing page architecture optimized for Hampshire locations',
        'Localized schema markup (LocalBusiness, GeoCoordinates, areaServed)',
        'Local link acquisition and community relevance signals',
      ],
      outcome:
        'Higher local visibility, leading directly to phone calls, showroom visits, and inbound quote requests from nearby buyers.',
    },
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    badge: 'Infrastructure & Speed',
    description:
      'Eliminate the crawling, indexing, and Core Web Vitals bottlenecks that prevent Google from properly evaluating and ranking your website.',
    highlights: [
      'Core Web Vitals & page speed optimization',
      'Crawl budget & indexation hierarchy tuning',
      'Canonicalization, robots.txt & XML sitemaps',
      'Clean redirect architecture & 404 eradication',
      'Comprehensive JSON-LD structured data implementation',
    ],
    details: {
      overview:
        'Even high-quality content underperforms if your site suffers from slow rendering, render-blocking scripts, broken internal links, or duplicate canonical paths. We diagnose your technical architecture at code level to ensure search engine spiders can crawl, understand, and index every critical page without friction.',
      deliverables: [
        'Full technical crawl audit identifying orphan pages and index bloat',
        'LCP (Largest Contentful Paint) and INP (Interaction to Next Paint) remediation',
        'Strict schema hierarchy (Organization, WebSite, Service, BreadcrumbList)',
        'Mobile usability and responsive viewport validation',
        'Faceted navigation and duplicate content controls',
      ],
      outcome:
        'A technically robust, ultra-fast website that Google can index effortlessly and reward with top-tier rankings.',
    },
  },
  {
    id: 'seo-strategy',
    title: 'SEO Strategy',
    badge: 'Commercial Roadmaps',
    description:
      'A dedicated Southampton SEO strategy agency roadmap built around high-value customer search intent, competitor vulnerabilities, and measurable ROI.',
    searchIntentNote:
      'Targeting commercial keyword opportunities like "SEO strategy agency Southampton" with bespoke roadmaps.',
    highlights: [
      'Commercial search intent & buyer persona mapping',
      'Competitor vulnerability & market gap analysis',
      'Topical authority & content clustering roadmap',
      'Prioritized quarterly sprint deliverables',
      'Transparent KPI tracking focused on enquiries',
    ],
    details: {
      overview:
        'SEO is not a random checklist of monthly blog posts. As a dedicated Southampton SEO strategy agency, we engineer commercial blueprints that connect search volume with real revenue goals. We analyze where your competitors are vulnerable and build an actionable strategy to outrank them on high-margin terms.',
      deliverables: [
        'In-depth competitor keyword matrix and market share analysis',
        'Search intent categorization (Informational, Commercial, Transactional)',
        '12-month prioritized execution roadmap with realistic milestones',
        'Topical clustering blueprints to establish niche search authority',
        'Custom executive reporting dashboards with GA4 and GSC integration',
      ],
      outcome:
        'Zero wasted effort: every hour of SEO work is tied directly to ranking for terms that generate commercial enquiries.',
    },
  },
  {
    id: 'content-seo',
    title: 'Content SEO',
    badge: 'Authority & Relevance',
    description:
      'Craft in-depth, authoritative landing pages and content assets that satisfy exact search intent and rank sustainably for commercial keywords.',
    highlights: [
      'Topical authority architectures & entity optimization',
      'High-converting commercial service landing pages',
      'Strategic internal linking and breadcrumb structures',
      'Search intent matching (zero AI fluff or filler copy)',
      'Content refresh and cannibalization resolution',
    ],
    details: {
      overview:
        'Google rewards depth, expertise, and clarity. We construct comprehensive content strategies that prove your authority to search algorithms and guide readers into making an enquiry. We avoid generic AI filler, focusing on high-utility content that answers real buyer questions.',
      deliverables: [
        'Content gap analysis against top-ranking Hampshire competitors',
        'Conversion-engineered copywriting for key service pages',
        'Semantic entity optimization using natural language processing principles',
        'Internal link graphs that distribute PageRank to priority commercial URLs',
        'Content audit to prune, consolidate, or refresh underperforming pages',
      ],
      outcome:
        'Pages that rank for multiple long-tail and head terms while educating and converting prospective clients.',
    },
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile SEO',
    badge: 'Local Pack Dominance',
    description:
      'Transform your Google Business Profile into a consistent inbound enquiry channel with precise category mapping and localized optimization.',
    highlights: [
      'Primary & secondary category precision',
      'Service catalog & product listing optimization',
      'Geographic relevance & proximity signal building',
      'Structured review velocity and response systems',
      'Weekly geo-tagged updates and photo optimization',
    ],
    details: {
      overview:
        'For local Hampshire businesses, your Google Business Profile is often the very first interaction a customer has with your brand. We optimize every facet of your profile to maximize visibility in the Google Maps Local 3-Pack when prospective clients search in Southampton and surrounding districts.',
      deliverables: [
        'Primary category selection benchmarking against top local rankers',
        'Granular service attribute and product catalog configurations',
        'Consistent geo-signaled photo and update publishing workflows',
        'Proactive review generation guidance and reputation management',
        'Spam listing removal and local map competitor auditing',
      ],
      outcome:
        'Significant increases in direct phone calls, website clicks, and direction requests from active local buyers.',
    },
  },
  {
    id: 'seo-audits',
    title: 'Comprehensive SEO Audits',
    badge: 'Diagnostic Roadmaps',
    description:
      'In-depth, forensic examinations of your technical health, content depth, backlink profiles, and local search signals.',
    highlights: [
      'Complete 100+ point technical crawl diagnostic',
      'Competitor ranking & market gap matrix',
      'Google Maps 3-Pack positioning review',
      'Core Web Vitals & speed remediation plan',
      'Prioritized executive summary with action items',
    ],
    details: {
      overview:
        'Before executing any SEO campaign, you need complete clarity on why your website currently ranks where it does. Our comprehensive SEO audits analyze code, architecture, backlinks, content silos, and local citations to uncover high-impact ranking opportunities.',
      deliverables: [
        'Exhaustive site crawl log with error classifications (4xx, 5xx, redirect chains)',
        'Keyword cannibalization and orphaned page identification',
        'Structured schema validation and Rich Results test reporting',
        'Local citation consistency score and competitor backlink gap matrix',
        'Step-by-step roadmap ordered by commercial impact vs effort',
      ],
      outcome:
        'A crystal-clear, jargon-free diagnostic report detailing exactly what is holding your site back and how to fix it.',
    },
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'SEO Starter',
    price: '£299',
    period: '/ month',
    tagline: 'Ideal for local businesses establishing strong initial Google visibility in Southampton.',
    badge: 'Essential Foundation',
    popular: false,
    idealFor: 'Single-location businesses, independent trades, and local service providers.',
    features: [
      'Up to 15 Target Commercial Keywords',
      'Southampton & Local Area Focus',
      'Google Business Profile Optimization',
      'Monthly Technical Crawl & Error Fixes',
      '1 Dedicated On-Page / Local Service Page',
      'UK Citation Building & NAP Consistency',
      'Core Web Vitals Basic Monitoring',
      'Monthly Transparent Progress Report',
      'Email Support with Specialist',
    ],
    deliverables: [
      'Initial 100-point website & local search audit',
      'Google Business Profile category & service tuning',
      'Local schema implementation on primary pages',
      'Monthly ranking and lead tracking updates',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    id: 'growth',
    name: 'SEO Growth',
    price: '£499',
    period: '/ month',
    tagline: 'Complete SEO engine designed to capture high-intent commercial leads and outrank competitors.',
    badge: 'Most Popular',
    popular: true,
    idealFor: 'Competitive Southampton firms, growing professional practices, and trade contractors.',
    features: [
      'Up to 35 Target Commercial Keywords',
      'Southampton + 3 Hampshire Surrounding Areas',
      'Advanced Google Business Profile Strategy',
      'Full Technical SEO & Code Remediation',
      '2 High-Converting Content / Service Pages / Mo',
      'Topical Authority & Content Gap Siloing',
      'Advanced Schema & Rich Results Markup',
      'Active Competitor Gap Monitoring',
      'Bi-Weekly Reporting & Monthly Strategy Call',
      'Priority Phone & Email Support',
    ],
    deliverables: [
      'Full technical crawl, Core Web Vitals remediation',
      'Local 3-Pack expansion for adjacent towns',
      'Search intent content creation & optimization',
      'Dedicated monthly strategy review call',
    ],
    ctaText: 'Accelerate with Growth',
  },
  {
    id: 'authority',
    name: 'SEO Authority',
    price: '£799',
    period: '/ month',
    tagline: 'Dominant regional SEO for ambitious companies targeting Southampton and all of Hampshire.',
    badge: 'Maximum Domination',
    popular: false,
    idealFor: 'Multi-service firms, regional B2B enterprises, legal & medical clinics, high-value trades.',
    features: [
      'Up to 75+ Target Commercial Keywords',
      'Hampshire-Wide Commercial Corridors',
      'Multi-Location Google Business Profile Setup',
      'Priority Code-Level Technical Architecture',
      '4 High-Authority Content & Landing Pages / Mo',
      'Comprehensive Entity & Semantic SEO',
      'High-Tier Local Citation & Authority Building',
      'Deep Competitor Vulnerability Intelligence',
      'Weekly Visibility Dashboard & Direct Call Access',
      'Dedicated Senior SEO Consultant Lead',
    ],
    deliverables: [
      'Full Hampshire multi-location landing page architecture',
      'Comprehensive topical authority content hub construction',
      'Advanced entity, schema, and internal PageRank modeling',
      'Ongoing conversion rate optimization & lead tracking',
    ],
    ctaText: 'Dominate with Authority',
  },
];

export const PRICING_COMPARISON_ROWS: PricingComparisonRow[] = [
  {
    feature: 'Target Commercial Keywords',
    category: 'Scope & Reach',
    starter: 'Up to 15',
    growth: 'Up to 35',
    authority: '75+ Keywords',
  },
  {
    feature: 'Geographic Targeting',
    category: 'Scope & Reach',
    starter: 'Southampton Core',
    growth: 'Southampton + 3 Areas',
    authority: 'Hampshire Wide',
  },
  {
    feature: 'Google Business Profile Optimization',
    category: 'Local Search',
    starter: 'Standard Setup & Cleanup',
    growth: 'Advanced Weekly Strategy',
    authority: 'Multi-Location / Full Management',
  },
  {
    feature: 'Google Maps 3-Pack Strategy',
    category: 'Local Search',
    starter: true,
    growth: true,
    authority: true,
  },
  {
    feature: 'Technical SEO & Speed Fixes',
    category: 'Technical Architecture',
    starter: 'Core Diagnostics',
    growth: 'Comprehensive Fixes',
    authority: 'Priority Code-Level Support',
  },
  {
    feature: 'Core Web Vitals Optimization',
    category: 'Technical Architecture',
    starter: 'Basic Monitoring',
    growth: 'Advanced Remediation',
    authority: 'Complete Speed Engineering',
  },
  {
    feature: 'New Optimized Content / Pages per Month',
    category: 'Content & Relevance',
    starter: '1 Page / Mo',
    growth: '2 Pages / Mo',
    authority: '4 Pages / Mo',
  },
  {
    feature: 'Topical Authority & Content Silos',
    category: 'Content & Relevance',
    starter: false,
    growth: true,
    authority: true,
  },
  {
    feature: 'JSON-LD Structured Data Schema',
    category: 'Technical Architecture',
    starter: 'Basic LocalBusiness',
    growth: 'Advanced Entity Schema',
    authority: 'Custom Multi-Schema Stack',
  },
  {
    feature: 'Competitor Gap & Threat Monitoring',
    category: 'Strategy & Analysis',
    starter: 'Quarterly',
    growth: 'Monthly',
    authority: 'Continuous Real-Time',
  },
  {
    feature: 'UK Local Citations & Directory Consistency',
    category: 'Local Search',
    starter: 'Essential Directory Cleanup',
    growth: 'Targeted High-Tier UK Citations',
    authority: 'Full Regional Authority Building',
  },
  {
    feature: 'Reporting & Strategy Consultations',
    category: 'Support & Management',
    starter: 'Monthly Performance Email',
    growth: 'Monthly Strategy Video Call',
    authority: 'Bi-Weekly Strategy & Direct Access',
  },
  {
    feature: 'Contract Commitment',
    category: 'Terms',
    starter: 'Flexible (No Lock-In)',
    growth: 'Flexible (No Lock-In)',
    authority: 'Flexible (No Lock-In)',
  },
];

export const ABOUT_DATA = {
  heading: 'About Southampton SEO',
  subheading: 'Specialist Search Engine Optimisation for Southampton & Hampshire Businesses',
  founderIntro:
    'Southampton SEO was founded on a straightforward principle: businesses in Hampshire deserve high-calibre, commercial-grade SEO without agency fluff, vanity metrics, or binding 12-month lock-in contracts.',
  philosophy:
    'Search algorithms reward technical precision, authoritative topical depth, and genuine local relevance. We focus relentlessly on the commercial queries that your prospective customers actually search when they are ready to hire a contractor, engage a professional advisor, or purchase a service.',
  pillars: [
    {
      title: 'Clear Strategy',
      description:
        'Every campaign begins with forensic market research, search intent mapping, and an actionable roadmap tailored to your specific commercial margins.',
    },
    {
      title: 'Practical Recommendations',
      description:
        'We execute direct code, content, and citation improvements that move the needle in Google Search, rather than generating theoretical 80-page slide decks.',
    },
    {
      title: 'Transparent Reporting',
      description:
        'You always know what was completed, why it was prioritized, and how it connects to keyword rankings, organic traffic, and inbound customer enquiries.',
    },
    {
      title: 'Long-Term Growth',
      description:
        'We build sustainable, white-hat organic foundations that compound over time, establishing lasting search authority that competitors cannot easily duplicate.',
    },
  ],
};

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'competitor-visibility',
    title: 'Competitors Outranking You on Key Commercial Terms',
    description:
      'When prospective Southampton customers search for your core services, your competitors capture the top 3 spots, claiming over 65% of all organic clicks.',
    symptom: 'Lost market share to competitors with weaker real-world offerings',
  },
  {
    id: 'invisible-maps',
    title: 'Poor or Zero Visibility in the Google Maps 3-Pack',
    description:
      'Your business fails to appear in local map searches across Southampton and Hampshire, losing high-intent phone calls and immediate service enquiries.',
    symptom: 'Missing out on high-intent mobile and localized searchers',
  },
  {
    id: 'traffic-no-leads',
    title: 'Website Traffic That Fails to Generate Enquiries',
    description:
      'Your site may receive occasional visits, but visitors bounce quickly because the page structure and search intent alignment fail to inspire trust or action.',
    symptom: 'High bounce rates and disappointing conversion rates',
  },
  {
    id: 'technical-blockers',
    title: 'Hidden Technical SEO Errors Holding Back Rankings',
    description:
      'Slow load speeds, index bloat, broken redirects, and missing structured data prevent Google from recognizing your site as a top-tier authority.',
    symptom: 'Stagnant rankings despite having good on-page copy',
  },
  {
    id: 'keyword-misalignment',
    title: 'Targeting Generic or Non-Commercial Keywords',
    description:
      'Wasting resources chasing national informational terms that never generate enquiries instead of localized, high-value Southampton buyer searches.',
    symptom: 'Vanity traffic figures with zero measurable impact on revenue',
  },
  {
    id: 'outdated-tactics',
    title: 'Relying on Outdated, Jargon-Heavy SEO Tactics',
    description:
      'Receiving automated PDF reports showing keyword movements with zero transparent explanation of what work was actually completed or what business revenue it generated.',
    symptom: 'Paying monthly retainers without clear visibility into ROI',
  },
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    id: 'strategy-first',
    title: 'Strategy First',
    summary: 'We do not blindly execute generic monthly task lists.',
    detail:
      'Every campaign begins with deep competitor research, search intent mapping, and an ROI-driven roadmap customized specifically for your Southampton business model.',
  },
  {
    id: 'business-focused',
    title: 'Business-Focused Outcomes',
    summary: 'Rankings are useful, but qualified enquiries are the real metric.',
    detail:
      'We measure success by phone calls, contact form submissions, consultation bookings, and bottom-line revenue growth — not obscure vanity metrics.',
  },
  {
    id: 'transparency',
    title: 'Total Transparency',
    summary: 'You always understand what is being worked on and why.',
    detail:
      'No black-box secrecy. You receive clear, actionable work logs detailing technical fixes, content deployments, and strategic improvements.',
  },
  {
    id: 'technical-expertise',
    title: 'Deep Technical Expertise',
    summary: 'SEO covers far more than keywords and backlinks.',
    detail:
      'We audit and optimize at the code and infrastructure level: Core Web Vitals, server response times, schema markup, crawl hierarchy, and mobile usability.',
  },
  {
    id: 'local-search',
    title: 'Local Search Experience',
    summary: 'A deep understanding of Southampton and Hampshire search behavior.',
    detail:
      'We understand how local buyers search across Southampton, Winchester, Eastleigh, Fareham, and surrounding areas, tailoring your geo-signals accordingly.',
  },
  {
    id: 'clear-communication',
    title: 'Clear, Jargon-Free Communication',
    summary: 'No confusing reports filled with meaningless acronyms.',
    detail:
      'We communicate like strategic partners in plain English, explaining the direct business context behind every recommendation.',
  },
];

export const CASE_STUDY_PLACEHOLDERS: CaseStudyPlaceholder[] = [
  {
    id: 'case-study-1',
    clientType: 'Commercial B2B Service Provider (Hampshire)',
    tag: 'Technical & Commercial SEO Strategy',
    challenge:
      'The client suffered from technical crawl errors, cannibalized landing pages, and weak visibility for primary commercial service terms across Southampton and Winchester.',
    strategy: [
      'Comprehensive Core Web Vitals and site architecture remediation',
      'Commercial intent keyword re-clustering and metadata overhaul',
      'Targeted service-area landing pages with verified local schema',
      'Strategic internal linking hierarchy targeting high-margin services',
    ],
    metrics: [
      { label: 'Organic Traffic Increase', placeholder: '+184%' },
      { label: 'Top 10 Commercial Keywords', placeholder: '28 Page 1' },
      { label: 'Qualified Inbound Leads', placeholder: '+140%' },
      { label: 'Regional Search Visibility', placeholder: 'Hampshire' },
    ],
    businessOutcome:
      'The client established dominant top-3 positions across Southampton for high-value commercial keywords, creating a consistent stream of inbound quotation requests.',
  },
  {
    id: 'case-study-2',
    clientType: 'Local Professional Services Firm (Southampton)',
    tag: 'Local SEO & Google Business Profile',
    challenge:
      'Despite an established local reputation, the firm was completely invisible on the Google Maps 3-Pack and outranked by competitors with fewer physical qualifications.',
    strategy: [
      'Google Business Profile complete category re-mapping and attribute optimization',
      'UK citation audit and NAP consistency cleanup across major directories',
      'Implementation of localized review acquisition workflow',
      'Geo-targeted landing page structure for Southampton, Eastleigh & Romsey',
    ],
    metrics: [
      { label: 'Google Maps 3-Pack Visibility', placeholder: 'Top 3 Maps' },
      { label: 'Direct Phone Call Enquiries', placeholder: '+220%' },
      { label: 'Local Search Impressions', placeholder: '+165%' },
      { label: 'Primary Service Rankings', placeholder: 'Rank #1-3' },
    ],
    businessOutcome:
      'Captured top positions in the Google Maps Local 3-Pack for core Southampton searches, leading to a substantial increase in direct telephone consultations.',
  },
  {
    id: 'case-study-3',
    clientType: 'Regional Specialist Contractor (Southampton & Hampshire)',
    tag: 'Content Architecture & Topical Authority',
    challenge:
      'Thin website content and lack of topical depth resulted in stagnant rankings outside the immediate postal code, limiting expansion into broader Hampshire markets.',
    strategy: [
      'Comprehensive topical authority content roadmap addressing customer questions',
      'Creation of high-converting service landing pages with rich FAQ schema',
      'Elimination of duplicate content and legacy redirect chains',
      'High-quality regional link acquisition and local press mentions',
    ],
    metrics: [
      { label: 'Non-Brand Organic Traffic', placeholder: '+310%' },
      { label: 'Page 1 Keyword Positions', placeholder: '45+ Terms' },
      { label: 'Commercial Enquiries', placeholder: '+195%' },
      { label: 'Hampshire Wide Reach', placeholder: 'Regional' },
    ],
    businessOutcome:
      'Expanded market dominance from central Southampton out across key Hampshire commercial corridors, generating steady high-ticket project enquiries.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Audit',
    tagline: 'Discovery & Forensic Analysis',
    description:
      'We conduct an exhaustive forensic audit of your website, competitors, technical health, search rankings, and commercial keyword opportunities across Southampton.',
    actions: [
      'Full technical crawl & Core Web Vitals diagnosis',
      'Competitor ranking & backlink gap analysis',
      'Search intent & keyword opportunity mapping',
      'Google Business Profile & local citation audit',
    ],
  },
  {
    step: '02',
    title: 'Strategy',
    tagline: 'Prioritized Commercial Blueprint',
    description:
      'We build a prioritized SEO roadmap designed specifically around your commercial objectives, focusing first on the highest-impact revenue opportunities.',
    actions: [
      'Custom 90-day prioritized action plan',
      'High-intent commercial keyword selection',
      'Information architecture & URL blueprint',
      'Conversion rate optimization recommendations',
    ],
  },
  {
    step: '03',
    title: 'Optimisation',
    tagline: 'Hands-On Technical & Content Execution',
    description:
      'We systematically implement technical fixes, optimize existing pages, engineer high-performing local landing pages, and enhance your Google Maps presence.',
    actions: [
      'Code-level technical fixes & schema deployment',
      'On-page copy & title tag optimization',
      'Google Business Profile enhancements',
      'Internal link structure & content expansion',
    ],
  },
  {
    step: '04',
    title: 'Growth',
    tagline: 'Continuous Refinement & Transparent Reporting',
    description:
      'We monitor ranking progress, organic search impressions, and inbound leads, continually refining your strategy to compound your search authority and ROI.',
    actions: [
      'Weekly keyword position & visibility tracking',
      'Monthly plain-English performance reviews',
      'Ongoing content expansion & authority building',
      'Conversion tracking and enquiry attribution',
    ],
  },
];

export const INDUSTRIES: IndustryCategory[] = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Accountants, financial advisors, consultants, and management agencies.',
    commonKeywords: ['accountants southampton', 'financial advisor hampshire', 'management consultant'],
  },
  {
    id: 'legal',
    name: 'Legal & Solicitors',
    description: 'Commercial law firms, conveyancers, family solicitors, and dispute specialists.',
    commonKeywords: ['solicitors southampton', 'commercial lawyer hampshire', 'conveyancing southampton'],
  },
  {
    id: 'trades-home-services',
    name: 'Trades & Home Services',
    description: 'Commercial electricians, plumbers, HVAC contractors, and construction firms.',
    commonKeywords: ['commercial electrician southampton', 'hvac hampshire', 'builders southampton'],
  },
  {
    id: 'healthcare-private-medical',
    name: 'Healthcare & Private Clinics',
    description: 'Private dental practices, physiotherapy clinics, specialists, and cosmetic health.',
    commonKeywords: ['private dentist southampton', 'physiotherapy southampton', 'private clinic hampshire'],
  },
  {
    id: 'property-estate',
    name: 'Property & Estate Agents',
    description: 'Commercial property agents, surveyors, letting agents, and property managers.',
    commonKeywords: ['commercial property southampton', 'surveyors hampshire', 'estate agents southampton'],
  },
  {
    id: 'b2b-businesses',
    name: 'B2B & Industrial',
    description: 'Manufacturers, logistics providers, marine suppliers, and IT support companies.',
    commonKeywords: ['it support southampton', 'marine engineering southampton', 'logistics hampshire'],
  },
  {
    id: 'hospitality-venues',
    name: 'Hospitality & Venues',
    description: 'Hotels, event venues, specialist restaurants, and conference centres.',
    commonKeywords: ['event venue southampton', 'conference hire hampshire', 'private dining southampton'],
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce & Retail',
    description: 'Specialist online stores, regional distributors, and direct-to-consumer brands.',
    commonKeywords: ['specialist supplier uk', 'online store seo', 'product category search'],
  },
  {
    id: 'local-businesses',
    name: 'Local Service Businesses',
    description: 'Established local businesses seeking dominant market share in Southampton.',
    commonKeywords: ['services southampton', 'local specialist hampshire', 'best service near southampton'],
  },
];

export const LOCAL_AREAS: LocalArea[] = [
  {
    name: 'Southampton (Central & Districts)',
    type: 'Primary Hub',
    distanceFromSouthampton: 'Core City Area (SO14–SO19)',
    commercialContext:
      'The primary commercial, maritime, and retail center. High search density for professional, trade, and B2B services.',
  },
  {
    name: 'Eastleigh',
    type: 'Key Surrounding Area',
    distanceFromSouthampton: '6 miles north',
    commercialContext:
      'Thriving industrial and business park corridor with high demand for commercial B2B services and local trade specialists.',
  },
  {
    name: 'Winchester',
    type: 'Key Surrounding Area',
    distanceFromSouthampton: '12 miles north',
    commercialContext:
      'Historic county city with strong search competition in high-end legal, financial, and private healthcare services.',
  },
  {
    name: 'Totton & Waterside',
    type: 'Key Surrounding Area',
    distanceFromSouthampton: '4 miles west',
    commercialContext:
      'Gateway to the New Forest and Southampton docks, serving logistics, marine, and local commercial services.',
  },
  {
    name: 'Hedge End & Botley',
    type: 'Key Surrounding Area',
    distanceFromSouthampton: '5 miles east',
    commercialContext:
      'Major retail, logistics, and residential center with active search volume for home, B2B, and professional services.',
  },
  {
    name: 'Romsey',
    type: 'Key Surrounding Area',
    distanceFromSouthampton: '8 miles northwest',
    commercialContext:
      'Affluent market town with strong demand for professional practices, independent trades, and specialist consultants.',
  },
  {
    name: 'Fareham & Whiteley',
    type: 'Regional Hampshire Corridor',
    distanceFromSouthampton: '11 miles east',
    commercialContext:
      'Key commercial business parks (Solent Business Park) housing major technology, financial, and engineering hubs.',
  },
  {
    name: 'Portsmouth & Solent',
    type: 'Regional Hampshire Corridor',
    distanceFromSouthampton: '19 miles east',
    commercialContext:
      'Extending strategic Hampshire search authority across the wider South Coast commercial ecosystem.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does an SEO agency in Southampton do?',
    answer:
      'An SEO agency in Southampton optimizes your website and Google Business Profile to improve organic visibility in Google Search and Google Maps for relevant commercial searches. This includes technical auditing, Core Web Vitals speed optimization, commercial keyword research, localized content creation, on-page optimization, and high-quality relevance building designed to drive qualified customer enquiries and sales.',
  },
  {
    id: 'faq-2',
    question: 'How much does SEO cost in Southampton?',
    answer:
      'SEO pricing in Southampton depends on your market competition, geographical targets, and current website health. Our transparent packages start at £299/month for local Starter packages, £499/month for our most popular Growth engine, and £799/month for comprehensive Hampshire Authority domination. Bespoke enterprise roadmaps are also available without long-term binding lock-ins.',
  },
  {
    id: 'faq-3',
    question: 'How long does it take to see SEO results in Southampton?',
    answer:
      'Initial technical fixes, Google Business Profile corrections, and low-competition keyword gains often begin showing movement within 4 to 8 weeks. Substantial competitive growth, increased topical authority, and sustained commercial enquiry volume typically compound solidly over 3 to 6 months.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer Local SEO for Southampton businesses?',
    answer:
      'Yes, Local SEO is a core specialization. We optimize your Google Business Profile, local citations, service-area landing pages, and localized review strategies to ensure prominent visibility in the Google Maps Local 3-Pack and geo-targeted organic search results across Southampton, Eastleigh, Winchester, and Hampshire.',
  },
  {
    id: 'faq-5',
    question: 'How do I choose the best SEO agency in Southampton?',
    answer:
      'Look for an agency that focuses on commercial business outcomes and lead generation rather than vanity metrics, provides transparent work logs without binding jargon, understands local search intent in Southampton and Hampshire, and demonstrates technical competence across crawlability, Core Web Vitals, and content depth.',
  },
  {
    id: 'faq-6',
    question: 'What is the difference between SEO and Google Ads (PPC)?',
    answer:
      'Google Ads (PPC) delivers immediate traffic while you pay per click, but stops the moment your budget ends. SEO builds sustainable organic search equity and topical authority on Google Search and Maps, generating continuous, high-converting traffic and inbound enquiries without recurring media ad costs.',
  },
  {
    id: 'faq-7',
    question: 'Can you help our business rank in the Google Maps Local 3-Pack?',
    answer:
      'Yes. Google Maps visibility requires meticulous primary and secondary category selection, granular service definitions, localized citation consistency across UK directories, geo-relevance signals, and structured customer review management to achieve top ranking in the Local 3-Pack.',
  },
  {
    id: 'faq-8',
    question: 'Do you provide bespoke SEO strategy services?',
    answer:
      'Yes, our SEO Strategy service provides comprehensive competitor audits, commercial search intent mapping, topical authority planning, and prioritized execution roadmaps for in-house marketing teams or businesses seeking dedicated strategic direction.',
  },
  {
    id: 'faq-9',
    question: 'Do you work with businesses across Hampshire outside Southampton?',
    answer:
      'While our primary focus is Southampton and surrounding Hampshire areas such as Winchester, Eastleigh, Romsey, Totton, Hedge End, and Fareham, we also partner with regional and national UK businesses requiring advanced technical and strategic SEO.',
  },
  {
    id: 'faq-10',
    question: 'Why is technical SEO important for my website?',
    answer:
      'Even great content will fail to rank if search engines encounter slow page speeds, broken redirect loops, render-blocking scripts, or indexation bloat. Technical SEO ensures search spiders can crawl, understand, and index every page efficiently, while delivering optimal Core Web Vitals for mobile users.',
  },
  {
    id: 'faq-11',
    question: 'Do you tie clients into long-term contracts?',
    answer:
      'No. We operate on transparent, flexible rolling agreements. We believe in retaining clients through proven rankings, consistent commercial leads, and transparent reporting rather than restrictive 12-month lock-in contracts.',
  },
  {
    id: 'faq-12',
    question: 'How do you measure and report SEO success?',
    answer:
      'We measure success by tangible business metrics: commercial keyword positions, Google Maps 3-Pack impressions, organic click-through rates, inbound phone calls, and website lead submissions. You receive plain-English reporting dashboards and regular strategy reviews.',
  },
];
