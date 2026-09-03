import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { RelatedPagesSection } from '../components/RelatedPagesSection';
import { StickyMobileCTA } from '../components/StickyMobileCTA';
import { AuditModal } from '../components/AuditModal';
import { StrategyModal } from '../components/StrategyModal';
import { PrivacyTermsModal } from '../components/PrivacyTermsModal';
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  Settings,
  FileText,
  MapPin,
  BarChart3,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const SeoServicesSouthamptonPage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'What do your Southampton SEO services include?',
      a: 'Our Southampton SEO service agreements encompass end-to-end organic search management: technical crawl diagnostics, Core Web Vitals optimization, geo-targeted keyword clustering, high-intent landing page production, Google Business Profile management, local citation audits, and monthly transparent conversion reporting.',
    },
    {
      q: 'How long does it take to see tangible ranking improvements in Southampton?',
      a: 'Most Southampton businesses see initial ranking lifts and impressions growth within 60 to 90 days. Competitive commercial terms (such as commercial B2B or competitive trade queries) typically hit top-3 Google positions within 4 to 6 months of systematic technical fixes and content velocity.',
    },
    {
      q: 'Are your SEO services tailored specifically to the Southampton market?',
      a: 'Yes. We calibrate your search presence to specific postcodes (SO14 through SO19), surrounding commercial hubs (Totton, Eastleigh, Hedge End, Waterside), and Hampshire-wide searchers. This ensures you attract actual paying customers in your target territory rather than unqualified national traffic.',
    },
    {
      q: 'Do you require 12-month lock-in contracts?',
      a: 'No. We operate on flexible monthly rolling retainers after an initial 3-month strategic sprint. We believe retention should be earned through measurable organic traffic, lead generation, and demonstrable ROI.',
    },
    {
      q: 'How do you measure and report SEO success?',
      a: 'We focus on business metrics rather than vanity keyword counts. Every month, you receive a clear, human-explained dashboard tracking qualified organic impressions, Google Maps clicks, phone calls, contact form submissions, and revenue pipeline attribution.',
    },
  ];

  const schema = [
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://southamptonseo.agency/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'SEO Services Southampton',
          'item': 'https://southamptonseo.agency/seo-services-southampton/',
        },
      ],
    },
    {
      '@type': 'Service',
      'name': 'SEO Services Southampton',
      'serviceType': 'Search Engine Optimization',
      'provider': {
        '@type': 'Organization',
        'name': 'Southampton SEO',
        'url': 'https://southamptonseo.agency/',
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Southampton' },
        { '@type': 'AdministrativeArea', 'name': 'Hampshire' },
      ],
      'description':
        'Comprehensive organic SEO services for Southampton companies: technical audits, local SEO, content strategy, and conversion optimization.',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      <SEOHead
        title="SEO Services Southampton | Specialist Search Engine Optimisation"
        description="Data-driven SEO services in Southampton. Dominate Google search results, capture high-intent local buyers, and grow predictable organic revenue. Get your free audit."
        canonicalUrl="https://southamptonseo.agency/seo-services-southampton/"
        schema={schema}
        keywords={[
          'seo services southampton',
          'southampton seo services',
          'seo services in southampton',
          'professional seo company in southampton',
          'seo company southampton',
          'best seo agency southampton',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb Navigation */}
        <PageBreadcrumb items={[{ label: 'SEO Services Southampton' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <Search className="w-3.5 h-3.5" />
              Specialist UK Agency Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              SEO Services Southampton
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Engineered search engine optimisation campaigns built for ambitious Southampton businesses. We eliminate technical roadblocks, dominate high-intent commercial keywords, and turn organic search into your most profitable customer acquisition channel.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenAudit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xs transition-all inline-flex items-center gap-2"
              >
                <span>Request Free Southampton SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleOpenStrategy}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 transition-all"
              >
                Book 20-Min Consultation
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">100%</div>
                <div className="text-xs text-gray-500 mt-0.5">White-Hat Strategy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">SO14–SO19</div>
                <div className="text-xs text-gray-500 mt-0.5">Hyper-Local Relevance</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">No Lock-In</div>
                <div className="text-xs text-gray-500 mt-0.5">Monthly Rolling Contracts</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Service Pillars */}
        <section className="py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Our Southampton SEO Services Framework
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                SEO is not a one-size-fits-all checklist. We combine deep technical rigor, hyper-local geographical signals, and commercial content strategy to secure sustainable Page 1 positions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Technical SEO & Core Web Vitals</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Fix render-blocking scripts, crawl errors, index bloat, and canonical loops. We optimize your site speed and architecture so Googlebot crawls every dollar-generating page effortlessly.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>LCP & INP Core Web Vitals remediation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Robots.txt, XML sitemaps & canonicalization</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Local SEO & Google Maps 3-Pack</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Capture high-intent searches from customers looking for services right now in Southampton, Ocean Village, Portswood, and surrounding Hampshire suburbs.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Google Business Profile (GBP) ranking optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>UK NAP citation cleanup & geo-schema markup</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Commercial Content & Semantic SEO</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  We write and optimize landing pages and topical clusters that answer exactly what buyers search for, outranking competitors on transactional and commercial queries.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Competitor content gap analysis & topical authority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>High-converting, zero-fluff UK copywriting</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Competitor Reverse-Engineering</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  We analyze the top-ranking Southampton competitors in your sector, identify their exact backlink sources, keyword vulnerabilities, and content weaknesses.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Backlink profile comparison & acquisition targets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Keyword difficulty vs. commercial value scoring</span>
                  </li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">High-Authority Digital PR & Backlinks</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  White-hat, editorial backlink acquisition from legitimate UK business publications, Hampshire news outlets, and relevant industry authorities. No PBNs or link farms.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Local Hampshire & UK business press features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Editorial outreach & unlinked brand mentions</span>
                  </li>
                </ul>
              </div>

              {/* Card 6 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Revenue & Conversion Tracking</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Rankings without revenue are meaningless. We implement Google Analytics 4 (GA4) event tracking, phone call attribution, and form submission telemetry.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>GA4 conversion funnels & lead source tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Transparent monthly ROI and ranking reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Southampton Businesses Need Specialized Local SEO */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Why Generic National SEO Fails for Southampton Businesses
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                National agencies often apply a generic cookie-cutter approach: writing superficial blog posts and ignoring the local intent signals that Google uses to rank businesses in Hampshire.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Southampton has distinct commercial dynamics. Whether you are targeting maritime logistics near the docks, B2B services along the M27 corridor, or local homeowners in Bassett and Shirley, your search strategy requires precise geographical relevance and verified UK entity signals.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Hyper-local targeting:</strong> Captures queries across Southampton, Eastleigh, Winchester, and Hampshire.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Direct expert access:</strong> You speak directly with your senior SEO strategist, not an inexperienced account manager.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Commercial focus:</strong> We prioritize keywords with direct purchasing intent over vanity search volume.
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleOpenAudit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all"
                >
                  Get Your Free Site Audit
                </button>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                What Happens in Month 1 of Your SEO Campaign?
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                  <div className="font-semibold text-blue-400">Week 1: Comprehensive Forensic Audit</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Crawl diagnostics, Google Search Console indexation review, and Core Web Vitals speed benchmarking.
                  </p>
                </div>
                <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                  <div className="font-semibold text-blue-400">Week 2: Southampton Competitor Matrix</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Reverse-engineering top 3 local competitors to pinpoint ranking gaps and keyword opportunities.
                  </p>
                </div>
                <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                  <div className="font-semibold text-blue-400">Week 3: Technical Remediation & Quick Wins</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Fixing broken status codes, missing metadata, canonical issues, and schema markup errors.
                  </p>
                </div>
                <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                  <div className="font-semibold text-blue-400">Week 4: Roadmap & Content Execution</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Delivering the 90-day execution sprint roadmap with initial landing page rewrites and local citations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Frequently Asked Questions About Southampton SEO Services
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Straight answers to common questions from Hampshire business owners.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left px-5 py-4 bg-gray-50/50 hover:bg-gray-50 flex items-center justify-between text-sm sm:text-base font-semibold text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        openFaqIndex === index ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-5 py-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages & Silo Navigation */}
        <RelatedPagesSection
          currentPage="/seo-services-southampton/"
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />
      </main>

      <Footer
        onOpenAudit={handleOpenAudit}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      <StickyMobileCTA onOpenAudit={handleOpenAudit} />

      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
      <StrategyModal isOpen={strategyModalOpen} onClose={() => setStrategyModalOpen(false)} />
      <PrivacyTermsModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
};
