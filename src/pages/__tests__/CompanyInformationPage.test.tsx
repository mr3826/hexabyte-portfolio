import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import CompanyInformationPage from '../CompanyInformationPage';
import { company } from '@/data/company';
import { products } from '@/data/products';

function renderPage() {
  return render(
    <MemoryRouter>
      <CompanyInformationPage />
    </MemoryRouter>,
  );
}

describe('CompanyInformationPage', () => {
  it('renders a card for every product in the data', () => {
    const { container } = renderPage();

    // Iterating the imported array, not literal names — this is what catches a
    // regression back to hand-duplicated product markup.
    for (const product of products) {
      expect(screen.getAllByText(product.name).length).toBeGreaterThan(0);
      expect(
        container.querySelector(`a[href="/products#${product.anchor}"]`),
      ).toBeInTheDocument();
    }
  });

  it('publishes no product release state', () => {
    const { container } = renderPage();

    // Owner decision: products are presented by what they do, never by how far
    // along they are. This page previously carried a status badge per product.
    expect(container.textContent).not.toMatch(
      /beta|live & available|in development|coming soon|waitlist/i,
    );
  });

  it('injects no page-level JSON-LD (App.tsx owns Organization schema)', () => {
    const { container } = renderPage();
    expect(container.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(0);
  });

  it('never uses a raw URL as visible link text', () => {
    const { container } = renderPage();

    for (const anchor of Array.from(container.querySelectorAll('a'))) {
      expect(anchor.textContent?.trim() ?? '').not.toMatch(/^https?:\/\//);
    }
  });

  it('exposes the registered details as matched dt/dd pairs', () => {
    const { container } = renderPage();

    const lists = Array.from(container.querySelectorAll('dl'));
    expect(lists.length).toBeGreaterThanOrEqual(2);

    for (const list of lists) {
      const terms = list.querySelectorAll('dt');
      const values = list.querySelectorAll('dd');
      expect(terms.length).toBeGreaterThan(0);
      expect(values).toHaveLength(terms.length);
    }
  });

  it('renders contact details from the shared company data with readable labels', () => {
    const { container } = renderPage();

    // "Email Hexabyte" appears in both the contact panel and the trust panel.
    expect(screen.getAllByRole('link', { name: /Email Hexabyte/i }).length).toBeGreaterThan(0);
    expect(container.querySelector(`a[href="mailto:${company.email}"]`)).not.toBeNull();

    expect(screen.getByRole('link', { name: /Call Hexabyte/i })).toHaveAttribute(
      'href',
      `tel:${company.phoneHref}`,
    );
    expect(
      screen.getByRole('link', { name: new RegExp(`Visit ${company.websiteDisplay}`, 'i') }),
    ).toHaveAttribute('href', company.website);
  });

  it('keeps the discovery CTA out of the registered business facts', () => {
    const { container } = renderPage();

    const calendlyLinks = Array.from(
      container.querySelectorAll(`a[href="${company.discoveryCallUrl}"]`),
    );
    expect(calendlyLinks).toHaveLength(1);
    // Not inside any definition list of registered details.
    expect(calendlyLinks[0].closest('dl')).toBeNull();
  });

  it('does not publish the internal Meta-submission guidance', () => {
    renderPage();

    expect(screen.queryByText(/Verification Note/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/must use the same legal name/i)).not.toBeInTheDocument();
    expect(screen.getByText(/A clear operator behind every product/i)).toBeInTheDocument();
  });
});
