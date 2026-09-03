import React from 'react';
import { ArrowRight, MapPin, Sparkles, Shield, Compass } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

interface RelatedPagesProps {
  currentPage: string;
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const RelatedPagesSection: React.FC<RelatedPagesProps> = ({
  currentPage,
  onOpenAudit,
  onOpenStrategy,
}) => {
  const servicePages = [
    {
      title: 'SEO Services Southampton',
      path: '/seo-services-southampton/',
      desc: 'Full-suite organic search campaigns including technical, content, and on-page optimization.',
      tag: 'Core Hub',
    },
    {
      title: 'SEO Consultant Southampton',
      path: '/seo-consultant-southampton/',
      desc: 'Senior-level SEO consultancy, technical audits, and commercial strategy roadmaps.',
      tag: 'Advisory',
    },
    {
      title: 'Local SEO Southampton',
      path: '/local-seo-southampton/',
      desc: 'Google Maps 3-Pack, local business citations, and geo-targeted ranking dominance.',
      tag: 'Local Maps',
    },
    {
      title: 'SEO Packages & Pricing',
      path: '/seo-pricing-packages/',
      desc: 'Transparent pricing retainers for local businesses, growth enterprises, and market leaders.',
      tag: 'Pricing',
    },
  ];

  const locationPages = [
    {
      title: 'SEO Agency Southampton',
      path: '/',
      desc: 'Our headquarters and primary service hub for Southampton city businesses.',
    },
    {
      title: 'SEO Services Eastleigh',
      path: '/seo-eastleigh/',
      desc: 'Dedicated SEO for businesses, retail hubs, and industrial parks in Eastleigh & Boyatt Wood.',
    },
    {
      title: 'SEO Agency Hampshire',
      path: '/seo-agency-hampshire/',
      desc: 'County-wide SEO strategies across Portsmouth, Winchester, Basingstoke, and Hampshire.',
    },
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Explore Specialist SEO Services & Hampshire Locations
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connected search engine optimization services tailored for local Hampshire enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicePages
            .filter((p) => p.path !== currentPage)
            .map((page) => (
              <a
                key={page.path}
                href={page.path}
                onClick={(e) => navigateTo(page.path, e)}
                className="group block p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {page.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {page.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-blue-600">
                  <span>View service details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </a>
            ))}
        </div>

        {/* Location Crosslinks */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Hampshire Geographic Coverage</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {locationPages
              .filter((p) => p.path !== currentPage)
              .map((loc) => (
                <a
                  key={loc.path}
                  href={loc.path}
                  onClick={(e) => navigateTo(loc.path, e)}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all group"
                >
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                    {loc.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {loc.desc}
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-white">
              Ready to grow your search visibility in Hampshire?
            </h3>
            <p className="text-blue-100 text-sm mt-1 max-w-xl">
              Get a comprehensive, data-backed organic search audit highlighting your site’s crawl errors, keyword gaps, and competitor vulnerabilities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenAudit}
              type="button"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-xs"
            >
              Get Free SEO Audit
            </button>
            <button
              onClick={onOpenStrategy}
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all border border-blue-500"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
