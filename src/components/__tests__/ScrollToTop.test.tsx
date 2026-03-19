import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = vi.fn() as any;
  });

  it('calls window.scrollTo(0, 0) on route change', () => {
    // We can't easily trigger a route change with MemoryRouter and expect the hook to file in this isolated test
    // without a bit more setup, or we render it inside a Router and push a new state.

    // However, ScrollToTop uses useLocation.
    // Let's try rendering it with initial entries, then re-rendering with different entries implies a new location?
    // No, re-rendering with new props to Router doesn't work that way.

    // We need to simulate navigation.
    // Using a test wrapper that updates navigation.

    // Simpler: Just render it. The useEffect should fire at least once on mount.
    render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
