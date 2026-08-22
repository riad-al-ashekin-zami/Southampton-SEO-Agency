import React from 'react';
import { MapPin, Navigation, TrendingUp, Compass, Users, CheckCircle, Search } from 'lucide-react';

interface SouthamptonSEOSectionProps {
  onOpenAudit: () => void;
}

export const SouthamptonSEOSection: React.FC<SouthamptonSEOSectionProps> = ({ onOpenAudit }) => {
  const localInsights = [
    {
      title: 'Local Commercial Intent',
      desc: 'Over 78% of local service queries in Southampton include explicit geographic qualifiers or trigger the Google Maps 3-Pack.',
    },
    {
      title: 'Regional Hampshire Reach',
      desc: 'Buyers in Eastleigh, Winchester, and Fareham frequently hire specialist Southampton firms when organic authority is proven.',
    },
    {
      title: 'High-Conversion Enquiries',
      desc: 'Organic visitors arriving from commercial Southampton keywords convert at 3.4x the rate of generic informational traffic.',
    },
  ];

  return (
    <section
      id="southampton-seo"
      className="py-16 sm:py-24 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Natural Keyword Narrative */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-5">
              <Compass className="w-3.5 h-3.5" />
              <span>Local Search Relevance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Southampton SEO That Drives Business Growth
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                As a specialist <strong className="text-gray-900 font-semibold">SEO agency in Southampton</strong>, we
                understand how local search behavior differs from generic national campaigns. Prospective clients in
                Hampshire don't just browse — they search with specific commercial intent when they need a reliable
                partner.
              </p>
              
              <p>
                Whether you run an established trade operation, a professional advisory firm, or a regional B2B provider,
                competing in Google Search and Google Maps requires a targeted approach. Our dedicated{' '}
                <strong className="text-gray-900 font-semibold">Southampton SEO agency</strong> services align your website's
                technical architecture, topical relevance, and local citations with the exact ways customers search across
                Southampton, Eastleigh, Winchester, Totton, Hedge End, Romsey, Fareham, and Portsmouth.
              </p>

              <p>
                Rankings are a valuable milestone, but the real objective is consistent, qualified enquiries. We don't
                chase irrelevant search volume; our <strong className="text-gray-900 font-semibold">SEO services in Southampton</strong> focus
                on commercial keywords that generate profitable business for Hampshire enterprises.
              </p>
            </div>

            {/* Geo Bullet Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">Southampton City & Solent Commercial Corridor</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">Hampshire Wide Search Authority</span>
              </div>
            </div>

          </div>

          {/* Right Column: Local Search Authority Card */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs">
              
              <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Hampshire SEO Blueprint
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Why Local Search Dynamics Matter
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Search className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {localInsights.map((insight, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>{insight.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-6">
                      {insight.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 font-medium leading-relaxed">
                <strong>No generic templates:</strong> Every Hampshire campaign is mapped against your specific competitors,
                geographical service radius, and customer lifetime value.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
