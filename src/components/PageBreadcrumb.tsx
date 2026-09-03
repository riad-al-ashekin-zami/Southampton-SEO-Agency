import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
        <li>
          <a
            href="/"
            onClick={(e) => navigateTo('/', e)}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </a>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => navigateTo(item.href!, e)}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
