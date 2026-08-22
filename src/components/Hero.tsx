import React, { useState } from 'react';
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  Search,
  MapPin,
  BarChart3,
  Globe,
  Award,
  Sparkles,
  Zap,
  ChevronUp,
} from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenStrategy }) => {
  const [activeQuery, setActiveQuery] = useState<'commercial' | 'legal' | 'local'>('commercial');

  const queryExamples = {
    commercial: {
      query: 'commercial electrician southampton',
      location: 'Southampton, Hampshire',
      rank: 'Position #1',
      change: '+4 positions',
      monthlyVolume: '480 /mo',
      ctr: '34.2%',
      intent: 'High Commercial',
      url: 'https://client-example.co.uk/commercial-electrician-southampton',
      title: 'Commercial Electrical Services Southampton | NICEIC Certified Contractors',
      snippet:
        'Specialist commercial electrical installations, testing, and 24/7 maintenance for Southampton, Eastleigh, and Hampshire businesses.',
    },
    legal: {
      query: 'solicitors southampton commercial law',
      location: 'Southampton Central & Hampshire',
      rank: 'Position #1 (Local 3-Pack & Organic)',
      change: '+6 positions',
      monthlyVolume: '590 /mo',
      ctr: '38.6%',
      intent: 'Transactional',
      url: 'https://client-example.co.uk/commercial-law-solicitors-southampton',
      title: 'Commercial Law Solicitors Southampton | Expert Legal Advice & Contracts',
      snippet:
        'Award-winning corporate and commercial dispute solicitors in Southampton. Trusted legal advisors for Hampshire enterprises.',
    },
    local: {
      query: 'best seo agency southampton',
      location: 'Southampton SO14, Hampshire',
      rank: 'Position #1',
      change: 'Market Leader',
      monthlyVolume: '720 /mo cluster',
      ctr: '41.1%',
      intent: 'Direct B2B Enquiry',
      url: 'https://southamptonseo.agency/',
      title: 'SEO Agency Southampton | Southampton SEO Agency & Consultancy',
      snippet:
        'Specialist SEO agency helping Southampton and Hampshire businesses increase Google visibility, qualified traffic, enquiries and revenue.',
    },
  };

  const currentExample = queryExamples[activeQuery];

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-gray-100"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#2563EB 1px, transparent 1px), radial-gradient(#2563EB 1px, #FFFFFF 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Market Badge */}
            <div className="inline-block px-3.5 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
              Specialist UK Agency • Southampton & Hampshire
            </div>

            {/* Primary H1 - Strict and exact */}
            <h1
              id="main-h1"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              SEO Agency Southampton
            </h1>

            {/* Core Supporting Copy */}
            <p className="text-xl sm:text-2xl font-semibold text-gray-700 leading-snug">
              Helping Hampshire businesses grow visibility, traffic, and enquiries through specialist search strategy.
            </p>

            {/* Detailed Services Summary */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              We engineer proven, organic growth systems tailored specifically for UK businesses. From dominant{' '}
              <strong className="text-gray-900 font-semibold">Local SEO</strong> and technical crawlability to bespoke{' '}
              <strong className="text-gray-900 font-semibold">SEO Strategy</strong>, high-intent{' '}
              <strong className="text-gray-900 font-semibold">Content SEO</strong>, and{' '}
              <strong className="text-gray-900 font-semibold">Google Business Profile optimization</strong> — we turn
              search intent into measurable revenue.
            </p>

            {/* CTAs Row */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenAudit}
                id="hero-primary-audit-cta"
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-black text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-gray-200 transition-all active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <span>Get Your Free SEO Audit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#pricing"
                id="hero-secondary-pricing-cta"
                className="inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-base px-6 py-3.5 rounded-xl shadow-xs transition-all active:scale-[0.99] focus:outline-hidden"
              >
                <span>View SEO Pricing</span>
              </a>

              <button
                onClick={onOpenStrategy}
                id="hero-tertiary-strategy-cta"
                type="button"
                className="inline-flex items-center justify-center gap-1.5 text-gray-600 hover:text-gray-900 font-semibold text-sm px-3 py-2 transition-colors focus:outline-hidden"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Book Call</span>
              </button>
            </div>

            {/* Subtle Trust & Value Pillar Row */}
            <div className="w-full pt-4 border-t border-gray-100 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-1.5 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Local SEO</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Technical SEO</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>SEO Strategy</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Content SEO</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Google Business Profile</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Illustrative Search & Performance Simulation */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-inner p-6 overflow-hidden">
              
              {/* Illustrative Label Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-bold text-gray-600 ml-1 tracking-wide">
                    Google Search Simulation
                  </span>
                </div>
                <span className="text-[11px] font-semibold bg-white text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-100 shadow-2xs">
                  UK SERP Demo
                </span>
              </div>

              {/* Interactive Search Intent Tabs */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-500 mb-2">Select Southampton Search Sector:</div>
                <div className="grid grid-cols-3 gap-1.5 bg-gray-200/70 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveQuery('commercial')}
                    type="button"
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeQuery === 'commercial'
                        ? 'bg-white text-blue-600 font-bold shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Commercial Trade
                  </button>
                  <button
                    onClick={() => setActiveQuery('legal')}
                    type="button"
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeQuery === 'legal'
                        ? 'bg-white text-blue-600 font-bold shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Professional Firm
                  </button>
                  <button
                    onClick={() => setActiveQuery('local')}
                    type="button"
                    className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all ${
                      activeQuery === 'local'
                        ? 'bg-white text-blue-600 font-bold shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    SEO Agency
                  </button>
                </div>
              </div>

              {/* Google Search Bar Mockup */}
              <div className="bg-white border border-gray-200 rounded-lg p-2.5 mb-4 flex items-center gap-2.5 shadow-xs">
                <Search className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="flex-1 font-medium text-xs text-gray-700 truncate font-mono">
                  google.co.uk/search?q={encodeURIComponent(currentExample.query)}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-semibold shrink-0">
                  <MapPin className="w-3 h-3" />
                  <span>Southampton</span>
                </div>
              </div>

              {/* Simulated Google Search Result with professional blue bar */}
              <div className="bg-white border-l-4 border-blue-500 rounded-lg p-4 mb-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-1.5 text-xs text-gray-500">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span className="truncate text-gray-800 font-medium">{currentExample.url}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-blue-600 hover:underline cursor-pointer leading-snug mb-1.5">
                  {currentExample.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {currentExample.snippet}
                </p>

                {/* Sitelinks simulation */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-[11px]">
                  <div className="text-blue-600 font-semibold hover:underline">
                    • Southampton Commercial Quote
                  </div>
                  <div className="text-blue-600 font-semibold hover:underline">
                    • 24/7 Hampshire Coverage
                  </div>
                </div>
              </div>

              {/* Simulated SEO Ranking & KPI Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Rank Status</div>
                  <div className="text-xs sm:text-sm font-extrabold text-blue-600 flex items-center gap-1 mt-0.5">
                    <ChevronUp className="w-3.5 h-3.5 text-green-600" />
                    <span>Pos #1</span>
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Est. CTR</div>
                  <div className="text-xs sm:text-sm font-extrabold text-gray-900 mt-0.5">
                    {currentExample.ctr}
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Search Intent</div>
                  <div className="text-xs sm:text-sm font-extrabold text-gray-900 mt-0.5">
                    Commercial
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Core Web Vitals</div>
                  <div className="text-xs sm:text-sm font-extrabold text-green-600 flex items-center gap-1 mt-0.5">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <span>99/100</span>
                  </div>
                </div>
              </div>

              {/* Growth Bars Simulation matching the Professional Polish mockup */}
              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-end justify-between gap-3 px-2">
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Organic Trajectory</div>
                  <div className="flex items-end gap-2 h-14 pt-2">
                    <div className="h-6 flex-1 bg-blue-100 rounded-t-md"></div>
                    <div className="h-9 flex-1 bg-blue-300 rounded-t-md"></div>
                    <div className="h-12 flex-1 bg-blue-500 rounded-t-md"></div>
                    <div className="h-14 flex-1 bg-blue-600 rounded-t-md"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Organic Growth Card */}
            <div className="absolute -bottom-3 -right-3 bg-white p-3.5 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="text-xs text-gray-500 font-bold">Organic Growth</div>
              <div className="text-2xl font-bold text-green-600">+248%</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
