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
  Star,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Phone,
  Building2,
  Globe2,
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const LocalSeoSouthamptonPage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'How does Local SEO help my Southampton business win customers?',
      a: 'When someone in Southampton searches for your service (e.g. "solicitor near me" or "commercial electrician Southampton"), Google displays the Local Maps 3-Pack above regular organic results. Dominating the 3-Pack captures high-intent customers who are ready to call or visit immediately.',
    },
    {
      q: 'What is the difference between Google Maps 3-Pack and standard organic SEO?',
      a: 'Google Maps rankings are driven heavily by proximity, Google Business Profile (GBP) completeness, local review velocity, and NAP (Name, Address, Phone) citation consistency. Organic SEO depends more on website architecture, content depth, and domain authority. Our Southampton campaigns optimize both simultaneously.',
    },
    {
      q: 'Which Southampton postcodes do you optimize for?',
      a: 'We calibrate local signals across all Southampton postcode districts: SO14 (City Centre, Ocean Village), SO15 (Shirley, Freemantle), SO16 (Bassett, Lordshill), SO17 (Portswood, Highfield), SO18 (Bitterne, Midanbury), and SO19 (Woolston, Sholing), as well as outer suburbs like Totton, Hedge End, and Eastleigh.',
    },
    {
      q: 'How do you fix incorrect or duplicate business citations?',
      a: 'We perform a forensic audit across 50+ tier-1 UK directory databases (Yell, Scoot, Thomson Local, 118, Bing Places, Apple Business Connect). We identify conflicting addresses, old phone numbers, and duplicate listings, systematically claiming and correcting them to establish unquestionable NAP consistency.',
    },
    {
      q: 'Can a service-area business without a physical walk-in storefront rank in Southampton?',
      a: 'Yes. For trades, mobile specialists, and service-area contractors, we configure your Google Business Profile with verified service boundaries and build hyper-local landing pages so you appear prominently across Southampton without exposing your private residential address.',
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
          'name': 'Local SEO Southampton',
          'item': 'https://southamptonseo.agency/local-seo-southampton/',
        },
      ],
    },
    {
      '@type': 'Service',
      'name': 'Local SEO Southampton',
      'serviceType': 'Local Search Engine Optimization & Google Business Profile Management',
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
        'Dominate the Google Maps 3-Pack and local search results across Southampton and Hampshire. NAP citations, Google Business Profile optimization, and local review strategies.',
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

  const neighborhoods = [
    { name: 'City Centre & Ocean Village', postcode: 'SO14', focus: 'Professional Services, Maritime, Retail' },
    { name: 'Shirley & Freemantle', postcode: 'SO15', focus: 'Trades, Healthcare, Local Services' },
    { name: 'Bassett & Chilworth', postcode: 'SO16', focus: 'Consultancies, High-End Residential Services' },
    { name: 'Portswood & Highfield', postcode: 'SO17', focus: 'Student Hubs, Retail, Hospitality' },
    { name: 'Bitterne & Townhill Park', postcode: 'SO18', focus: 'Home Improvement, Automotive, Trades' },
    { name: 'Woolston & Sholing', postcode: 'SO19', focus: 'Marine Contractors, Commercial Services' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      <SEOHead
        title="Local SEO Southampton | Google Maps 3-Pack & Local Search Specialists"
        description="Dominate local Google search and the Google Maps 3-Pack in Southampton. Proven Local SEO strategies that turn nearby searchers into phone calls and customers."
        canonicalUrl="https://southamptonseo.agency/local-seo-southampton/"
        schema={schema}
        keywords={[
          'local seo southampton',
          'local seo services southampton',
          'seo services near me',
          'google maps seo southampton',
          'google business profile southampton',
          'affordable local seo services near me',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <PageBreadcrumb items={[{ label: 'Local SEO Southampton' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Google Maps 3-Pack & Local Search Dominance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Local SEO Southampton
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              When customers in Southampton search for your services on Google, are they finding you or your competitors? We optimize your Google Business Profile, fix broken local citations, and build geo-targeted authority so you rank #1 in the Maps 3-Pack.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenAudit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xs transition-all inline-flex items-center gap-2"
              >
                <span>Claim Free Local SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleOpenStrategy}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 transition-all"
              >
                Discuss Local Map Strategy
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">3-Pack</div>
                <div className="text-xs text-gray-500 mt-0.5">Google Maps Top Placement</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">50+</div>
                <div className="text-xs text-gray-500 mt-0.5">Verified UK Citations</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">100%</div>
                <div className="text-xs text-gray-500 mt-0.5">NAP Consistency</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Pillars of Local SEO */}
        <section className="py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                The 5 Pillars of Our Southampton Local SEO Blueprint
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Ranking locally requires a multi-layered approach combining Google's map algorithm and localized on-page organic factors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Navigation className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Google Business Profile (GBP) Optimization</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We audit your primary and secondary categories, service listings, high-resolution geo-tagged photos, business hours, and weekly post cadence to maximize local pack relevance.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">NAP Consistency & UK Citations</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Conflicting Name, Address, or Phone numbers severely harm your local trust score. We clean up and establish uniform citations across trusted UK business directories.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Localized Review Acceleration</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Review velocity, ratings, and keyword-rich customer sentiment are major ranking signals. We implement an automated review generation strategy for satisfied Southampton clients.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Geo-Targeted Landing Pages</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We build dedicated service-area pages targeting specific Southampton postcodes and neighboring towns (Totton, Hedge End, Eastleigh) without creating thin doorway pages.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Localized JSON-LD Schema Markup</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We embed detailed LocalBusiness, GeoCoordinates, areaServed, and openingHours schema directly into your code so Google accurately understands your physical presence.
                </p>
              </div>

              {/* Callout Box */}
              <div className="p-6 bg-blue-600 text-white rounded-xl shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Want to see where your business ranks right now?</h3>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Get a localized ranking grid showing your exact Google Maps position from different coordinates across Southampton.
                  </p>
                </div>
                <button
                  onClick={handleOpenAudit}
                  className="mt-4 w-full py-2.5 bg-white text-blue-600 font-bold text-xs rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Request Local Grid Audit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Southampton Neighborhood Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Southampton Postcode & Neighborhood Coverage
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              We target high-intent local searches across all major commercial and residential districts of Southampton.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((n, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-900 text-base">{n.name}</span>
                  <span className="text-xs font-mono font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                    {n.postcode}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  <strong className="text-gray-700">Commercial Sectors:</strong> {n.focus}
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
                Southampton Local SEO FAQs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Common questions about Google Maps 3-Pack and local search optimization in Southampton.
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
          currentPage="/local-seo-southampton/"
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
