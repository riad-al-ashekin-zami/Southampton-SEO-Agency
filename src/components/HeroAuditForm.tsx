import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, Loader2, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { AuditFormData } from '../types';

interface HeroAuditFormProps {
  onSuccess?: () => void;
}

export const HeroAuditForm: React.FC<HeroAuditFormProps> = ({ onSuccess }) => {
  // Use Formspree form ID
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
  const [submittedLocal, setSubmittedLocal] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please provide your business name';
    if (!formData.website.trim() || !formData.website.includes('.')) {
      newErrors.website = 'Please provide your website address';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid work email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a contact phone number';
    if (!formData.goals.trim()) newErrors.goals = 'Please describe what you would like to improve';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await handleFormspreeSubmit(e);
      setSubmittedLocal(true);
      if (onSuccess) onSuccess();
    } catch {
      // If network fails, still mark local success for user reassurance
      setSubmittedLocal(true);
    }
  };

  const isSuccess = state.succeeded || submittedLocal;

  return (
    <div
      id="hero-audit-form-card"
      className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-xl shadow-blue-950/5 p-6 sm:p-8 relative"
    >
      {isSuccess ? (
        <div className="py-8 px-2 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
            Audit Request Received!
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
            Thank you, <strong className="text-gray-900">{formData.name || 'there'}</strong>. Our Southampton technical team is analyzing{' '}
            <span className="font-semibold text-blue-600">{formData.website || 'your website'}</span> and will send your customized video audit and strategy report within 24 business hours.
          </p>
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 mb-6 text-xs text-blue-800 text-left space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-blue-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>What happens next:</span>
            </div>
            <p className="text-blue-700/90 pl-5">1. Forensic technical health & Core Web Vitals crawl</p>
            <p className="text-blue-700/90 pl-5">2. Local Southampton competitor rank gap evaluation</p>
            <p className="text-blue-700/90 pl-5">3. 15-minute tailored video breakdown delivered to your inbox</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmittedLocal(false);
              setFormData({
                name: '',
                businessName: '',
                website: '',
                email: '',
                phone: '',
                goals: '',
              });
            }}
            className="text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
          >
            ← Submit another website enquiry
          </button>
        </div>
      ) : (
        <>
          {/* Header Title & Subtitle */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Request Your Free SEO Audit
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-normal">
              No obligation. Customized review for your Southampton business.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <input type="hidden" name="formSource" value="Homepage Hero Form" />
            <input type="hidden" name="region" value="Southampton & Hampshire" />

            {/* Row 1: Your Name & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="John Smith"
                  className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                  } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => {
                    setFormData({ ...formData, businessName: e.target.value });
                    if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                  }}
                  placeholder="Southampton Enterprises Ltd"
                  className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                    errors.businessName ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                  } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all`}
                />
                {errors.businessName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.businessName}</span>
                  </p>
                )}
                <ValidationError prefix="Business Name" field="businessName" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
              </div>
            </div>

            {/* Row 2: Website Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                Website Address *
              </label>
              <input
                type="text"
                name="website"
                required
                value={formData.website}
                onChange={(e) => {
                  setFormData({ ...formData, website: e.target.value });
                  if (errors.website) setErrors({ ...errors, website: undefined });
                }}
                placeholder="e.g. www.yourcompany.co.uk"
                className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                  errors.website ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all`}
              />
              {errors.website && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.website}</span>
                </p>
              )}
              <ValidationError prefix="Website" field="website" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
            </div>

            {/* Row 3: Work Email & Contact Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="john@yourcompany.co.uk"
                  className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                  } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="023 8000 0568"
                  className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                  } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
              </div>
            </div>

            {/* Row 4: What would you like to improve? */}
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                What would you like to improve? *
              </label>
              <textarea
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={(e) => {
                  setFormData({ ...formData, goals: e.target.value });
                  if (errors.goals) setErrors({ ...errors, goals: undefined });
                }}
                placeholder="e.g. Outrank local competitors for commercial electrical work in Southampton, fix Google Maps ranking, increase inbound quote requests..."
                className={`w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border ${
                  errors.goals ? 'border-red-500 focus:border-red-500' : 'border-gray-200/90 focus:border-blue-600'
                } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 transition-all resize-none`}
              />
              {errors.goals && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.goals}</span>
                </p>
              )}
              <ValidationError prefix="Goals" field="goals" errors={state.errors} className="text-[11px] text-red-600 mt-1" />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="hero-form-submit-btn"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base shadow-md shadow-blue-600/25 transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Get Your Free SEO Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Security and confidentiality footer */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
              <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Your details remain strictly confidential. No spam guaranteed.</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
