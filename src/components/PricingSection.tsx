import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  TrendingUp,
  Award,
} from 'lucide-react';
import { PRICING_PACKAGES, PRICING_COMPARISON_ROWS } from '../data/seoData';
import { PricingPackage } from '../types';

interface PricingSectionProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenAudit,
  onOpenStrategy,
}) => {
  const [showComparison, setShowComparison] = useState(true);

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Transparent Investment
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight mb-5 leading-tight">
            SEO Pricing Southampton
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Straightforward, transparent SEO packages designed to deliver measurable commercial returns. No hidden agency markups, vanity metric padding, or restrictive 12-month lock-in contracts.
          </p>
        </div>

        {/* 3 Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg: PricingPackage) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-200 ${
                  isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 ring-4 ring-blue-600/10 lg:-translate-y-2'
                    : 'bg-[#F9FAFB] border border-gray-200/80 shadow-xs hover:border-blue-200 hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Tier Info */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {pkg.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-200/80">
                    <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">{pkg.period}</span>
                  </div>

                  {/* Ideal For Callout */}
                  <div className="mb-6 p-3 rounded-lg bg-blue-50/50 border border-blue-100/60 text-xs text-blue-950">
                    <span className="font-bold text-blue-900">Best for: </span>
                    <span>{pkg.idealFor}</span>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-gray-200/60 space-y-3">
                  <button
                    onClick={onOpenAudit}
                    type="button"
                    id={`package-btn-${pkg.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl text-sm transition-all active:scale-[0.99] focus:outline-hidden ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gray-900 hover:bg-black text-white shadow-xs'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-gray-400 font-medium">
                    Rolling monthly agreement • No long-term lock-in
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Terms Disclaimer */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 mb-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Zero Long-Term Lock-In:</strong> All Southampton SEO packages operate on transparent monthly rolling agreements. Custom Hampshire multi-location or enterprise scopes available upon request.
            </span>
          </div>
          <button
            onClick={() => setShowComparison(!showComparison)}
            type="button"
            className="shrink-0 font-bold text-blue-600 hover:text-blue-700 underline"
          >
            {showComparison ? 'Hide Feature Comparison' : 'Show Detailed Feature Comparison'}
          </button>
        </div>

        {/* Detailed Package Comparison Matrix */}
        {showComparison && (
          <div id="package-comparison-table" className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Detailed Package Comparison
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Compare deliverables across all three Southampton SEO tiers
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-xs bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 w-2/5">Feature & Deliverable</th>
                    <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 text-center w-1/5">
                      <div>Starter</div>
                      <div className="text-xs font-normal text-gray-500">£299/mo</div>
                    </th>
                    <th className="p-4 sm:p-5 text-sm font-bold text-blue-600 text-center bg-blue-50/50 w-1/5 border-x border-blue-100">
                      <div className="flex items-center justify-center gap-1">
                        <span>Growth</span>
                        <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.2 rounded-full uppercase font-semibold">Popular</span>
                      </div>
                      <div className="text-xs font-normal text-blue-700">£499/mo</div>
                    </th>
                    <th className="p-4 sm:p-5 text-sm font-bold text-gray-900 text-center w-1/5">
                      <div>Authority</div>
                      <div className="text-xs font-normal text-gray-500">£799/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {PRICING_COMPARISON_ROWS.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-gray-800">
                        <span>{row.feature}</span>
                      </td>
                      
                      {/* Starter */}
                      <td className="p-4 sm:p-5 text-center text-gray-600">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-medium">{row.starter}</span>
                        )}
                      </td>

                      {/* Growth (Highlighted) */}
                      <td className="p-4 sm:p-5 text-center bg-blue-50/30 border-x border-blue-100 text-gray-900 font-semibold">
                        {typeof row.growth === 'boolean' ? (
                          row.growth ? (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-blue-950 font-bold">{row.growth}</span>
                        )}
                      </td>

                      {/* Authority */}
                      <td className="p-4 sm:p-5 text-center text-gray-600">
                        {typeof row.authority === 'boolean' ? (
                          row.authority ? (
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-medium">{row.authority}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Feature Cards */}
            <div className="md:hidden space-y-4">
              {PRICING_COMPARISON_ROWS.map((row, rIdx) => (
                <div key={rIdx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="font-bold text-gray-900 text-xs mb-2">{row.feature}</div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-gray-400 font-medium mb-1">Starter</div>
                      <div>
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                        ) : row.starter}
                      </div>
                    </div>
                    <div className="text-center bg-blue-50/60 p-1 rounded-md border border-blue-100">
                      <div className="text-blue-700 font-bold mb-1">Growth</div>
                      <div className="text-blue-950 font-bold">
                        {typeof row.growth === 'boolean' ? (
                          row.growth ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                        ) : row.growth}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 font-medium mb-1">Authority</div>
                      <div>
                        {typeof row.authority === 'boolean' ? (
                          row.authority ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mx-auto" /> : <XCircle className="w-3.5 h-3.5 text-gray-300 mx-auto" />
                        ) : row.authority}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-CTA: Not Sure Which SEO Package Is Right for You? */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Free Consultation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Not Sure Which SEO Package Is Right for You?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We conduct a preliminary review of your current website, local competitor density, and commercial targets to recommend the most cost-effective tier for your budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenAudit}
              type="button"
              id="pricing-subcta-audit-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all shadow-md active:scale-[0.99]"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenStrategy}
              type="button"
              id="pricing-subcta-consult-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm px-6 py-4 rounded-xl border border-gray-700 transition-all active:scale-[0.99]"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
