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

    expect(container.textContent).toContain('Software Your Team Stops');
    expect(container.textContent).toContain('What Comes as Standard');
    // The page presented a grey "Placeholder Image" as a dashboard screenshot.
    expect(container.querySelector('img')).toBeNull();
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
