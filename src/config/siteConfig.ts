/**
 * Centralized Site and NAP (Name, Address, Phone) Configuration
 * Single Source of Truth for canonical SEO, schema, metadata, and analytics.
 */

export const SITE_CONFIG = {
  name: 'Southampton Seo Firm',
  alternateName: 'Southampton SEO',
  legalName: 'Southampton Seo Firm',
  domain: 'southamptonseo.agency',
  canonicalUrl: 'https://southamptonseo.agency/',
  tagline: 'Search. Visibility. Growth.',
  description:
    'Southampton SEO agency helping businesses grow through Local SEO, technical SEO, content and SEO strategy. Get a free SEO audit today.',
  
  // Geographical & Location Details
  locale: 'en-GB',
  currency: 'GBP',
  priceRange: '£299 - £799',
  country: 'United Kingdom',
  region: 'Hampshire',
  city: 'Southampton',
  postalCode: 'SO14 0LS',
  addressCountry: 'GB',
  
  // Verified Google Business Profile NAP
  contact: {
    phone: '023 8000 0568',
    phoneIntl: '+44 23 8000 0568',
    phoneClean: '+442380000568',
    emailPlaceholder: 'enquiries@southamptonseo.agency',
    streetAddress: '51 Cranbury Ave',
    addressLocality: 'Southampton',
    addressRegion: 'Hampshire',
    postalCode: 'SO14 0LS',
    addressFormatted: '51 Cranbury Ave, Southampton SO14 0LS, United Kingdom',
    openingHours: 'Mo-Fr 09:00-18:00',
    openingHoursDisplay: 'Monday – Friday: 9:00 AM – 6:00 PM',
  },

  // Social & GBP Links
  socials: {
    linkedin: '',
    twitter: '',
    facebook: '',
    googleBusinessProfile: 'https://maps.app.goo.gl/2VUmAmA2bpZi3ThRA',
  },

  // Future Architectural Routes (Indexable when rich unique content is ready)
  routes: [
    { path: '/', label: 'Home', priority: '1.0', changefreq: 'weekly' },
  ],
};
