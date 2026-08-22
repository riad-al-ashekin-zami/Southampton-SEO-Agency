import React from 'react';
import {
  Compass,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Target,
} from 'lucide-react';
import { ABOUT_DATA, BRAND } from '../data/seoData';

interface AboutSectionProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenAudit,
  onOpenStrategy,
}) => {
  const pillarIcons = [Compass, FileCheck, TrendingUp, ShieldCheck];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white border-b border-gray-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Dedicated Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight mb-5">
            {ABOUT_DATA.heading}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {ABOUT_DATA.subheading}
          </p>
        </div>

        {/* Founder & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p className="text-gray-900 font-semibold text-xl leading-snug">
              {ABOUT_DATA.founderIntro}
            </p>

            <p>
              {ABOUT_DATA.philosophy}
            </p>

            <p>
              Too many Hampshire businesses have been burned by generic agencies that generate automated PDF reports while ranking for obscure, non-commercial keywords that never bring in an enquiry. We take the opposite approach: ruthless focus on <strong className="text-gray-900 font-semibold">commercial search intent</strong>, high-intent local map prominence, and code-level technical execution.
            </p>

            {/* Quick Metrics / Differentiators Pill Row */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Zero Lock-in Contracts</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Southampton & Hampshire Focused</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-gray-200 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Commercial Lead Prioritization</span>
              </div>
            </div>
          </div>

          {/* Right Card: Consultant Profile / Agency Ethos */}
          <div className="lg:col-span-5">
            <div className="bg-[#F9FAFB] border border-gray-200/80 rounded-2xl p-7 sm:p-8 shadow-xs relative">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                  <span>S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{BRAND.founderPlaceholder}</h3>
                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                    Lead SEO Consultant & Strategist
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{BRAND.experienceYearsPlaceholder}</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-700 mb-6">
                <div className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Direct consulting with senior SEO specialists, not junior account handlers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Complete white-hat compliance with Google Search Essentials and Webmaster guidelines.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Proactive monthly recommendations that drive real, measurable ROI.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  onClick={onOpenStrategy}
                  type="button"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-colors shadow-2xs"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={onOpenAudit}
                  type="button"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-colors shadow-2xs"
                >
                  Get Free SEO Audit
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* "SEO Without the Jargon" 4 Pillars Block */}
        <div className="mt-8 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Our Core Approach
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              SEO Without the Jargon
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We translate technical search mechanics into plain-English business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.pillars.map((pillar, pIdx) => {
              const Icon = pillarIcons[pIdx % pillarIcons.length];
              return (
                <div
                  key={pIdx}
                  className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200/80 hover:border-blue-200 hover:shadow-xs transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
