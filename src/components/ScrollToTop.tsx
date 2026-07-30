import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on navigation.
 *
 * Hash-aware: `/products#tradeflow` scrolls to that section rather than the top.
 * Without this every product anchor link on the site (footer, About, product
 * cards, the products index) landed at the top of the page instead.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    const scrollToHash = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ behavior, block: 'start' });
      return Boolean(target);
    };

    // On a cross-page navigation the target section may not be mounted yet when
    // this effect first runs, so retry once on the next frame before giving up.
    if (scrollToHash()) return;

    const frame = requestAnimationFrame(scrollToHash);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
