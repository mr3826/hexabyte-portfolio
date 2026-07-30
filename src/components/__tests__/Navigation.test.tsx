import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import Navigation from '../Navigation';
import { company } from '@/data/company';

function renderNav(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Navigation />
    </MemoryRouter>,
  );
}

describe('Navigation', () => {
  it('renders the logo and the four primary links', () => {
    renderNav();

    expect(screen.getAllByAltText(/Hexabyte/i).length).toBeGreaterThan(0);

    // Desktop and mobile bars both render the list, hence getAllByRole.
    for (const [label, href] of [
      ['Products', '/products'],
      ['Work', '/case-studies'],
      ['Process', '/process'],
      ['About', '/about'],
    ]) {
      const links = screen.getAllByRole('link', { name: label });
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute('href', href);
    }
  });

  it('no longer exposes an ambiguous top-level Company item', () => {
    renderNav();
    expect(screen.queryByRole('link', { name: 'Company' })).not.toBeInTheDocument();
  });

  it('uses the standard discovery CTA on both bars', () => {
    renderNav();

    const desktop = screen.getByRole('link', { name: 'Book a Discovery Call' });
    const mobile = screen.getByRole('link', { name: 'Book a Call' });

    for (const cta of [desktop, mobile]) {
      expect(cta).toHaveAttribute('href', company.discoveryCallUrl);
      expect(cta).toHaveAttribute('target', '_blank');
      expect(cta).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('keeps Work marked current on a case-study detail route', () => {
    renderNav('/case-studies/easy-moderator');

    const work = screen.getAllByRole('link', { name: 'Work' });
    expect(work[0]).toHaveAttribute('aria-current', 'page');
  });

  it('exposes both bars as labelled navigation landmarks', () => {
    renderNav();
    expect(screen.getAllByRole('navigation', { name: 'Primary' })).toHaveLength(2);
  });
});
