import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import ScrollToTop from '../ScrollToTop';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ScrollToTop />
    </MemoryRouter>,
  );
}

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = '';
  });

  it('scrolls to the top on a plain route change', () => {
    renderAt('/products');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('scrolls to the hash target instead of the top', () => {
    const section = document.createElement('section');
    section.id = 'tradeflow';
    document.body.appendChild(section);

    renderAt('/products#tradeflow');

    expect(section.scrollIntoView).toHaveBeenCalled();
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('does not jump to the top when a hash target is missing', () => {
    renderAt('/products#not-on-this-page');
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
