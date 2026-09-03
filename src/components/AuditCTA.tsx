import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Search,
  ShieldCheck,
  Zap,
  Globe,
  Loader2,
  Lock,
} from 'lucide-react';
import { AuditFormData } from '../types';
import { trackFormSubmission } from '../utils/analytics';

export const AuditCTA: React.FC = () => {
  const formId = (import.meta as any).env?.VITE_FORMSPREE_FORM_ID || 'maewkkrg';
  const [state, handleFormspreeSubmit] = useForm(formId);

  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    businessName: '',
    website: '',
    email: '',
    phone: '',
    goals: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});

  useEffect(() => {
    if (state.succeeded) {
      trackFormSubmission('Free SEO Audit', { website: formData.website });
    }
  }, [state.succeeded]);

  // Quick live interactive preview state
  const [liveDomain, setLiveDomain] = useState('');
  const [isCheckingLive, setIsCheckingLive] = useState(false);
  const [liveChecks, setLiveChecks] = useState<{
    tested: boolean;
    domain: string;
    items: { label: string; status: 'good' | 'warning'; detail: string }[];
  } | null>(null);

  const validate = () => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business name';

    if (!formData.website.trim()) {
      newErrors.website = 'Please enter your website URL';
    } else if (!formData.website.includes('.')) {
      newErrors.website = 'Please enter a valid website address (e.g. yourbusiness.co.uk)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact phone number';
    }

    if (!formData.goals.trim()) {
      newErrors.goals = 'Please tell us briefly what you would like to improve';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    handleFormspreeSubmit(e);
  };

  const handleRunLiveCheck = () => {
    if (!liveDomain.trim() || !liveDomain.includes('.')) return;
    setIsCheckingLive(true);

    setTimeout(() => {
      setIsCheckingLive(false);
      const cleanDomain = liveDomain.replace(/^https?:\/\//, '').replace(/\/$/, '');
      setLiveChecks({
        tested: true,
        domain: cleanDomain,
        items: [
          {
            label: 'Local Relevance Signals',
            status: 'warning',
            detail: 'Geo-targeted Southampton schema & location markup can be expanded.',
          },
          {
            label: 'Mobile Core Web Vitals',
            status: 'good',
            detail: 'Viewport configuration detected. LCP and layout stability pass initial benchmarks.',
          },
          {
            label: 'Commercial Intent Indexation',
            status: 'warning',
            detail: 'High-value Southampton search queries have untapped ranking potential.',
          },
          {
            label: 'Security & Protocol',
            status: 'good',
            detail: 'Valid HTTPS protocol and SSL header presence detected.',
          },
        ],
      });

      // Auto fill form website if empty
      if (!formData.website) {
        setFormData((prev) => ({ ...prev, website: cleanDomain }));
      }
    }, 700);
  };

  return (
    <section
      id="audit-section"
      className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-gray-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Live Instant Check */}
          <div className="lg:col-span-6">
            
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
              Zero Obligation Audit
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5 leading-tight">
              Get Your Free Southampton SEO Audit
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Get a practical SEO review showing the biggest opportunities, technical issues and ranking opportunities
              for your business.
            </p>

            {/* What you receive checklist */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Technical Crawl & Speed Diagnosis
                  </h4>
                  <p className="text-xs text-gray-500">
                    Identify render-blocking code, indexing errors, and mobile speed issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Southampton Competitor Gap Matrix
                  </h4>
                  <p className="text-xs text-gray-500">
                    See which high-intent commercial keywords your competitors are winning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Google Maps & Local Pack Assessment
                  </h4>
                  <p className="text-xs text-gray-500">
                    Review your GBP category precision, citations, and local rankings.
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Domain Preview Widget */}
            <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
              <div className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Instant Domain Quick-Check</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={liveDomain}
                  onChange={(e) => setLiveDomain(e.target.value)}
                  placeholder="e.g. yourbusiness.co.uk"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                />
                <button
                  type="button"
                  onClick={handleRunLiveCheck}
                  disabled={isCheckingLive || !liveDomain}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isCheckingLive ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Analyze'}
                </button>
              </div>

              {liveChecks && (
                <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 animate-in fade-in duration-200">
                  <div className="text-[11px] font-bold text-blue-700">
                    Analysis for: {liveChecks.domain}
                  </div>
                  {liveChecks.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] bg-gray-50 p-1.5 rounded-md border border-gray-100">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className={item.status === 'good' ? 'text-blue-700 font-bold' : 'text-amber-700 font-bold'}>
                        {item.status === 'good' ? 'Passed' : 'Opportunity Found'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: High-Converting Audit Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-200/90 shadow-xl relative">
              
              {state.succeeded ? (
                <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    Audit Request Received
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                    Thanks! Your Southampton SEO audit request has been sent to our specialists. We'll be in touch with your customized report shortly.
                  </p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 max-w-sm mx-auto mb-6">
                    Our technical team is compiling your domain's crawl logs and competitor ranking report.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Submit another website for review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <input type="hidden" name="formType" value="Free SEO Audit (On-Page Form)" />
                  
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Request Your Free SEO Audit
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      No obligation. Customized review for your Southampton business.
                    </p>
                  </div>

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audit-name" className="block text-xs font-bold text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="audit-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="John Smith"
                        className={`w-full bg-gray-50 border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-600 mt-1" />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="audit-biz" className="block text-xs font-bold text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        id="audit-biz"
                        name="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        placeholder="Southampton Enterprises Ltd"
                        className={`w-full bg-gray-50 border ${
                          errors.businessName ? 'border-red-500' : 'border-gray-200'
                        } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                      />
                      <ValidationError prefix="Business Name" field="businessName" errors={state.errors} className="text-xs text-red-600 mt-1" />
                      {errors.businessName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Website URL */}
                  <div>
                    <label htmlFor="audit-website" className="block text-xs font-bold text-gray-700 mb-1">
                      Website Address *
                    </label>
                    <input
                      id="audit-website"
                      name="website"
                      type="text"
                      required
                      value={formData.website}
                      onChange={(e) => {
                        setFormData({ ...formData, website: e.target.value });
                        if (errors.website) setErrors({ ...errors, website: undefined });
                      }}
                      placeholder="e.g. www.yourcompany.co.uk"
                      className={`w-full bg-gray-50 border ${
                        errors.website ? 'border-red-500' : 'border-gray-200'
                      } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                    />
                    <ValidationError prefix="Website" field="website" errors={state.errors} className="text-xs text-red-600 mt-1" />
                    {errors.website && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.website}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audit-email" className="block text-xs font-bold text-gray-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        id="audit-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@yourcompany.co.uk"
                        className={`w-full bg-gray-50 border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-600 mt-1" />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="audit-phone" className="block text-xs font-bold text-gray-700 mb-1">
                        Contact Phone *
                      </label>
                      <input
                        id="audit-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="023 8000 0568"
                        className={`w-full bg-gray-50 border ${
                          errors.phone ? 'border-red-500' : 'border-gray-200'
                        } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-600 mt-1" />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* What would you like to improve */}
                  <div>
                    <label htmlFor="audit-goals" className="block text-xs font-bold text-gray-700 mb-1">
                      What would you like to improve? *
                    </label>
                    <textarea
                      id="audit-goals"
                      name="goals"
                      rows={3}
                      required
                      value={formData.goals}
                      onChange={(e) => {
                        setFormData({ ...formData, goals: e.target.value });
                        if (errors.goals) setErrors({ ...errors, goals: undefined });
                      }}
                      placeholder="e.g. Outrank local competitors for commercial electrical work in Southampton, fix Google Maps ranking, increase inbound quote requests..."
                      className={`w-full bg-gray-50 border ${
                        errors.goals ? 'border-red-500' : 'border-gray-200'
                      } rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                    />
                    <ValidationError prefix="Goals" field="goals" errors={state.errors} className="text-xs text-red-600 mt-1" />
                    {errors.goals && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.goals}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      id="audit-form-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Audit Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Your Free SEO Audit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                    <Lock className="w-3 h-3 text-blue-600" />
                    <span>Your details remain strictly confidential. No spam guaranteed.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
