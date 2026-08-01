import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import CaseStudiesPage from '../CaseStudiesPage';
import { caseStudies, CASE_STUDY_DOMAINS } from '@/data/caseStudies';
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
  it('leads on the business result rather than on delivery status', () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Operations That Stopped\s*Costing What They Used To/i,
    );
    // The page used to sort work by release state; that is no longer published.
    expect(screen.queryByText(/Products Being Built/i)).not.toBeInTheDocument();
  });

  it('renders a card for every case study', () => {
    const { container } = renderPage();

    for (const study of caseStudies) {
      expect(
        container.querySelector(`a[href="/case-studies/${study.id}"]`),
      ).toBeInTheDocument();
    }
  });

  it('shows the operational result on every card', () => {
    renderPage();

    for (const study of caseStudies) {
      expect(screen.getAllByText(study.impact).length).toBeGreaterThan(0);
    }
  });

  it('offers filters derived from the domains present in the data', () => {
    renderPage();

    for (const label of ['All', ...CASE_STUDY_DOMAINS]) {
      // Match the aria-label, which is the accessible name here. The looser
      // /All/i this replaced also matched "Book a Discovery Call" once that
      // stopped being a link and became a button.
      expect(
        screen.getByRole('button', { name: `Filter work by ${label}` }),
      ).toBeInTheDocument();
    }
    // No filter may reintroduce a release state.
    expect(
      screen.queryByRole('button', { name: /beta|live|deployed|R&D/i }),
    ).not.toBeInTheDocument();
  });

  it('filters down to the selected domain', async () => {
    const { container } = renderPage();
    const domain = CASE_STUDY_DOMAINS[0];

    await userEvent.click(screen.getByRole('button', { name: new RegExp(domain, 'i') }));

    const expected = caseStudies.filter((s) => s.domain === domain);
    expect(expected.length).toBeGreaterThan(0);
    expect(container.querySelectorAll('a[href^="/case-studies/"]')).toHaveLength(expected.length);
  });
});
