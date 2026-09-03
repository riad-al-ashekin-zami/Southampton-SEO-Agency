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
  MapPin,
  Phone,
  Clock,
  ExternalLink,
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

          {/* Right Card: Verified Google Business Profile & NAP Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F9FAFB] border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-xs relative">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-gray-200">
                <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  <span>S</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Google Verified
                    </span>
                    <span className="text-[10px] text-gray-500">Local Business</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {BRAND.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-700">
                    {BRAND.category}
                  </p>
                </div>
              </div>

              {/* Exact NAP Information */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-700 mb-6 bg-white p-4 rounded-xl border border-gray-200/70">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-gray-900 font-semibold block">Business Address:</strong>
                    {BRAND.address.formatted}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    <strong className="text-gray-900 font-semibold mr-1.5">Direct Line:</strong>
                    <span className="text-gray-900 font-semibold">
                      {BRAND.phone} ({BRAND.phoneDisplay})
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    <strong className="text-gray-900 font-semibold mr-1.5">Opening Hours:</strong>
                    {BRAND.hours} ({BRAND.hoursShort})
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Google Verified Business Profile
                  </span>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consistent local NAP across citations and Google Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Direct consulting with senior SEO strategists</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  onClick={onOpenStrategy}
                  type="button"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-colors shadow-2xs"
                >
                  Book Consultation
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
