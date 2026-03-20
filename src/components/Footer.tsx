import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';
import hexabyteLogo from '@/assets/hexabyte-logo.png';
import { useModal } from '@/context/ModalContext';

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={hexabyteLogo}
                alt="Hexabyte"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Founder-led AI automation and web/mobile product engineering for
              SMB operators.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link
                to="/ai-automation"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                AI Automation
              </Link>
              <Link
                to="/web-development"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Web Development
              </Link>
              <Link
                to="/mobile-development"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mobile Development
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Case Studies
              </Link>
              <button
                onClick={openModal}
                className="block text-left text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@hexabyte.io"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@hexabyte.io
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/mr3826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Founder LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mr3826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Founder GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Hexabyte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
