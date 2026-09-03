import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SouthamptonSEOSection } from './components/SouthamptonSEOSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { LocalAreaSection } from './components/LocalAreaSection';
import { AboutSection } from './components/AboutSection';
import { AuditCTA } from './components/AuditCTA';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { AuditModal } from './components/AuditModal';
import { StrategyModal } from './components/StrategyModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { NotFoundPage } from './components/NotFoundPage';
import { PartnersPage } from './components/PartnersPage';
import { SeoServicesSouthamptonPage } from './pages/SeoServicesSouthamptonPage';
import { SeoConsultantSouthamptonPage } from './pages/SeoConsultantSouthamptonPage';
import { LocalSeoSouthamptonPage } from './pages/LocalSeoSouthamptonPage';
import { SeoEastleighPage } from './pages/SeoEastleighPage';
import { SeoAgencyHampshirePage } from './pages/SeoAgencyHampshirePage';
import { SeoPricingPackagesPage } from './pages/SeoPricingPackagesPage';
import { SEOHead } from './components/SEOHead';
import { BRAND } from './data/seoData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleOpenStrategy = () => setStrategyModalOpen(true);

  // Normalize path without trailing slash
  const normalizedPath = currentPath.replace(/\/$/, '') || '/';

  // Dedicated SEO Service and Location Pages
  if (normalizedPath === '/seo-services-southampton') {
    return <SeoServicesSouthamptonPage />;
  }

  if (normalizedPath === '/seo-consultant-southampton') {
    return <SeoConsultantSouthamptonPage />;
  }

  if (normalizedPath === '/local-seo-southampton') {
    return <LocalSeoSouthamptonPage />;
  }

  if (normalizedPath === '/seo-eastleigh') {
    return <SeoEastleighPage />;
  }

  if (normalizedPath === '/seo-agency-hampshire') {
    return <SeoAgencyHampshirePage />;
  }

  if (normalizedPath === '/seo-pricing-packages') {
    return <SeoPricingPackagesPage />;
  }

  // Dedicated clean Partners page
  if (normalizedPath === '/partners') {
    return <PartnersPage />;
  }

  // If visiting an unknown subpage that isn't root
  const is404 =
    normalizedPath !== '/' &&
    normalizedPath !== '/index.html';

  if (is404) {
    return <NotFoundPage />;
  }

  const homepageSchema = [
    {
      '@type': 'WebSite',
      '@id': 'https://southamptonseo.agency/#website',
      url: 'https://southamptonseo.agency/',
      name: BRAND.name,
      alternateName: BRAND.tradeName,
      description: 'Specialist SEO Agency and Internet Marketing Service in Southampton and Hampshire',
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Organization',
      '@id': 'https://southamptonseo.agency/#organization',
      name: BRAND.name,
      alternateName: BRAND.tradeName,
      url: 'https://southamptonseo.agency/',
      telephone: BRAND.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.city,
        addressRegion: 'Hampshire',
        postalCode: BRAND.address.postcode,
        addressCountry: BRAND.address.countryCode,
      },
      hasMap: BRAND.mapsUrl,
      description: 'Specialist search engine optimization agency and internet marketing service based in Southampton, Hampshire.',
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://southamptonseo.agency/#localservice',
      name: BRAND.name,
      alternateName: BRAND.tradeName,
      legalName: BRAND.legalName,
      url: 'https://southamptonseo.agency/',
      telephone: BRAND.phoneDisplay,
      image: 'https://southamptonseo.agency/og-image.svg',
      description:
        'Southampton SEO firm providing local SEO, Google Maps 3-Pack optimization, technical SEO, content strategy, and organic marketing across Southampton and Hampshire.',
      priceRange: '£299 - £799',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Bank Transfer, Credit Card, Direct Debit',
      hasMap: BRAND.mapsUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.city,
        addressRegion: 'Hampshire',
        postalCode: BRAND.address.postcode,
        addressCountry: BRAND.address.countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.9169,
        longitude: -1.3986,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
      <SEOHead
        title="SEO Agency Southampton | Southampton Seo Firm"
        description="Specialist SEO agency in Southampton and Hampshire helping businesses increase Google visibility, qualified organic traffic, enquiries and revenue."
        canonicalUrl="https://southamptonseo.agency/"
        schema={homepageSchema}
      />

      {/* 1. Sticky Header */}
      <Header
        onOpenAudit={handleOpenAudit}
        onOpenStrategy={handleOpenStrategy}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section (Strict H1: SEO Agency Southampton) */}
        <Hero
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />

        {/* 3. Core Value Trust Bar */}
        <TrustBar />

        {/* 4. Problem Section / Pain Points */}
        <ProblemSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 5. Southampton SEO Introduction */}
        <SouthamptonSEOSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 6. Services Section (6 Detailed Services with Deliverable Modals) */}
        <ServicesSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 7. Why Choose Us / Commercial Differentiators */}
        <WhyUsSection
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />

        {/* 8. 4-Step SEO Process */}
        <ProcessSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 9. Dedicated Pricing Section with Feature Comparison */}
        <PricingSection
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />

        {/* 10. Case Studies / Results Framework */}
        <CaseStudiesSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 11. Industries / Who We Help Across Southampton */}
        <IndustriesSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 12. Local Hampshire Geographic Coverage & Strategy */}
        <LocalAreaSection
          onOpenAudit={handleOpenAudit}
        />

        {/* 13. About Southampton SEO & SEO Without the Jargon */}
        <AboutSection
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />

        {/* 14. High-Conversion SEO Audit Request Form + Live Checker */}
        <AuditCTA />

        {/* 15. Comprehensive 12-Item FAQ Section */}
        <FAQSection
          onOpenStrategy={handleOpenStrategy}
        />

        {/* 16. Final CTA Banner */}
        <FinalCTA
          onOpenAudit={handleOpenAudit}
          onOpenStrategy={handleOpenStrategy}
        />
      </main>

      {/* 17. Footer */}
      <Footer
        onOpenAudit={handleOpenAudit}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* 18. Sticky Mobile Bottom Bar */}
      <StickyMobileCTA
        onOpenAudit={handleOpenAudit}
      />

      {/* Accessible Modals */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

      <StrategyModal
        isOpen={strategyModalOpen}
        onClose={() => setStrategyModalOpen(false)}
      />

      <PrivacyTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
