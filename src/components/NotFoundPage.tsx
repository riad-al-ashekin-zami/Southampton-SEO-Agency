import React from 'react';
import { ArrowLeft, Search, Compass, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 flex flex-col justify-between font-sans">
      {/* Mini Header */}
      <header className="py-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              <span>S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Southampton<span className="text-blue-600">SEO</span>
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← Back to Homepage
          </a>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8" />
          </div>

          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            HTTP 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Page Not Found
          </h1>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            The page you're looking for doesn't exist.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Southampton SEO</span>
          </a>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="py-6 border-t border-gray-100 bg-white text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Southampton SEO. All rights reserved. Southampton & Hampshire, UK.</p>
        </div>
      </footer>
    </div>
  );
};
