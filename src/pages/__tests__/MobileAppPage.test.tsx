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

    expect(container.textContent).toContain('Cross-Platform');
    expect(container.textContent).toContain('Mobile Apps');
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
