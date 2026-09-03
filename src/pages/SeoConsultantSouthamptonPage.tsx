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
  UserCheck,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  Shield,
  Target,
  FileCheck2,
  Sparkles,
  Clock,
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export const SeoConsultantSouthamptonPage: React.FC = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  const faqs = [
    {
      q: 'What does a Southampton SEO consultant do differently than an agency?',
      a: 'When you hire an SEO consultant, you get direct, hands-on access to a senior practitioner with deep technical and commercial expertise. Unlike traditional agencies where accounts are passed to junior coordinators, a consultant personally conducts your audits, defines your roadmaps, and speaks directly with your leadership and developers.',
    },
    {
      q: 'Can an SEO consultant work with our in-house marketing team or web developer?',
      a: 'Absolutely. Many of our Southampton consulting engagements involve guiding existing internal marketing teams or web developers. We deliver prioritized technical action tickets, provide code-level remediation guidelines, and train your staff on organic content creation and semantic SEO.',
    },
    {
      q: 'Do you help with website migrations or sudden Google traffic drops?',
      a: 'Yes. Algorithmic penalty recovery, core update diagnostic reviews, and domain/CMS migrations (e.g. migrating to Next.js, Shopify, or WordPress) are key consulting specialties. We preserve existing rankings and canonical signals to prevent disastrous traffic cliffs.',
    },
    {
      q: 'How are SEO consulting services structured?',
      a: 'We offer two primary models: (1) A one-off Comprehensive Forensic Audit & 90-Day Execution Blueprint, or (2) A dedicated monthly strategic advisory retainer with weekly/fortnightly advisory calls, sprint reviews, and ongoing performance oversight.',
    },
    {
      q: 'Can you consult on B2B and niche regional Hampshire businesses?',
      a: 'Yes. We frequently consult with maritime logistics, professional services, manufacturing, tech startups, healthcare clinics, and regional B2B suppliers across Southampton and Hampshire where search volume is niche but customer lifetime value is exceptionally high.',
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
          'name': 'SEO Consultant Southampton',
          'item': 'https://southamptonseo.agency/seo-consultant-southampton/',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      'name': 'SEO Consultant Southampton',
      'description':
        'Senior SEO consultancy and technical search strategy in Southampton. Direct senior specialist guidance, site audits, and bespoke commercial roadmaps.',
      'url': 'https://southamptonseo.agency/seo-consultant-southampton/',
      'areaServed': [
        { '@type': 'City', 'name': 'Southampton' },
        { '@type': 'AdministrativeArea', 'name': 'Hampshire' },
      ],
      'provider': {
        '@type': 'Organization',
        'name': 'Southampton SEO',
        'url': 'https://southamptonseo.agency/',
      },
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
        title="SEO Consultant Southampton | Senior SEO Consultancy & Strategy"
        description="Senior SEO consultant in Southampton providing forensic technical audits, commercial search roadmaps, and direct expert advisory. No middlemen or bloated retainers."
        canonicalUrl="https://southamptonseo.agency/seo-consultant-southampton/"
        schema={schema}
        keywords={[
          'seo consultant southampton',
          'seo consultancy southampton',
          'seo consultants southampton',
          'seo expert southampton',
          'southampton seo consultant',
          'seo specialist southampton',
        ]}
      />

      <Header onOpenAudit={handleOpenAudit} onOpenStrategy={handleOpenStrategy} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb Navigation */}
        <PageBreadcrumb items={[{ label: 'SEO Consultant Southampton' }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              Direct Senior Practitioner
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              SEO Consultant Southampton
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Cut through agency bureaucracy. Work directly with a senior Southampton SEO consultant who delivers actionable technical roadmaps, fixes ranking drops, and helps your in-house team drive high-converting organic revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenStrategy}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xs transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Consultant Consultation</span>
              </button>
              <button
                onClick={handleOpenAudit}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 transition-all"
              >
                Request Forensic Audit
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Zero</div>
                <div className="text-xs text-gray-500 mt-0.5">Account Manager Middlemen</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Senior</div>
                <div className="text-xs text-gray-500 mt-0.5">Hands-On Execution</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">Commercial</div>
                <div className="text-xs text-gray-500 mt-0.5">ROI & Revenue Aligned</div>
              </div>
            </div>
          </div>
        </section>

        {/* Agency vs Consultant Comparison */}
        <section className="py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                When Should You Hire an SEO Consultant Instead of an Agency?
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Traditional agencies often sell you on the senior founder during the pitch, then pass your account to a junior coordinator. Consulting offers a transparent alternative designed for businesses that value speed, direct communication, and deep expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Agency */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-500 uppercase tracking-wider text-xs mb-3">
                  Traditional Agency Model
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Bureaucratic & High Overhead
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>Account manager acts as a filter between you and the actual SEO specialist.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>Rigid 12-month retainers paying for bloated agency overhead and sales commissions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>Generic, templated monthly PDF reports filled with vanity ranking metrics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>Slow turnaround times on technical implementations and urgent algorithm fixes.</span>
                  </li>
                </ul>
              </div>

              {/* Dedicated Consultant */}
              <div className="p-6 rounded-2xl bg-blue-50/60 border-2 border-blue-200">
                <div className="font-bold text-blue-600 uppercase tracking-wider text-xs mb-3">
                  Dedicated Southampton SEO Consultant
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Agile, Strategic & Senior-Led
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Direct practitioner access:</strong> Talk directly with the strategist who actually analyzes your code and data.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Custom sprint roadmaps:</strong> Focused purely on high-margin Southampton commercial keywords and technical fixes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Empowers your internal team:</strong> Provides clear technical tickets, developer specs, and content briefings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Transparent flexible engagements:</strong> Monthly advisory retainers or intensive fixed-scope audits.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Engagement Models */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Southampton SEO Consultancy Engagements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Choose the level of consulting guidance that matches your company's internal capabilities and growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Model 1 */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  Fixed Scope
                </div>
                <h3 className="text-xl font-bold text-gray-900">Forensic SEO Audit & Blueprint</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A deep-dive technical, architectural, and competitive audit of your website with a prioritized 90-day execution checklist.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Full crawl & Core Web Vitals diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Southampton competitor gap analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>60-min recorded strategy debrief</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleOpenAudit}
                className="mt-6 w-full py-2.5 px-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Inquire About Audit
              </button>
            </div>

            {/* Model 2 */}
            <div className="p-6 bg-white rounded-xl border-2 border-blue-600 shadow-sm relative flex flex-col justify-between">
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  Monthly Advisory
                </div>
                <h3 className="text-xl font-bold text-gray-900">Strategic SEO Retainer</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Ongoing senior counsel to drive monthly organic traffic sprints, oversee implementation, and guide marketing teams.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Fortnightly strategic direction calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Technical specs & developer code reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Keyword rank tracking & monthly executive brief</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleOpenStrategy}
                className="mt-6 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Discuss Advisory Retainer
              </button>
            </div>

            {/* Model 3 */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  High-Stakes
                </div>
                <h3 className="text-xl font-bold text-gray-900">Migration & Penalty Recovery</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Specialist intervention for sudden Google algorithmic traffic drops, manual actions, or replatforming migrations.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Pre-launch 1:1 301 redirect mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Algorithmic core update recovery analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Emergency indexation fixes</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleOpenStrategy}
                className="mt-6 w-full py-2.5 px-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Schedule Migration Review
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Southampton SEO Consultant FAQs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Frequently asked questions about working directly with an SEO consultant in Southampton.
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
          currentPage="/seo-consultant-southampton/"
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
