import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '../HomePage';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { ModalProvider } from '@/context/ModalContext';

function renderPage() {
  return render(
    <MemoryRouter>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </MemoryRouter>,
  );
}

describe('HomePage', () => {
  it('renders the hero headline and the standard company CTAs', () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /The Work That Eats Your Day,\s*Running On Its Own/i,
    );

    const ctas = screen.getAllByRole('link', { name: /Book a Discovery Call/i });
    expect(ctas.length).toBeGreaterThan(0);
    expect(ctas[0]).toHaveAttribute('href', company.discoveryCallUrl);
  });

  it('derives the product count from the data instead of hardcoding it', () => {
    renderPage();

    expect(screen.getByText('Focused Products')).toBeInTheDocument();
    expect(screen.getByText(String(products.length))).toBeInTheDocument();
    // The old signal could drift from products.ts by hand.
    expect(screen.queryByText('Products in Beta')).not.toBeInTheDocument();
  });

  it('renders a card for every product', () => {
    const { container } = renderPage();

    for (const product of products) {
      expect(
        container.querySelector(`a[href="/products#${product.anchor}"]`),
      ).toBeInTheDocument();
    }
  });

  it('does not format company copy as a testimonial quotation', () => {
    renderPage();

    expect(screen.queryByText(/layers of account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Founder-Led Execution/i)).not.toBeInTheDocument();
    // The same ground is covered by a plain section instead.
    expect(screen.getByRole('heading', { name: 'How We Work' })).toBeInTheDocument();
  });
});
