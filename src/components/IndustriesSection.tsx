import React from 'react';
import {
  Briefcase,
  Scale,
  Wrench,
  Stethoscope,
  Building2,
  Factory,
  Utensils,
  ShoppingBag,
  Store,
  ArrowRight,
  Search,
} from 'lucide-react';
import { INDUSTRIES } from '../data/seoData';

interface IndustriesSectionProps {
  onOpenAudit: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenAudit }) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'professional-services':
        return Briefcase;
      case 'legal':
        return Scale;
      case 'trades-home-services':
        return Wrench;
      case 'healthcare-private-medical':
        return Stethoscope;
      case 'property-estate':
        return Building2;
      case 'b2b-businesses':
        return Factory;
      case 'hospitality-venues':
        return Utensils;
      case 'ecommerce':
        return ShoppingBag;
      case 'local-businesses':
        return Store;
      default:
        return Briefcase;
    }
  };

  return (
    <section
      id="industries"
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Target Sectors
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            SEO for Southampton Businesses
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Every sector has unique customer buying cycles and search habits. We customize our keyword strategies,
            content architecture, and schema markup to capture commercial intent across key Southampton industries.
          </p>
        </div>

        {/* Industries 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INDUSTRIES.map((ind) => {
            const Icon = getIndustryIcon(ind.id);
            return (
              <div
                key={ind.id}
                className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-[11px] font-semibold text-gray-500 mb-1.5 flex items-center gap-1">
                    <Search className="w-3 h-3 text-blue-600" />
                    <span>Commercial Search Targets:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.commonKeywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="text-[11px] bg-blue-50/70 text-blue-800 px-2 py-0.5 rounded-md font-mono"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry audit callout */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Don't see your specific niche? We adapt our search intent framework to any competitive commercial market in Hampshire.
          </p>
          <button
            onClick={onOpenAudit}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
          >
            <span>Request an industry-specific keyword audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
