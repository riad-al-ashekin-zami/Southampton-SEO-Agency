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

  // If visiting an unknown subpage that isn't root
  const is404 =
    currentPath !== '/' &&
    currentPath !== '' &&
    currentPath !== '/index.html';

  if (is404) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] font-sans selection:bg-blue-600 selection:text-white pb-14 lg:pb-0">
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
