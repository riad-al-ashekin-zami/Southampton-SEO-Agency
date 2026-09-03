import type { MouseEvent } from 'react';

/**
 * Seamless SPA navigation helper for internal links
 * Preserves normal <a> tags for SEO crawlers, while providing smooth client-side routing.
 */

export function navigateTo(path: string, event?: MouseEvent) {
  if (event) {
    // If opening in new tab or middle-click, let default browser behavior happen
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
  }

  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
