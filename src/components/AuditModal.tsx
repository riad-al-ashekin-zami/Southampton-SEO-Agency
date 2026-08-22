import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Loader2, Lock, ShieldCheck } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [state, handleFormspreeSubmit] = useForm('maewkkrg');

  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    businessName: '',
    website: '',
    email: '',
    phone: '',
    goals: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please provide your business name';
    if (!formData.website.trim() || !formData.website.includes('.')) {
      newErrors.website = 'Please provide a valid website URL';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a phone number';
    if (!formData.goals.trim()) newErrors.goals = 'Please state what you would like to improve';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFormspreeSubmit(e);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-gray-100 mb-5">
          <div>
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Southampton SEO Audit
            </span>
            <h3 id="audit-modal-title" className="text-xl font-extrabold text-gray-900 mt-1">
              Get Your Free SEO Audit
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

        {state.succeeded ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Audit Request Received
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Thanks! Your SEO audit request has been sent to our specialists. We'll be in touch with your report shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <input type="hidden" name="formType" value="Free SEO Audit (Modal Form)" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className={`w-full bg-gray-50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
                {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Company Name"
                  className={`w-full bg-gray-50 border ${
                    errors.businessName ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                />
                <ValidationError prefix="Business Name" field="businessName" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
                {errors.businessName && <p className="text-[11px] text-red-600 mt-0.5">{errors.businessName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Website URL *</label>
              <input
                type="text"
                name="website"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="e.g. www.yourcompany.co.uk"
                className={`w-full bg-gray-50 border ${
                  errors.website ? 'border-red-500' : 'border-gray-200'
                } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
              />
              <ValidationError prefix="Website" field="website" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
              {errors.website && <p className="text-[11px] text-red-600 mt-0.5">{errors.website}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.co.uk"
                  className={`w-full bg-gray-50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="023 8000 0000"
                  className={`w-full bg-gray-50 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
                {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">What would you like to improve? *</label>
              <textarea
                rows={2}
                name="goals"
                required
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                placeholder="e.g. Higher Google rankings in Southampton, more qualified phone enquiries..."
                className={`w-full bg-gray-50 border ${
                  errors.goals ? 'border-red-500' : 'border-gray-200'
                } rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
              />
              <ValidationError prefix="Goals" field="goals" errors={state.errors} className="text-[11px] text-red-600 mt-0.5" />
              {errors.goals && <p className="text-[11px] text-red-600 mt-0.5">{errors.goals}</p>}
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Get Your Free SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
              <Lock className="w-3 h-3 text-blue-600" />
              <span>Confidential review. No spam guarantee.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
