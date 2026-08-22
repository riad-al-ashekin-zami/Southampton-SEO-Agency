import React from 'react';
import { Search, Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/seoData';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Southampton<span className="text-blue-400">SEO</span>
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              SEO strategy, Local SEO and technical SEO for businesses in Southampton and Hampshire.
            </p>

            <div className="space-y-1.5 text-xs text-gray-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Southampton & Hampshire, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono">{BRAND.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono">{BRAND.emailPlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Local SEO Southampton</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Technical SEO Audit</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">SEO Strategy Roadmaps</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Content Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Google Business Profile</a>
              </li>
            </ul>
          </div>

          {/* Company / Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">4-Step Process</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Client Results</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">Hampshire Areas</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">SEO FAQs</a>
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors text-center"
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
