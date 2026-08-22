import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenAudit: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenAudit }) => {
  return (
    <div
      id="sticky-mobile-cta"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-lg transition-transform"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href="#pricing"
          id="mobile-sticky-pricing-btn"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
        >
          <Tag className="w-3.5 h-3.5 text-blue-600" />
          <span>View Pricing</span>
        </a>
        <button
          onClick={onOpenAudit}
          type="button"
          id="mobile-sticky-audit-btn"
          className="flex-2 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-xs transition-colors"
        >
          <span>Get Free SEO Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
