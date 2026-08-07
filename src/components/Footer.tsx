import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

import { company, addressLine } from '@/data/company';
import { products } from '@/data/products';

const COMPANY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/resources', label: 'Resources' },
];

/** Easy Moderator is the only product with published legal pages today. */
const EASY_MODERATOR_LEGAL = [
  { label: 'Privacy Policy', href: 'https://easymod.tech/privacy-policy' },
  { label: 'Terms of Service', href: 'https://easymod.tech/terms' },
  { label: 'Data Deletion', href: 'https://easymod.tech/api/webhooks/meta/data-deletion' },
];

const linkClass = 'block text-sm text-muted-foreground hover:text-primary transition-colors';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* 6 columns of content: brand spans 2, so the grid is 6 wide. */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src="/hexabyte-logo.png" alt="Hexabyte Technologies" className="h-10 w-auto object-contain" />
              <div className="status-indicator">
                <span className="status-dot status-dot-green" />
                <span className="text-xs text-muted-foreground">Accepting Projects</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Founder-led technology company building practical AI systems, operational
              software, and focused digital products.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              {products.map((product) => (
                <Link key={product.id} to={`/products#${product.anchor}`} className={linkClass}>
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              {COMPANY_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className={linkClass}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="font-semibold mb-4">Legal &amp; Trust</h3>
            <div className="space-y-2">
              <Link to="/company-information" className={linkClass}>
                Company Information
              </Link>

              <p className="pt-3 text-xs uppercase tracking-wider text-muted-foreground/70">
                Easy Moderator
              </p>
              {EASY_MODERATOR_LEGAL.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                {company.email}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">{addressLine}</p>
              <div className="flex gap-4 pt-1">
                <a
                  href={company.founderSocial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Founder LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={company.founderSocial.github}
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

        <div className="border-t border-primary/20 pt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground/80">
            {company.legalName} is a registered information technology business in{' '}
            {company.address.region}, {company.address.country}.
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
