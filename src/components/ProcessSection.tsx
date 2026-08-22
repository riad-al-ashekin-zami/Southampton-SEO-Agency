import React from 'react';
import { ArrowRight, CheckCircle2, Search, Compass, Wrench, TrendingUp } from 'lucide-react';
import { PROCESS_STEPS } from '../data/seoData';

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  const stepIcons = [Search, Compass, Wrench, TrendingUp];

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Clear Methodology
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            How Our Southampton SEO Process Works
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We believe in structured clarity. No opaque workflows or confusing jargon. Just a disciplined 4-step
            process engineered to turn organic search into your most profitable acquisition channel.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={item.step}
                className="bg-[#F9FAFB] rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between relative group hover:border-blue-200 hover:shadow-md transition-all"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-blue-600 font-mono tracking-tighter">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 mb-3">
                    {item.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Actions list */}
                  <ul className="space-y-2 pt-4 border-t border-gray-200/60">
                    {item.actions.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <button
            onClick={onOpenAudit}
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-xs transition-all active:scale-[0.99]"
          >
            <span>Start Step 01: Get Your Free SEO Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
