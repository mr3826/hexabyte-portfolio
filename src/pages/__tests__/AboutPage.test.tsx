import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from '../AboutPage';
import { products } from '@/data/products';
import { ModalProvider } from '@/context/ModalContext';

function renderPage() {
  return render(
    <MemoryRouter>
      <ModalProvider>
        <AboutPage />
      </ModalProvider>
    </MemoryRouter>,
  );
}

describe('AboutPage', () => {
  it('renders the origin-story hero', () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Built Products First/i,
    );
  });

  it('routes the discovery CTA into the inquiry modal, not off-site', () => {
    const { container } = renderPage();

    const ctas = screen.getAllByRole('button', { name: /Book a Discovery Call/i });
    expect(ctas.length).toBeGreaterThan(0);
    expect(container.querySelectorAll('a[href*="calendly.com"]')).toHaveLength(0);
  });

  it('renders product cards from the data rather than hardcoded markup', () => {
    const { container } = renderPage();

    for (const product of products) {
      expect(
        container.querySelector(`a[href="/products#${product.anchor}"]`),
      ).toBeInTheDocument();
    }
  });

  it('links to the registered business information', () => {
    renderPage();

    expect(
      screen.getByRole('link', { name: /Registered business information/i }),
    ).toHaveAttribute('href', '/company-information');
  });
});
