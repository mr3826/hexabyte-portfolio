import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import WebAppPage from '../WebAppPage';

describe('WebAppPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <WebAppPage />
        </ModalProvider>
      </MemoryRouter>
    );

    // Check for key content
    expect(container.textContent).toContain('Custom');
    expect(container.textContent).toContain('Web Applications');
  });

  it('has CTA buttons', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <WebAppPage />
        </ModalProvider>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
