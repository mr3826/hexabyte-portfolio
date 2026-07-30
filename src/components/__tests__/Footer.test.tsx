import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import Footer from '../Footer';
import { company } from '@/data/company';
import { products } from '@/data/products';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
}

describe('Footer', () => {
  it('states the current positioning and the registered-business trust line', () => {
    renderFooter();

    expect(
      screen.getByText(/Founder-led technology company building practical AI systems/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/is a registered information technology business in Dhaka, Bangladesh/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Hexabyte Technologies\. All rights reserved/i)).toBeInTheDocument();
  });

  it('links to every product from the data rather than a hardcoded list', () => {
    renderFooter();

    for (const product of products) {
      expect(screen.getByRole('link', { name: product.name })).toHaveAttribute(
        'href',
        `/products#${product.anchor}`,
      );
    }
  });

  it('links to the company pages', () => {
    renderFooter();

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Process' })).toHaveAttribute('href', '/process');
    expect(screen.getByRole('link', { name: 'Resources' })).toHaveAttribute('href', '/resources');
  });

  it('lists Company Information exactly once, under Legal & Trust', () => {
    renderFooter();

    const links = screen.getAllByRole('link', { name: 'Company Information' });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', '/company-information');
  });

  it('groups the Easy Moderator legal links under a product heading', () => {
    renderFooter();

    expect(screen.getByText('Easy Moderator', { selector: 'p' })).toBeInTheDocument();
    for (const label of ['Privacy Policy', 'Terms of Service', 'Data Deletion']) {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toBeInTheDocument();
    }
  });

  it('renders contact details from the shared company data', () => {
    const { container } = renderFooter();

    expect(container.querySelector(`a[href="mailto:${company.email}"]`)).toHaveTextContent(
      company.email,
    );
    expect(container.querySelector(`a[href="tel:${company.phoneHref}"]`)).toHaveTextContent(
      company.phoneDisplay,
    );
    expect(screen.getByText(new RegExp(company.address.street.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))).toBeInTheDocument();
  });
});
