import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import AIAutomationPage from '../AIAutomationPage';

describe('AIAutomationPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <AIAutomationPage />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain('AI Automation');
    expect(container.textContent).toContain('Solutions');
  });

  it('has CTA buttons', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <AIAutomationPage />
        </ModalProvider>
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
