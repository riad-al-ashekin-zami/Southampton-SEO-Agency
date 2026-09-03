import React from 'react';
import { Search, MapPin, ArrowUp, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/seoData';
import { navigateTo } from '../utils/navigation';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHashLink = (hash: string, event: React.MouseEvent) => {
    const isRoot = window.location.pathname === '/' || window.location.pathname === '';
    if (isRoot) {
      event.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateTo('/' + hash, event);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Col & Verified NAP */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => navigateTo('/', e)}
              className="flex items-center gap-3 group focus:outline-hidden"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-tight">
                  Southampton<span className="text-blue-400">SEO</span>
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {BRAND.name}
                </span>
              </div>
            </a>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Specialist organic search engine optimisation, technical site audits, and local Google Maps campaigns for Southampton and Hampshire businesses.
            </p>

            {/* Verified NAP Details */}
            <div className="pt-2 space-y-2.5 text-xs text-gray-300 border-t border-gray-900/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">{BRAND.name}</strong>
                  {BRAND.address.formatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-white font-semibold">
                  {BRAND.phone} ({BRAND.phoneDisplay})
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BRAND.hours} ({BRAND.hoursShort})</span>
              </div>

              {/* Google Business Profile Trust Link */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-blue-400 hover:text-blue-300 border border-gray-800 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* SEO Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              SEO Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/seo-services-southampton/"
                  onClick={(e) => navigateTo('/seo-services-southampton/', e)}
                  className="hover:text-white transition-colors"
                >
                  SEO Services Southampton
                </a>
              </li>
              <li>
                <a
                  href="/seo-consultant-southampton/"
                  onClick={(e) => navigateTo('/seo-consultant-southampton/', e)}
                  className="hover:text-white transition-colors"
                >
                  SEO Consultant Southampton
                </a>
              </li>
              <li>
                <a
                  href="/local-seo-southampton/"
                  onClick={(e) => navigateTo('/local-seo-southampton/', e)}
                  className="hover:text-white transition-colors"
                >
                  Local SEO & Maps 3-Pack
                </a>
              </li>
              <li>
                <a
                  href="/seo-pricing-packages/"
                  onClick={(e) => navigateTo('/seo-pricing-packages/', e)}
                  className="hover:text-white transition-colors"
                >
                  SEO Pricing & Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Locations & Silos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Hampshire Locations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => navigateTo('/', e)}
                  className="hover:text-white transition-colors"
                >
                  Southampton (HQ)
                </a>
              </li>
              <li>
                <a
                  href="/seo-eastleigh/"
                  onClick={(e) => navigateTo('/seo-eastleigh/', e)}
                  className="hover:text-white transition-colors"
                >
                  SEO Services Eastleigh
                </a>
              </li>
              <li>
                <a
                  href="/seo-agency-hampshire/"
                  onClick={(e) => navigateTo('/seo-agency-hampshire/', e)}
                  className="hover:text-white transition-colors"
                >
                  SEO Agency Hampshire
                </a>
              </li>
              <li>
                <a
                  href="/partners/"
                  onClick={(e) => navigateTo('/partners/', e)}
                  className="hover:text-white transition-colors"
                >
                  Partner Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Next Steps
            </h4>
            <div className="space-y-3">
              <button
                onClick={onOpenAudit}
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors text-center shadow-xs"
              >
                Free SEO Audit
              </button>
              
              <div className="pt-2 text-xs space-y-1.5">
                <button
                  onClick={onOpenPrivacy}
                  type="button"
                  className="block text-gray-400 hover:text-white text-left transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={onOpenTerms}
                  type="button"
                  className="block text-gray-400 hover:text-white text-left transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {BRAND.name} ({BRAND.domain}). All rights reserved. Specialist UK SEO Consultancy.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 px-3 py-1.5 rounded-md border border-gray-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
