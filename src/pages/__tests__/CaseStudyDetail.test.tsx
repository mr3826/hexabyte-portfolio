import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import CaseStudyDetail from '../CaseStudyDetail';
import { caseStudies } from '@/data/caseStudies';
import { ModalProvider } from '@/context/ModalContext';

function renderAt(id: string) {
  return render(
    <MemoryRouter initialEntries={[`/case-studies/${id}`]}>
      <ModalProvider>
        <Routes>
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        </Routes>
      </ModalProvider>
    </MemoryRouter>,
  );
}

describe('CaseStudyDetail', () => {
  it('renders a real case study from the data', () => {
    const study = caseStudies[0];
    renderAt(study.id);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(study.title);
    expect(screen.getByText(study.problem.title)).toBeInTheDocument();
  });

  it('renders the shared 404 page for an unknown id', () => {
    renderAt('not-a-real-case-study');

    expect(screen.getByText(/404 — Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Work/i })).toHaveAttribute('href', '/case-studies');
    // Unknown ids must be noindexed, same as any other unmatched route.
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain(
      'noindex',
    );
  });
});
