import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import MobileAppPage from '../MobileAppPage';

describe('MobileAppPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <MobileAppPage />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain('The Update Happens');
    expect(container.textContent).toContain('One App, Both Platforms');
    // "25+ Apps on App Store" was an unverifiable claim, and the phone mockup was a
    // grey placeholder graphic labelled as a real interface.
    expect(container.textContent).not.toMatch(/\d+\+\s*Apps on/i);
    expect(container.querySelector('img')).toBeNull();
  });

  it('has CTA buttons', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <MobileAppPage />
        </ModalProvider>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
