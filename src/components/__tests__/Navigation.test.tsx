import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';

import Navigation from '../Navigation';

function renderNav(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
        <ModalProvider>
          <Navigation />
      </ModalProvider>
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

  it('opens the inquiry modal rather than linking off-site', () => {
    renderNav();

    // These were anchors to a Calendly URL that returned 404, on every page.
    // A CTA that leaves the site can rot without anything here noticing, so the
    // rule is now structural: the header CTA is a button, and no CTA anywhere
    // may point at calendly.com.
    const desktop = screen.getByRole('button', { name: 'Book a Discovery Call' });
    const mobile = screen.getByRole('button', { name: 'Book a Call' });

    for (const cta of [desktop, mobile]) {
      expect(cta.tagName).toBe('BUTTON');
      expect(cta).toHaveAttribute('type', 'button');
    }
  });

  it('has no calendly links at all', () => {
    const { container } = renderNav();

    expect(container.querySelectorAll('a[href*="calendly.com"]')).toHaveLength(0);
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
