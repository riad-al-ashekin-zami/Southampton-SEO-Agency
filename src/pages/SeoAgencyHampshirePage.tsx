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
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  Layers,
  Award,
  Zap,
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const SeoAgencyHampshirePage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'Which areas across Hampshire does your SEO agency cover?',
      a: 'We provide county-wide SEO consultancy covering Southampton, Portsmouth, Winchester, Basingstoke, Eastleigh, Fareham, Havant, Andover, and the New Forest. We help regional brands capture commercial search volume across all Hampshire districts.',
    },
    {
      q: 'How do you help a business rank across multiple Hampshire towns without creating duplicate content?',
      a: 'We avoid thin, copy-pasted doorway pages which Google penalizes. Instead, we architect genuine location hubs with distinct entity signals, unique client case studies, verified local schemas, and authentic local community relevance for each major Hampshire service center.',
    },
    {
      q: 'What makes your Hampshire SEO agency different from London agencies?',
      a: 'London agencies typically charge inflated overhead fees and lack intimate knowledge of Hampshire’s regional economy (maritime, aerospace, defense, logistics, B2B services, and local tourism). As Hampshire specialists, we offer senior expertise, lower overheads, and direct local market insight.',
    },
    {
      q: 'Do you handle technical SEO and Core Web Vitals for large Hampshire sites?',
      a: 'Yes. We frequently audit and optimize complex websites with thousands of URLs, custom web applications, e-commerce stores (Shopify, WooCommerce, Magento), and headless Next.js platforms, solving crawl budget issues, JavaScript hydration delays, and INP bottlenecks.',
    },
    {
      q: 'How do we get started with your Hampshire SEO team?',
      a: 'Start with a complimentary, no-obligation technical and competitive SEO audit. We inspect your search console footprint, benchmark your top 3 Hampshire competitors, and present an actionable 90-day growth blueprint.',
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
          'name': 'SEO Agency Hampshire',
          'item': 'https://southamptonseo.agency/seo-agency-hampshire/',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      'name': 'SEO Agency Hampshire',
      'serviceType': 'Search Engine Optimization Agency Hampshire',
      'provider': {
        '@type': 'Organization',
        'name': 'Southampton SEO',
        'url': 'https://southamptonseo.agency/',
      },
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Hampshire' },
        { '@type': 'City', 'name': 'Southampton' },
        { '@type': 'City', 'name': 'Portsmouth' },
        { '@type': 'City', 'name': 'Winchester' },
        { '@type': 'City', 'name': 'Basingstoke' },
      ],
      'description':
        'Leading SEO agency in Hampshire. Providing data-driven organic search strategy, technical SEO, and high-converting local campaigns across Hampshire, UK.',
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

  const hampshireHubs = [
    { city: 'Southampton', desc: 'Commercial headquarters, maritime, tech startups, healthcare & professional services.' },
    { city: 'Portsmouth', desc: 'Naval engineering, marine technology, defense contractors & coastal tourism.' },
    { city: 'Winchester', desc: 'High-end legal, financial services, architecture, luxury retail & wealth management.' },
    { city: 'Basingstoke', desc: 'Corporate European HQs, technology, pharmaceutical & IT infrastructure.' },
    { city: 'Fareham & Gosport', desc: 'Aviation engineering, precision manufacturing & regional trade services.' },
    { city: 'Eastleigh & Hedge End', desc: 'Distribution hubs, retail logistics, transport corridor & industrial parks.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      <SEOHead
        title="SEO Agency Hampshire | County-Wide Search Engine Optimisation"
        description="Premier SEO agency in Hampshire. Expand your search visibility across Southampton, Portsmouth, Winchester, and Basingstoke. Data-backed organic growth."
        canonicalUrl="https://southamptonseo.agency/seo-agency-hampshire/"
        schema={schema}
        keywords={[
          'seo agency hampshire',
          'seo company hampshire',
          'technical seo services hampshire',
          'internet marketing services hampshire',
          'seo southampton hampshire',
          'best seo agency hampshire',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <PageBreadcrumb items={[{ label: 'SEO Agency Hampshire' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <Globe className="w-3.5 h-3.5" />
              County-Wide Organic Search Specialists
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              SEO Agency Hampshire
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Scale your digital footprint across Hampshire. We partner with ambitious regional enterprises to capture high-value organic search volume, outmaneuver competitors, and drive dependable inbound pipeline from Southampton to Winchester.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenAudit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xs transition-all inline-flex items-center gap-2"
              >
                <span>Request Hampshire SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleOpenStrategy}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 transition-all"
              >
                Discuss Regional Expansion
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">1.4M+</div>
                <div className="text-xs text-gray-500 mt-0.5">Hampshire Population Reach</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Multi-Hub</div>
                <div className="text-xs text-gray-500 mt-0.5">Regional Geo-Architectures</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Zero Fluff</div>
                <div className="text-xs text-gray-500 mt-0.5">Transparent UK Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Location Architecture Framework */}
        <section className="py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                How We Architect County-Wide Hampshire SEO Campaigns
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Scaling your search presence across multiple Hampshire towns requires structural precision. Here is how we build regional authority without triggering Google spam filters:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Entity & Topical Architecture</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We build semantic topical clusters that demonstrate deep competence in your industry, positioning your domain as the definitive Hampshire authority in your niche.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Multi-Location Landing Hubs</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Unique, rich content for each target Hampshire territory (Southampton, Portsmouth, Winchester, Basingstoke) complete with localized schema, case studies, and team signals.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Regional UK Digital PR</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We secure high-tier editorial backlinks from Hampshire media outlets, regional chambers of commerce, and verified UK business networks to cement domain trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hampshire Commercial Hubs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Key Hampshire Commercial Territories
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Our organic campaigns cover the major economic engines across the county of Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hampshireHubs.map((hub, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>{hub.city}</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Hampshire SEO Agency FAQs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Common questions about county-wide organic search marketing across Hampshire.
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
          currentPage="/seo-agency-hampshire/"
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
