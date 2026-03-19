import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import CaseStudiesPage from '../CaseStudiesPage';

describe('CaseStudiesPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <CaseStudiesPage />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain('Our');
    expect(container.textContent).toContain('Work');
  });

  it('renders case study cards', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalProvider>
          <CaseStudiesPage />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain('Lead Enrichment Automation');
    expect(container.textContent).toContain('RAG-Based Customer Support');
  });
});
