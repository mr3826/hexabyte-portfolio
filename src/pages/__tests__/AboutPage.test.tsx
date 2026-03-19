import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import AboutPage from '../AboutPage';

describe('AboutPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <AboutPage />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain('Founder-Led');
    expect(container.textContent).toContain('Automation Agency');
  });

  it('has CTA buttons', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <AboutPage />
        </ModalProvider>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
