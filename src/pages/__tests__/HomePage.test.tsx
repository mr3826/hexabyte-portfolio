import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';
import { describe, it, expect } from 'vitest';
import { ModalProvider } from '../../context/ModalContext';

describe('HomePage', () => {
  it('renders hero section with main headline', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <HomePage />
        </ModalProvider>
      </MemoryRouter>
    );

    const headline = screen.getByText(/We Build AI Automation/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders services section', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <HomePage />
        </ModalProvider>
      </MemoryRouter>
    );

    const servicesTitle = screen.getByRole('heading', {
      name: /Our Services/i,
    });
    expect(servicesTitle).toBeInTheDocument();
  });
});
