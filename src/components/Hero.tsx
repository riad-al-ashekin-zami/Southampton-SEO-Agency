import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { HeroAuditForm } from './HeroAuditForm';
import { BRAND } from '../data/seoData';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenStrategy }) => {
  const scrollToForm = () => {
    const el = document.getElementById('hero-audit-form-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#2563EB 1px, transparent 1px), radial-gradient(#2563EB 1px, #FFFFFF 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Authority */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Market Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Specialist UK Agency • Southampton & Hampshire</span>
            </div>

            {/* Primary H1 - Exact and authoritative */}
            <h1
              id="main-h1"
              className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              SEO Agency Southampton
            </h1>

            {/* Core Supporting Copy */}
            <p className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
              Helping Hampshire businesses grow visibility, qualified traffic, and enquiries through specialist search strategy.
            </p>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              We engineer proven, organic growth systems tailored specifically for UK businesses. From dominant{' '}
              <strong className="text-gray-900 font-semibold">Local SEO</strong> and technical crawlability to high-intent{' '}
              <strong className="text-gray-900 font-semibold">Content Strategy</strong> and{' '}
              <strong className="text-gray-900 font-semibold">Google Business Profile optimization</strong> — we turn
              search intent into measurable revenue.
            </p>

            {/* High-Impact Proof Highlights */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">#1 Local 3-Pack Rankings</div>
                  <div className="text-[11px] text-gray-500">Targeting Southampton commercial postcodes (SO14–SO19)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">+248% Avg. Organic Growth</div>
                  <div className="text-[11px] text-gray-500">Measurable pipeline and inbound quote increases</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">100% White-Hat Systems</div>
                  <div className="text-[11px] text-gray-500">Google guideline compliant, sustainable visibility</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">No Long Retainers</div>
                  <div className="text-[11px] text-gray-500">Transparent deliverables and monthly rolling terms</div>
                </div>
              </div>
            </div>

            {/* CTAs Row & Phone direct link */}
            <div className="w-full flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToForm}
                type="button"
                className="lg:hidden inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.99]"
              >
                <span>Fill Free Audit Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 font-bold text-sm px-4 py-2.5 rounded-xl border border-gray-200 hover:border-blue-200 bg-white hover:bg-blue-50/40 transition-all"
              >
                <span>View SEO Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Business Trust Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-gray-500 border-t border-gray-100 w-full">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Google Verified Business
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">Local Business: <strong className="font-semibold text-gray-800">{BRAND.name}</strong></span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{BRAND.address.city}, {BRAND.address.postcode}</span>
            </div>

          </div>

          {/* Right Column: Exact High-Converting Hero Audit Form */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <HeroAuditForm />
          </div>

        </div>
      </div>
    </section>
  );
};
