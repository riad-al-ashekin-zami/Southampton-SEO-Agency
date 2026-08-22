import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/seoData';

interface FAQSectionProps {
  onOpenStrategy: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenStrategy }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-16 sm:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
            Common Queries
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Straightforward answers to the most common questions Southampton and Hampshire businesses have about SEO,
            timelines, costs, and strategy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-gray-200/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-[#F9FAFB] hover:bg-gray-100/70 transition-colors focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="p-5 sm:p-6 bg-white text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200 text-center">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Have a specific question about your Southampton website or market competition?
          </p>
          <button
            onClick={onOpenStrategy}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
          >
            <span>Speak directly with an SEO specialist on a strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
