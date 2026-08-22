import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, ShieldCheck, Search } from 'lucide-react';
import { BRAND } from '../data/seoData';

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenStrategy: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, onOpenStrategy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Areas', href: '#areas' },
    { name: 'FAQs', href: '#faqs' },
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
            href="#"
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
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenStrategy}
              id="header-strategy-btn"
              type="button"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 focus:outline-hidden"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Book Strategy Call</span>
            </button>
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
          className="lg:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-3 mb-5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategy();
              }}
              type="button"
              id="mobile-drawer-strategy-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-800 font-semibold py-3 rounded-full text-sm hover:bg-gray-100 border border-gray-200"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Book a Strategy Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
