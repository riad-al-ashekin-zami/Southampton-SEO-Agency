import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/seoData';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 z-10 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-gray-600 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>{BRAND.name}</strong> ({BRAND.domain}) is committed to protecting your privacy in compliance
                with the UK Data Protection Act 2018 and UK GDPR.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. Data We Collect</h4>
              <p>
                When you request a free SEO audit or strategy call, we collect contact information including your name,
                business name, website URL, email address, and phone number solely to prepare and deliver your analysis.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Use of Information</h4>
              <p>
                Your data is used exclusively to conduct technical site audits, provide strategic SEO recommendations,
                and communicate directly regarding our consultancy services. We never sell, lease, or distribute your
                data to third parties.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">3. Security</h4>
              <p>
                All transmitted data is encrypted via SSL/TLS. You may request deletion or access to your submitted
                information at any time by contacting our team.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{BRAND.name}</strong> ({BRAND.domain}). By accessing this website or requesting an SEO
                audit, you agree to these terms.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. Consultative Services</h4>
              <p>
                SEO audits, initial keyword reviews, and strategy sessions provided on this website are consultative
                evaluations designed to highlight organic search opportunities in Southampton and Hampshire.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Realistic Search Expectations</h4>
              <p>
                Organic search results are influenced by search engine algorithms, competitor activity, and technical
                factors. We provide structured, ethical, white-hat SEO strategies focused on long-term commercial growth.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">3. Intellectual Property</h4>
              <p>
                All content, design assets, and proprietary frameworks on {BRAND.domain} are the intellectual property
                of {BRAND.name}.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
