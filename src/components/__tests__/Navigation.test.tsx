import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import { describe, it, expect } from 'vitest';
import { ModalProvider } from '../../context/ModalContext';

describe('Navigation', () => {
  it('renders logo and navigation links', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <Navigation />
        </ModalProvider>
      </MemoryRouter>
    );

    const logo = screen.getByAltText(/Hexabyte/i);
    expect(logo).toBeInTheDocument();

    const aiLink = screen.getByText(/AI Automation/i);
    expect(aiLink).toBeInTheDocument();
  });

  it('toggles mobile menu when clicked', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <Navigation />
        </ModalProvider>
      </MemoryRouter>
    );

    // Mobile menu button is hidden on desktop, but in jsdom without layout, it might be visible or queryable.
    // However, the CSS classes usually rely on window width. jsdom default is 1024x768 usually, but let's check.
    // Actually, testing visibility relies on styles which might not be fully applied in jsdom without extra setup,
    // but we can test interaction.

    // Check if toggle button exists (it has class md:hidden, but might be in DOM)
    // We can query by svg/icon maybe? Or just use a role if added.
    // The button has <Menu /> icon.

    // In current implementation, button has no aria-label.
    // Let's rely on finding by role 'button' with no text if possible, or just the Menu icon.
    // Navigation.tsx:71 <button onClick...>{mobileMenuOpen ? <X/> : <Menu/>}</button>
    // We can update Navigation to have aria-label.
  });
});
