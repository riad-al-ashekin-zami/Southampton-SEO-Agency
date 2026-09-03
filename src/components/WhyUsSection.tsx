import React from 'react';
import {
  Compass,
  TrendingUp,
  Eye,
  Cpu,
  MapPin,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { DIFFERENTIATORS } from '../data/seoData';

interface WhyUsSectionProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenAudit, onOpenStrategy }) => {
  const icons = [Compass, TrendingUp, Eye, Cpu, MapPin, MessageSquare];

  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Commercial Distinction
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            Why Choose Southampton SEO?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Finding the right SEO partner shouldn't mean sifting through agency hype, buzzwords, or lock-in retainers.
            We earn our reputation through disciplined strategic execution, deep technical competence, and an unwavering
            focus on commercial business outcomes.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="bg-[#F9FAFB] rounded-2xl p-7 border border-gray-200/80 hover:border-blue-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-700 mb-3 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Practical Hampshire Consultancy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Honest SEO Partnership</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Meaningless SEO Jargon. Just Clear Commercial Strategy.
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              We discuss your market share, customer acquisition costs, and high-margin services in plain English — ensuring
              every optimization contributes directly to your bottom line.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenStrategy}
              type="button"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs"
            >
              Book Consultation
            </button>
            <button
              onClick={onOpenAudit}
              type="button"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-xs"
            >
              Get Your Free SEO Audit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
