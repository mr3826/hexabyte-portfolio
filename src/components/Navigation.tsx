import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import hexabyteLogo from '@/assets/logo.svg';
import { useModal } from '@/context/ModalContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

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
              to="/ai-automation"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              AI Automation
            </Link>
            <Link
              to="/web-development"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Web Development
            </Link>
            <Link
              to="/mobile-development"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mobile Development
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors group flex items-center gap-1.5"
            >
              <span>About</span>
              <svg
                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </Link>
            <Link
              to="/case-studies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <button
              onClick={openModal}
              className="px-6 py-2.5 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Start Your Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
            <Link
              to="/ai-automation"
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Automation
            </Link>
            <Link
              to="/web-development"
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Web Development
            </Link>
            <Link
              to="/mobile-development"
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mobile Development
            </Link>
            <Link
              to="/about"
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/case-studies"
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="block w-full px-6 py-2.5 bg-primary text-background rounded-lg text-center hover:bg-primary/90 transition-all"
            >
              Start Your Project
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
