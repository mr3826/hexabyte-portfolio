import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import hexabyteLogo from '@/assets/hexabyte-logo.png';
import { useModal } from '@/context/ModalContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={hexabyteLogo}
              alt="Hexabyte"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/case-studies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              to="/process"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link
              to="/pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <button
              onClick={() => openModal('navigation_desktop')}
              className="min-h-[44px] px-6 py-2.5 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Inquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-navigation"
            className="md:hidden min-h-[44px] min-w-[44px] p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <button
              aria-label="Close mobile menu overlay"
              className="md:hidden fixed inset-0 top-20 z-40 bg-background/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              id="mobile-navigation"
              className="md:hidden fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto border-t border-primary/20 bg-card px-6 py-6"
            >
              <div className="space-y-3">
                <Link
                  to="/about"
                  className="block min-h-[44px] rounded-lg px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="block min-h-[44px] rounded-lg px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/case-studies"
                  className="block min-h-[44px] rounded-lg px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  Work
                </Link>
                <Link
                  to="/process"
                  className="block min-h-[44px] rounded-lg px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  Process
                </Link>
                <Link
                  to="/pricing"
                  className="block min-h-[44px] rounded-lg px-3 py-3 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('navigation_mobile');
                }}
                className="mt-6 block w-full min-h-[44px] px-6 py-3 bg-primary text-background rounded-lg text-center hover:bg-primary/90 transition-all"
              >
                Book Discovery Inquiry
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
