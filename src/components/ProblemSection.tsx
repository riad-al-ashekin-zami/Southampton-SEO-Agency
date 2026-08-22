import React from 'react';
import { ArrowRight, AlertCircle, TrendingDown, EyeOff, FileWarning, SearchX, HelpCircle, XCircle } from 'lucide-react';
import { PROBLEMS } from '../data/seoData';

interface ProblemSectionProps {
  onOpenAudit: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAudit }) => {
  const problemIcons = [
    TrendingDown,
    EyeOff,
    SearchX,
    FileWarning,
    AlertCircle,
    HelpCircle,
  ];

  return (
    <section
      id="problem-section"
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-red-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <XCircle className="w-3.5 h-3.5" />
            <span>Search Obstacles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            Is Your Business Invisible on Google?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Most Southampton business owners know their services are superior to the competition, yet their website
            remains trapped on page 2 or 3 of Google. When your site is invisible to active local buyers, your
            competitors win the phone calls and contracts.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROBLEMS.map((problem, index) => {
            const Icon = problemIcons[index % problemIcons.length];
            return (
              <div
                key={problem.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2.5">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-50 flex items-center gap-2 text-xs font-semibold text-red-700">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{problem.symptom}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Persuasive Summary & CTA matching dark Professional Polish container */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl font-semibold text-gray-100 leading-snug mb-2">
              We identify what's holding your website back and build a strategy around the opportunities that matter most to your business.
            </p>
            <p className="text-sm text-gray-400">
              No guesswork. Just a forensic review of your technical health, keyword gaps, and competitor vulnerabilities.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            id="problem-find-out-cta"
            type="button"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-md active:scale-[0.99] focus:outline-hidden"
          >
            <span>Find Out What's Holding You Back</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
