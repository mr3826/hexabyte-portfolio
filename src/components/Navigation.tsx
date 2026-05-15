import { Link, useLocation } from 'react-router-dom';
import hexabyteLogo from '@/assets/hexabyte-logo.png';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/case-studies', label: 'Work' },
  { to: '/process', label: 'Process' },
];

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`transition-colors ${
                    isActive(to)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://calendly.com/hexabyte/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-engineering"
              >
                Book Engineering Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile category strip — horizontal scrollable, no hamburger */}
      <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center overflow-x-auto nav-strip-scroll px-4 gap-1 h-11">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                isActive(to)
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/hexabyte/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 ml-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary text-background whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
