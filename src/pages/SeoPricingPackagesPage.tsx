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
  Coins,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { PRICING_PACKAGES, PRICING_COMPARISON_ROWS } from '../data/seoData';
import { PricingPackage } from '../types';

export const SeoPricingPackagesPage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(true);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'Are your SEO pricing packages subject to 12-month lock-in contracts?',
      a: 'No. All our Southampton SEO packages operate on rolling monthly agreements after an initial 3-month onboarding sprint. We believe ongoing partnership should be earned through measurable rankings, organic traffic, and qualified inbound leads.',
    },
    {
      q: 'What is the minimum budget required for an effective SEO campaign in Southampton?',
      a: 'For single-location local businesses targeting Southampton and immediate suburbs (SO14-SO19), our SEO Starter package at £299/month delivers significant Google Maps and local ranking improvements. For competitive regional B2B, trade contractors, or professional practices, our SEO Growth package at £499/month is our most popular tier. For ambitious multi-service firms or county-wide domination, our SEO Authority package at £799/month accelerates ranking velocity and content production across Hampshire.',
    },
    {
      q: 'When can we expect a positive return on our SEO investment (ROI)?',
      a: 'Most clients begin seeing noticeable impression and ranking velocity within 60 to 90 days. Because high-intent commercial leads convert at higher rates than cold ads, securing top-3 rankings for 3 to 5 core transactional terms typically pays for the retainer multiple times over within months 4 to 6.',
    },
    {
      q: 'Are there any hidden setup fees or link-buying charges?',
      a: 'No hidden fees whatsoever. All technical auditing, on-page optimization, content production, citation submissions, and legitimate outreach are fully included within the fixed monthly retainer.',
    },
    {
      q: 'Can we upgrade or downgrade our package as our business scales?',
      a: 'Yes. You can adjust your tier at the end of any monthly sprint with 14 days notice, depending on your seasonal capacity or growth targets.',
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
          'name': 'SEO Packages & Pricing',
          'item': 'https://southamptonseo.agency/seo-pricing-packages/',
        },
      ],
    },
    {
      '@type': 'Service',
      'name': 'SEO Packages & Pricing Southampton',
      'serviceType': 'SEO Retainers and Pricing',
      'provider': {
        '@type': 'Organization',
        'name': 'Southampton SEO',
        'url': 'https://southamptonseo.agency/',
      },
      'offers': PRICING_PACKAGES.map((pkg: PricingPackage) => ({
        '@type': 'Offer',
        'name': pkg.name,
        'price': pkg.price.replace('£', '').replace(',', ''),
        'priceCurrency': 'GBP',
        'description': pkg.tagline,
        'url': 'https://southamptonseo.agency/seo-pricing-packages/',
      })),
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
        title="SEO Packages & Pricing Southampton | Transparent Monthly Retainers"
        description="Transparent, ROI-driven SEO packages for Southampton and Hampshire businesses from £299/mo. No lock-in contracts, no hidden fees, 100% white-hat organic search results."
        canonicalUrl="https://southamptonseo.agency/seo-pricing-packages/"
        schema={schema}
        keywords={[
          'seo packages near southampton',
          'affordable seo southampton',
          'seo pricing southampton',
          'seo cost southampton',
          'affordable seo services near me',
          'best seo packages hampshire',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <PageBreadcrumb items={[{ label: 'SEO Packages & Pricing' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <Coins className="w-3.5 h-3.5" />
              Transparent, ROI-Focused Investment
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              SEO Packages & Pricing Southampton
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Clear, transparent monthly retainers from £299 to £799 tailored for Southampton and Hampshire businesses. No hidden costs, no 12-month lock-ins, and zero generic marketing fluff.
            </p>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg: PricingPackage) => (
              <div
                key={pkg.id}
                id={`page-pricing-${pkg.id}`}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  pkg.popular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 ring-4 ring-blue-600/10 lg:-translate-y-2'
                    : 'bg-white border border-gray-200/90 shadow-xs hover:border-blue-200 hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{pkg.name}</h2>
                    {!pkg.popular && (
                      <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-200/80">
                    <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">{pkg.period}</span>
                  </div>

                  <div className="mb-6 p-3 rounded-lg bg-blue-50/50 border border-blue-100/60 text-xs text-blue-950">
                    <strong className="text-blue-900">Best For: </strong>
                    <span>{pkg.idealFor}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                      Included Campaign Features:
                    </div>
                    <ul className="space-y-2.5 text-xs text-gray-600">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.deliverables && pkg.deliverables.length > 0 && (
                    <div className="border-t border-gray-100 pt-5 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                        Monthly Key Deliverables:
                      </div>
                      <ul className="space-y-2 text-xs text-gray-600">
                        {pkg.deliverables.map((d, di) => (
                          <li key={di} className="flex items-start gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <button
                    onClick={handleOpenAudit}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gray-900 hover:bg-black text-white shadow-xs'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center mt-2.5 text-[11px] text-gray-400 font-medium">
                    Rolling monthly agreement • No long-term lock-in
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Terms & Comparison Toggle */}
          <div className="mt-12 p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>Zero Long-Term Lock-In:</strong> All Southampton SEO packages operate on transparent monthly rolling agreements with no setup fees.
              </span>
            </div>
            <button
              onClick={() => setShowComparison(!showComparison)}
              type="button"
              className="shrink-0 font-bold text-blue-600 hover:text-blue-700 underline cursor-pointer"
            >
              {showComparison ? 'Hide Feature Comparison' : 'Show Detailed Feature Comparison'}
            </button>
          </div>

          {/* Detailed Package Comparison Matrix */}
          {showComparison && (
            <div id="page-package-comparison-table" className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Detailed Feature & Deliverable Comparison
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Side-by-side comparison across all three Southampton SEO tiers
                </p>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-xs bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 w-2/5">Feature & Deliverable</th>
                      <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 text-center w-1/5">
                        <div>Starter</div>
                        <div className="text-xs font-normal text-gray-500">£299/mo</div>
                      </th>
                      <th className="p-4 sm:p-5 text-sm font-bold text-blue-600 text-center bg-blue-50/50 w-1/5 border-x border-blue-100">
                        <div className="flex items-center justify-center gap-1">
                          <span>Growth</span>
                          <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.2 rounded-full uppercase font-semibold">Popular</span>
                        </div>
                        <div className="text-xs font-normal text-blue-700">£499/mo</div>
                      </th>
                      <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 text-center w-1/5">
                        <div>Authority</div>
                        <div className="text-xs font-normal text-gray-500">£799/mo</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                    {PRICING_COMPARISON_ROWS.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-gray-800">
                          <span>{row.feature}</span>
                        </td>
                        
                        {/* Starter */}
                        <td className="p-4 sm:p-5 text-center text-gray-600">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-medium">{row.starter}</span>
                          )}
                        </td>

                        {/* Growth (Highlighted) */}
                        <td className="p-4 sm:p-5 text-center bg-blue-50/30 border-x border-blue-100 text-gray-900 font-semibold">
                          {typeof row.growth === 'boolean' ? (
                            row.growth ? (
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-blue-950 font-bold">{row.growth}</span>
                          )}
                        </td>

                        {/* Authority */}
                        <td className="p-4 sm:p-5 text-center text-gray-600">
                          {typeof row.authority === 'boolean' ? (
                            row.authority ? (
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-medium">{row.authority}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Feature Cards */}
              <div className="md:hidden space-y-3">
                {PRICING_COMPARISON_ROWS.map((row, rIdx) => (
                  <div key={rIdx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                    <div className="font-bold text-gray-900 text-xs mb-2">{row.feature}</div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-gray-400 font-medium mb-1">Starter (£299)</div>
                        <div>
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                          ) : row.starter}
                        </div>
                      </div>
                      <div className="text-center bg-blue-50/60 p-1 rounded-md border border-blue-100">
                        <div className="text-blue-700 font-bold mb-1">Growth (£499)</div>
                        <div className="text-blue-950 font-bold">
                          {typeof row.growth === 'boolean' ? (
                            row.growth ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                          ) : row.growth}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 font-medium mb-1">Authority (£799)</div>
                        <div>
                          {typeof row.authority === 'boolean' ? (
                            row.authority ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                          ) : row.authority}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bespoke Enterprise Banner */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Need a bespoke enterprise or multi-location package?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-xl">
                For e-commerce catalogs with 5,000+ SKUs, multi-branch healthcare or legal groups, or nationwide brands headquartered in Southampton, we engineer tailored scopes.
              </p>
            </div>
            <button
              onClick={handleOpenStrategy}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shrink-0 transition-colors cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                SEO Pricing & Contract FAQs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Clear answers regarding investment levels, billing terms, and returns.
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
          currentPage="/seo-pricing-packages/"
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
