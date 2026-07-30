import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import CaseStudiesPage from '../CaseStudiesPage';
import { caseStudies } from '@/data/caseStudies';
import { ModalProvider } from '@/context/ModalContext';

function renderPage() {
  return render(
    <MemoryRouter>
      <ModalProvider>
        <CaseStudiesPage />
      </ModalProvider>
    </MemoryRouter>,
  );
}

describe('CaseStudiesPage', () => {
  it('positions the page honestly about delivered vs in-progress work', () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Systems Delivered\.\s*Products Being Built\./i,
    );
    // "Production Systems. Real Outcomes." overstated the beta builds on this page.
    expect(screen.queryByText(/Production Systems/i)).not.toBeInTheDocument();
  });

  it('renders a card for every case study', () => {
    const { container } = renderPage();

    for (const study of caseStudies) {
      expect(
        container.querySelector(`a[href="/case-studies/${study.id}"]`),
      ).toBeInTheDocument();
    }
  });

  it('labels every card with its evidence type', () => {
    renderPage();

    for (const study of caseStudies) {
      expect(screen.getAllByText(study.evidenceType).length).toBeGreaterThan(0);
    }
  });

  it('offers filters derived from the data', () => {
    renderPage();

    for (const label of ['All', 'Deployed Systems', 'Live Products', 'Beta Product Builds']) {
      expect(screen.getByRole('button', { name: new RegExp(label, 'i') })).toBeInTheDocument();
    }
    // The old technical category labels are gone from the primary filter UI.
    expect(screen.queryByRole('button', { name: /Content Ops Platform/i })).not.toBeInTheDocument();
  });

  it('filters down to the matching evidence type', async () => {
    const { container } = renderPage();

    await userEvent.click(screen.getByRole('button', { name: /Beta Product Builds/i }));

    const expected = caseStudies.filter((s) => s.evidenceType === 'Beta Product Build');
    expect(container.querySelectorAll('a[href^="/case-studies/"]')).toHaveLength(expected.length);
  });
});
