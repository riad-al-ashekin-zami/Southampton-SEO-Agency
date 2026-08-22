import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenAudit,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-6">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              {service.badge}
            </span>
            <h3 id="service-modal-title" className="text-2xl font-extrabold text-gray-900">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Service Overview
          </h4>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {service.details.overview}
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-6 bg-[#F9FAFB] p-4 sm:p-5 rounded-xl border border-gray-200/80">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Key Deliverables & Action Items</span>
          </h4>
          <ul className="space-y-2.5">
            {service.details.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Commercial Outcome */}
        <div className="mb-8 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Expected Business Outcome</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
            {service.details.outcome}
          </p>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <span>Request {service.title} Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
