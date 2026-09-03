import React from 'react';
import { MapPin, Navigation, Compass, Globe, ArrowRight } from 'lucide-react';
import { BRAND, LOCAL_AREAS } from '../data/seoData';
import { navigateTo } from '../utils/navigation';

interface LocalAreaSectionProps {
  onOpenAudit: () => void;
}

export const LocalAreaSection: React.FC<LocalAreaSectionProps> = ({ onOpenAudit }) => {
  const getAreaLink = (name: string) => {
    if (name.includes('Eastleigh')) return '/seo-eastleigh/';
    if (name.includes('Fareham') || name.includes('Portsmouth') || name.includes('Winchester')) {
      return '/seo-agency-hampshire/';
    }
    return null;
  };

  return (
    <section
      id="areas"
      className="py-16 sm:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Hampshire Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            Serving Southampton & Hampshire
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            While our primary specialization is Southampton, our local SEO architectures help clients establish dominant
            visibility throughout key commercial and residential hubs across Hampshire.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-full text-xs text-gray-700">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>HQ & Base: <strong className="text-gray-900 font-semibold">{BRAND.address.formatted}</strong></span>
          </div>
        </div>

        {/* Local Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LOCAL_AREAS.map((area, idx) => {
            const pageLink = getAreaLink(area.name);

            return (
              <div
                key={idx}
                className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200/80 shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {area.type}
                    </span>
                    <span className="text-[11px] font-medium text-gray-500">
                      {area.distanceFromSouthampton}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{area.name}</span>
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {area.commercialContext}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>Geo-targeted Local SEO</span>
                  {pageLink && (
                    <a
                      href={pageLink}
                      onClick={(e) => navigateTo(pageLink, e)}
                      className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-0.5"
                    >
                      <span>Explore hub</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification & CTA */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              Need Multi-Location SEO Across Hampshire?
            </h4>
            <p className="text-sm text-gray-600">
              We structure clean, non-spammy service-area architecture so your business ranks in neighboring towns without risking duplicate content penalties.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            type="button"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all active:scale-[0.99]"
          >
            <span>Review Your Service Area</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
