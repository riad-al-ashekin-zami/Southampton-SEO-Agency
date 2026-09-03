import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit, onOpenStrategy }) => {
  return (
    <section
      id="final-cta"
      className="py-16 sm:py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/60 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take the Next Step</span>
        </div>

        {/* H2 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Ready to Get More From Google?
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's identify your biggest SEO opportunities and build a strategy designed around your business.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenAudit}
            id="final-cta-audit-btn"
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-950/30 transition-all active:scale-[0.99] focus:outline-hidden"
          >
            <span>Get Your Free SEO Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenStrategy}
            id="final-cta-strategy-btn"
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-800 text-white border border-gray-700 font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-xs transition-all active:scale-[0.99] focus:outline-hidden"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span>Book a Consultation</span>
          </button>
        </div>

        {/* Guarantees row */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>No Long-Term Binding Contracts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Southampton & Hampshire Focused</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Commercial Lead Generation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
