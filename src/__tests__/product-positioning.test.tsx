import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { products } from '@/data/products';
import { caseStudies } from '@/data/caseStudies';
import seo from '@/data/seo.json';
import { ModalProvider } from '@/context/ModalContext';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import AboutPage from '@/pages/AboutPage';
import CompanyInformationPage from '@/pages/CompanyInformationPage';

/**
 * Owner decision: the site never publishes where a product is in its lifecycle.
 * Products are described by what they do for a business; anyone interested gets in
 * touch and scope is agreed in conversation.
 *
 * This guards the decision at the two places it can leak back in — the data files and
 * the rendered pages — because it is the kind of wording that returns one card at a
 * time.
 */
const RELEASE_STATE =
  /\bbeta\b|\bwaitlist\b|early access|live & available|in development|coming soon|\bpre-?launch\b|in validation|private beta|not yet (?:enabled|available|released)/i;

function renderPage(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <ModalProvider>{ui}</ModalProvider>
    </MemoryRouter>,
  );
}

describe('product positioning', () => {
  it('keeps release state out of the product data', () => {
    expect(JSON.stringify(products)).not.toMatch(RELEASE_STATE);
  });

  it('keeps release state out of the case study data', () => {
    expect(JSON.stringify(caseStudies)).not.toMatch(RELEASE_STATE);
  });

  it('keeps release state out of the page metadata', () => {
    expect(JSON.stringify(seo)).not.toMatch(RELEASE_STATE);
  });

  it.each([
    ['home', <HomePage key="home" />],
    ['products', <ProductsPage key="products" />],
    ['work', <CaseStudiesPage key="work" />],
    ['about', <AboutPage key="about" />],
    ['company information', <CompanyInformationPage key="company" />],
  ])('renders the %s page without any release state', (_name, ui) => {
    const { container } = renderPage(ui);

    expect(container.textContent).not.toMatch(RELEASE_STATE);
  });

  it('gives every product the business framing the pages render', () => {
    for (const product of products) {
      expect(product.painPoints.length).toBeGreaterThanOrEqual(3);
      expect(product.outcomes.length).toBeGreaterThanOrEqual(3);

      // The promise is the sales line; it has to describe a result, not a feature set.
      expect(product.promise.length).toBeGreaterThan(20);

      // Access is commercial and conversational, so every product needs a way to ask.
      expect(product.cta.some((cta) => /talk to us|book|contact/i.test(cta.label))).toBe(true);
    }
  });
});
