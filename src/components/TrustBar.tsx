import React from 'react';
import { Target, MapPin, Gauge, FileText, Search, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: MapPin,
      title: 'Local SEO Focus',
      description: 'Southampton & Hampshire geo-relevance',
    },
    {
      icon: Gauge,
      title: 'Technical Precision',
      description: 'Core Web Vitals & code-level fixes',
    },
    {
      icon: Target,
      title: 'Commercial Strategy',
      description: 'Prioritized roadmaps tied to revenue',
    },
    {
      icon: FileText,
      title: 'Content Authority',
      description: 'High-intent copywriting with zero fluff',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Reporting',
      description: 'No jargon, just measurable enquiries',
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900 leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
