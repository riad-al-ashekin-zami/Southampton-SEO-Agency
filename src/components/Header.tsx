import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { BRAND } from '../data/seoData';
import { navigateTo } from '../utils/navigation';

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, onOpenStrategy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashLink = (hash: string, event: React.MouseEvent) => {
    const isRoot = window.location.pathname === '/' || window.location.pathname === '';
    if (isRoot) {
      // Smooth scroll to section
      event.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigateTo('/' + hash, event);
    }
  };

  const serviceSublinks = [
    {
      title: 'SEO Services Southampton',
      desc: 'Full-suite organic optimization campaigns',
      href: '/seo-services-southampton/',
    },
    {
      title: 'SEO Consultant Southampton',
      desc: 'Senior-level consulting & forensic audits',
      href: '/seo-consultant-southampton/',
    },
    {
      title: 'Local SEO & Maps 3-Pack',
      desc: 'Google Business Profile & NAP citations',
      href: '/local-seo-southampton/',
    },
  ];

  const locationSublinks = [
    {
      title: 'Southampton (HQ)',
      desc: 'City Centre, SO14-SO19 coverage',
      href: '/',
    },
    {
      title: 'SEO Eastleigh',
      desc: 'Boyatt Wood & Chandlers Ford (SO50/SO53)',
      href: '/seo-eastleigh/',
    },
    {
      title: 'SEO Agency Hampshire',
      desc: 'Winchester, Portsmouth & County-wide',
      href: '/seo-agency-hampshire/',
    },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 py-3.5'
          : 'bg-[#F9FAFB]/90 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => navigateTo('/', e)}
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="Southampton SEO - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-xs group-hover:bg-blue-700 transition-colors">
              <span>S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">
                Southampton<span className="text-blue-600">SEO</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wide uppercase mt-1">
                Specialist UK Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 150);
              }}
            >
              <button
                type="button"
                onClick={(e) => handleHashLink('#services', e)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-1"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 py-2.5 z-50 animate-in fade-in-50 zoom-in-95 duration-100">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Specialist SEO Services
                  </div>
                  {serviceSublinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        setServicesDropdownOpen(false);
                        navigateTo(item.href, e);
                      }}
                      className="block px-3 py-2 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                  <div className="mt-1 pt-1.5 border-t border-gray-100">
                    <a
                      href="/#services"
                      onClick={(e) => {
                        setServicesDropdownOpen(false);
                        handleHashLink('#services', e);
                      }}
                      className="block px-3 py-1.5 text-[11px] font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View all service modules →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
                setLocationsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                locationsTimeoutRef.current = setTimeout(() => setLocationsDropdownOpen(false), 150);
              }}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-1"
                aria-expanded={locationsDropdownOpen}
              >
                <span>Locations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locationsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 py-2.5 z-50 animate-in fade-in-50 zoom-in-95 duration-100">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Target Coverage
                  </div>
                  {locationSublinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        setLocationsDropdownOpen(false);
                        navigateTo(item.href, e);
                      }}
                      className="block px-3 py-2 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/seo-pricing-packages/"
              onClick={(e) => navigateTo('/seo-pricing-packages/', e)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              Pricing
            </a>

            <a
              href="/#process"
              onClick={(e) => handleHashLink('#process', e)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              Process
            </a>

            <a
              href="/#results"
              onClick={(e) => handleHashLink('#results', e)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              Results
            </a>

            <a
              href="/#faqs"
              onClick={(e) => handleHashLink('#faqs', e)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              FAQs
            </a>

            <a
              href="/partners/"
              onClick={(e) => navigateTo('/partners/', e)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              Partners
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200/80 px-3 py-2 rounded-lg">
              <span className="text-gray-400 font-normal">Direct:</span>
              <span className="text-gray-900 font-bold">{BRAND.phone}</span>
            </div>

            <button
              onClick={onOpenAudit}
              id="header-audit-btn"
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-xs transition-all active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAudit}
              type="button"
              className="sm:hidden bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-full"
            >
              Free Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle"
              className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-4 mb-5">
            <div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
                Pages & Services
              </div>
              <div className="space-y-1">
                <a
                  href="/seo-services-southampton/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/seo-services-southampton/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  SEO Services Southampton
                </a>
                <a
                  href="/seo-consultant-southampton/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/seo-consultant-southampton/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  SEO Consultant Southampton
                </a>
                <a
                  href="/local-seo-southampton/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/local-seo-southampton/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  Local SEO & Google Maps
                </a>
                <a
                  href="/seo-pricing-packages/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/seo-pricing-packages/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  SEO Packages & Pricing
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
                Locations
              </div>
              <div className="space-y-1">
                <a
                  href="/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  Southampton (HQ)
                </a>
                <a
                  href="/seo-eastleigh/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/seo-eastleigh/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  Eastleigh & Boyatt Wood
                </a>
                <a
                  href="/seo-agency-hampshire/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/seo-agency-hampshire/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  County-Wide Hampshire
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="space-y-1">
                <a
                  href="/#process"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleHashLink('#process', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  4-Step Process
                </a>
                <a
                  href="/#results"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleHashLink('#results', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  Client Results
                </a>
                <a
                  href="/#faqs"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleHashLink('#faqs', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  FAQs
                </a>
                <a
                  href="/partners/"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    navigateTo('/partners/', e);
                  }}
                  className="block text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded-lg"
                >
                  Partners
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              type="button"
              id="mobile-drawer-audit-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-sm shadow-xs"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="w-full text-center py-2.5 text-xs text-gray-600 bg-gray-50 rounded-xl border border-gray-200/60">
              <span className="text-gray-500">Direct Phone: </span>
              <strong className="text-gray-900 font-semibold">{BRAND.phone}</strong>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

