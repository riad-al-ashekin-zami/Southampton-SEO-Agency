import React, { useState } from 'react';
import {
  MapPin,
  Cpu,
  Compass,
  FileCode,
  Store,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';
import { SERVICES } from '../data/seoData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'local-seo':
        return MapPin;
      case 'technical-seo':
        return Cpu;
      case 'seo-strategy':
        return Compass;
      case 'content-seo':
        return FileCode;
      case 'google-business-profile':
        return Store;
      case 'seo-audits':
        return Search;
      default:
        return Compass;
    }
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Specialist Expertise
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            SEO Services for Southampton Businesses
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver targeted, high-impact SEO services engineered to increase your organic Google visibility,
            drive qualified local and national searchers to your website, and convert traffic into reliable commercial revenue.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            const isFeatured = service.id === 'seo-strategy';

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-7 border transition-all duration-200 flex flex-col justify-between relative group ${
                  isFeatured
                    ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'border-gray-200/80 shadow-xs hover:border-blue-200 hover:shadow-md'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>High Commercial Impact</span>
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-gray-100">
                    {service.highlights.slice(0, 4).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-hidden"
                  >
                    <span>View deliverables</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenAudit}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Audit this</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Services Banner CTA */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              Not sure which SEO focus your business needs first?
            </h4>
            <p className="text-sm text-gray-600">
              Our free comprehensive audit pinpoints the exact technical, local, and content bottlenecks holding your site back.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            id="services-get-audit-btn"
            type="button"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all active:scale-[0.99]"
          >
            <span>Get Your Free SEO Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Detail Deep-Dive Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenAudit={onOpenAudit}
      />
    </section>
  );
};
