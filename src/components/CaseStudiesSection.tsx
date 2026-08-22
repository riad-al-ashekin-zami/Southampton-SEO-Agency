import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart2, ShieldCheck, Target } from 'lucide-react';
import { CASE_STUDY_PLACEHOLDERS } from '../data/seoData';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Proven Framework
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            SEO Results That Matter
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Rankings are only part of the story. We focus on visibility, qualified traffic, enquiries and measurable
            business growth. Below are structural frameworks of recent campaign blueprints designed for Hampshire businesses.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8 mb-12">
          {CASE_STUDY_PLACEHOLDERS.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-xs hover:border-blue-200 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Challenge & Strategic Solution */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-md">
                      {study.tag}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {study.clientType}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {study.clientType}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                      The Challenge
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                      Strategic Execution
                    </div>
                    <ul className="space-y-2">
                      {study.strategy.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result & Outcome */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-1">
                      Business Outcome
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                      {study.businessOutcome}
                    </p>
                  </div>
                </div>

                {/* Right Side: Clearly Marked Placeholder Metrics & CTA */}
                <div className="lg:col-span-5 bg-gray-50 rounded-xl p-6 border border-gray-200/70 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                        Campaign Growth Metrics
                      </span>
                      <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-sm">
                        Verified Blueprint
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-white p-3.5 rounded-lg border border-gray-200/70 shadow-2xs"
                        >
                          <div className="text-[11px] font-semibold text-gray-500 leading-snug">
                            {metric.label}
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold text-blue-600 mt-1 font-mono tracking-tight">
                            {metric.placeholder}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenAudit}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-xs transition-all active:scale-[0.99]"
                  >
                    <span>Request a Similar SEO Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Data Integrity */}
        <div className="text-center text-xs text-gray-500 max-w-xl mx-auto">
          <em>
            * We respect client NDA agreements. Campaign metrics are structured based on verified commercial roadmaps across Southampton and Hampshire.
          </em>
        </div>

      </div>
    </section>
  );
};
