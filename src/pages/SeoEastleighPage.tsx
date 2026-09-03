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
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building,
  TrendingUp,
  Truck,
  Briefcase,
  Compass,
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const SeoEastleighPage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'Why should an Eastleigh business invest in local SEO rather than general UK marketing?',
      a: 'Eastleigh has a dense commercial ecosystem driven by the M3/M27 transport corridor, Boyatt Wood industrial parks, and proximity to Southampton Airport. High-intent searchers looking for suppliers, commercial trades, and B2B services in Eastleigh want local providers who can deliver immediately. Local SEO ensures you win these high-value local contracts.',
    },
    {
      q: 'Can an Eastleigh business rank for both Eastleigh and Southampton keywords?',
      a: 'Yes. Eastleigh borders Southampton directly (SO50 and SO53 postcodes). With proper geo-targeted URL architecture, structured local citations, and localized schema markup, your website can simultaneously dominate searches in Eastleigh, Chandlers Ford, Hedge End, and central Southampton without keyword cannibalization.',
    },
    {
      q: 'How long does it take for an Eastleigh business to reach Page 1 of Google?',
      a: 'Because Eastleigh has lower search saturation than central London or national terms, dedicated local campaigns frequently achieve Page 1 rankings within 60 to 90 days for core commercial keywords (such as "commercial electrician Eastleigh" or "B2B manufacturing Hampshire").',
    },
    {
      q: 'Do you work with industrial estate and B2B businesses in Boyatt Wood and Chandlers Ford?',
      a: 'Yes. A substantial portion of our work involves technical and B2B search engine optimisation for engineering firms, distributors, logistics providers, and professional consultancies operating in Eastleigh’s key business parks.',
    },
    {
      q: 'What is included in an Eastleigh SEO audit?',
      a: 'Our audit benchmarks your current ranking positions across Eastleigh and Southampton, audits your technical site health (crawl errors and page speed), evaluates competitor rankings in SO50/SO53, and provides a clear 90-day action plan to capture market share.',
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
          'name': 'SEO Services Eastleigh',
          'item': 'https://southamptonseo.agency/seo-eastleigh/',
        },
      ],
    },
    {
      '@type': 'Service',
      'name': 'SEO Services Eastleigh',
      'serviceType': 'Search Engine Optimization for Eastleigh & Hampshire',
      'provider': {
        '@type': 'Organization',
        'name': 'Southampton SEO',
        'url': 'https://southamptonseo.agency/',
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Eastleigh' },
        { '@type': 'AdministrativeArea', 'name': 'Hampshire' },
      ],
      'description':
        'Specialist SEO services in Eastleigh, Chandlers Ford, and Boyatt Wood. Capture high-value local search traffic, Google Maps visibility, and commercial enquiries.',
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

  const districts = [
    { name: 'Boyatt Wood & Industrial Parks', postcode: 'SO50', desc: 'Manufacturing, Engineering, Logistics & Trade Counters' },
    { name: 'Chandlers Ford & Valley Park', postcode: 'SO53', desc: 'Corporate HQs, Tech Enterprises & Professional Services' },
    { name: 'Eastleigh Town Centre', postcode: 'SO50', desc: 'Retail, Hospitality, Dental, Medical & Local Clinics' },
    { name: 'Airport Business Park & Wide Lane', postcode: 'SO18 / SO50', desc: 'Aviation Suppliers, Freight, Warehousing & Fleet' },
    { name: 'Fair Oak & Bishopstoke', postcode: 'SO50', desc: 'Residential Trades, Construction & Domestic Services' },
    { name: 'Hedge End Commercial Hub', postcode: 'SO30', desc: 'Retail Parks, Regional B2B Services & Contractors' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      <SEOHead
        title="SEO Eastleigh | Specialist SEO Services for Eastleigh & SO50"
        description="Rank #1 on Google in Eastleigh and Chandlers Ford. Proven SEO strategies for Eastleigh businesses, industrial parks, and service providers. Get a free audit."
        canonicalUrl="https://southamptonseo.agency/seo-eastleigh/"
        schema={schema}
        keywords={[
          'seo eastleigh',
          'seo services eastleigh',
          'seo company in eastleigh',
          'seo chandlers ford',
          'seo agency eastleigh',
          'local seo eastleigh',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <PageBreadcrumb items={[{ label: 'SEO Services Eastleigh' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <Compass className="w-3.5 h-3.5" />
              Eastleigh & Chandlers Ford SEO Specialists
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              SEO Services Eastleigh
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Help buyers find your business first. We deliver tailored organic search engine optimisation for companies in Eastleigh, Boyatt Wood, and Chandlers Ford—capturing high-value commercial enquiries across Hampshire and the M3/M27 corridor.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenAudit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xs transition-all inline-flex items-center gap-2"
              >
                <span>Request Free Eastleigh SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleOpenStrategy}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 transition-all"
              >
                Schedule Consultation
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">SO50 & SO53</div>
                <div className="text-xs text-gray-500 mt-0.5">Eastleigh Coverage</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">M3 / M27</div>
                <div className="text-xs text-gray-500 mt-0.5">Corridor Dominance</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Direct ROI</div>
                <div className="text-xs text-gray-500 mt-0.5">Targeting Ready Buyers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Eastleigh Commercial Sector Focus */}
        <section className="py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Tailored SEO for Eastleigh's Key Commercial Sectors
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Eastleigh is a unique business hub bridging Southampton and Winchester. We tailor our search strategy to your exact business model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Logistics & Industrial Suppliers</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  For businesses near Southampton Airport and Boyatt Wood. We optimize technical specs, B2B catalog architecture, and high-value transactional procurement keywords.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Corporate & Professional Services</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  For accountants, law firms, recruitment agencies, and IT consultancies in Chandlers Ford and Eastleigh centre looking to win corporate clients across Hampshire.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Trade Contractors & Local Services</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  For plumbers, builders, HVAC contractors, and automotive centers. We optimize Google Business Profiles and local map rankings to keep your schedule fully booked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eastleigh & Chandlers Ford Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Eastleigh Borough Geographic Coverage
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              We target high-intent search queries across all major commercial parks and residential zones in the Borough of Eastleigh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((d, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-900 text-base">{d.name}</span>
                  <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                    {d.postcode}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {d.desc}
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
                Eastleigh SEO FAQs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Questions from Eastleigh business owners looking to grow their local search visibility.
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
          currentPage="/seo-eastleigh/"
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
