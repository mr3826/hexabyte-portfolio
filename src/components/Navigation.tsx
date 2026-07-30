import { Link, useLocation } from 'react-router-dom';

import { company } from '@/data/company';
import hexabyteLogo from '@/assets/hexabyte-logo.png';

/**
 * `Company` was removed as a top-level item: it sat next to `About` with no clear
 * distinction between the two. Company Information stays reachable from the footer's
 * Legal & Trust column, the About page, and its own route.
 */
const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const location = useLocation();

  // Prefix match so a case-study detail page still highlights "Work".
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top bar: logo + desktop nav */}
      <div className="bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={hexabyteLogo}
                alt="Hexabyte"
                className="h-10 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  aria-current={isActive(to) ? 'page' : undefined}
                  className={`transition-colors ${
                    isActive(to) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={company.discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-engineering"
              >
                Book a Discovery Call
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile category strip — horizontal scrollable, no hamburger */}
      <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
        <nav
          aria-label="Primary"
          className="flex items-center overflow-x-auto nav-strip-scroll px-4 gap-1 h-11"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? 'page' : undefined}
              className={`shrink-0 inline-flex items-center min-h-[44px] px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                isActive(to)
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={company.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 ml-1 inline-flex items-center min-h-[44px] px-4 rounded-full text-sm font-semibold bg-primary text-background whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
