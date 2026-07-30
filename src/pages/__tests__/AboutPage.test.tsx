import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from '../AboutPage';
import { company } from '@/data/company';
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

  it('uses the standard company CTA', () => {
    renderPage();

    const ctas = screen.getAllByRole('link', { name: /Book a Discovery Call/i });
    expect(ctas.length).toBeGreaterThan(0);
    expect(ctas[0]).toHaveAttribute('href', company.discoveryCallUrl);
  });

  it('renders product cards from the data rather than hardcoded status text', () => {
    const { container } = renderPage();

    for (const product of products) {
      expect(
        container.querySelector(`a[href="/products#${product.anchor}"]`),
      ).toBeInTheDocument();
    }
    // One live product; the other three are in beta. Sourced from ProductStatusBadge.
    expect(screen.getAllByText('Live & Available')).toHaveLength(1);
  });

  it('links to the registered business information', () => {
    renderPage();

    expect(
      screen.getByRole('link', { name: /Registered business information/i }),
    ).toHaveAttribute('href', '/company-information');
  });
});
