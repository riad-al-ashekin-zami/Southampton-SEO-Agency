/**
 * Centralized Site and NAP (Name, Address, Phone) Configuration
 * Single Source of Truth for canonical SEO, schema, metadata, and analytics.
 */

export const SITE_CONFIG = {
  name: 'Southampton SEO',
  legalName: 'Southampton SEO Agency',
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
  postalCodePlaceholder: 'SO14',
  addressCountry: 'GB',
  
  // Target Service Areas across Hampshire
  serviceAreas: [
    'Southampton',
    'Hampshire',
    'Eastleigh',
    'Winchester',
    'Romsey',
    'Fareham',
    'Totton',
    'Hedge End',
  ],

  // Contact Information Placeholders (Ready to replace when real details are supplied)
  contact: {
    phonePlaceholder: '[PHONE]',
    emailPlaceholder: '[EMAIL]',
    addressPlaceholder: '[Business Address, Southampton, Hampshire, UK]',
    openingHoursPlaceholder: 'Mo-Fr 09:00-17:30',
  },

  // Social Profile Placeholders (Add when real accounts are active)
  socials: {
    linkedin: '',
    twitter: '',
    facebook: '',
    googleBusinessProfile: '',
  },

  // Future Architectural Routes (Indexable when rich unique content is ready)
  routes: [
    { path: '/', label: 'Home', priority: '1.0', changefreq: 'weekly' },
  ],
};
