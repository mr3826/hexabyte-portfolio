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

    // Sells the outcome, not the toolchain: the page used to open with the list of
    // automation platforms we happen to use.
    expect(container.textContent).toContain('Stop Paying Salaries for');
    expect(container.textContent).toContain('Four Jobs Worth Taking Off a Person');
    expect(container.textContent).not.toMatch(/Zapier|n8n|Power Automate|vector database/i);
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
