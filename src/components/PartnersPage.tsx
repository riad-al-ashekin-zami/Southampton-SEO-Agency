import React from 'react';
import { PARTNERS_LIST } from '../data/partnersData';

function formatDisplayUrl(rawUrl: string): string {
  return rawUrl.replace(/^https?:\/\//i, '').replace(/\/$/, '');
}

export const PartnersPage: React.FC = () => {
  return (
    <div id="partners-page" className="min-h-screen bg-white text-gray-900 font-sans py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 id="partners-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8 sm:mb-10 text-left">
          Partners
        </h1>

        <div id="partners-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERS_LIST.map((partner, index) => {
            const displayUrl = formatDisplayUrl(partner.url);
            return (
              <a
                key={index}
                id={`partner-item-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50 transition-colors duration-150"
              >
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                    {partner.name}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 flex items-center gap-1 font-mono break-all">
                    <span>{displayUrl}</span>
                    <span aria-hidden="true" className="shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">↗</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
