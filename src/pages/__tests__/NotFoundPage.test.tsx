import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('NotFoundPage', () => {
  it('renders for an unmatched route', () => {
    renderAt('/does-not-exist');

    expect(screen.getByText(/404 — Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/doesn't exist/i);
  });

  it('offers a way back to Home, Products and Work', () => {
    renderAt('/does-not-exist');

    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Products/i })).toHaveAttribute('href', '/products');
    expect(screen.getByRole('link', { name: /Work/i })).toHaveAttribute('href', '/case-studies');
  });

  it('marks the page noindex while mounted and cleans up afterwards', () => {
    const { unmount } = renderAt('/does-not-exist');

    const meta = document.head.querySelector('meta[name="robots"]');
    expect(meta).not.toBeNull();
    expect(meta?.getAttribute('content')).toContain('noindex');
    expect(document.title).toBe('Page Not Found | Hexabyte Technologies');

    unmount();
    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();
  });
});
