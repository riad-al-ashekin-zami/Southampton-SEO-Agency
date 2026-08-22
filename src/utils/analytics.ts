/**
 * Safe Google Analytics 4 (GA4) & Google Tag Manager (GTM) Event Tracker
 *
 * Prepared for:
 * - VITE_GA4_MEASUREMENT_ID
 * - VITE_GTM_CONTAINER_ID
 *
 * Automatically checks for window.gtag and window.dataLayer to record conversions
 * without causing any JavaScript errors if tracking IDs are not yet configured.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  try {
    // 1. Google Tag Manager dataLayer push
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Google Analytics 4 gtag call
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
  } catch (err) {
    // Fail silently in development/sandbox
  }
};

/**
 * High-value conversion event helpers
 */

export const trackFormSubmission = (formType: string, meta: Record<string, any> = {}) => {
  trackEvent('generate_lead', {
    form_type: formType,
    event_category: 'Leads',
    event_label: formType,
    value: formType.includes('Growth') || formType.includes('Authority') ? 500 : 250,
    currency: 'GBP',
    ...meta,
  });
};

export const trackCtaClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    event_category: 'Engagement',
  });
};

export const trackPhoneClick = (source: string = 'header') => {
  trackEvent('contact_phone_click', {
    source,
    event_category: 'Contact',
    event_label: 'Direct Phone Click',
  });
};

export const trackEmailClick = (source: string = 'footer') => {
  trackEvent('contact_email_click', {
    source,
    event_category: 'Contact',
    event_label: 'Direct Email Click',
  });
};

export const trackPricingClick = (packageName: string, price: string) => {
  trackEvent('select_pricing_tier', {
    package_name: packageName,
    price,
    event_category: 'Ecommerce Intent',
  });
};

export const trackStrategyCallClick = (source: string = 'hero') => {
  trackEvent('book_strategy_call_click', {
    source,
    event_category: 'Consultation',
  });
};
