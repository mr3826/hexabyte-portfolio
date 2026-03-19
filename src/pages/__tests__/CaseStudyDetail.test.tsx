import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import CaseStudyDetail from '../CaseStudyDetail';

describe('CaseStudyDetail', () => {
  it('renders a valid case study correctly', () => {
    render(
      <MemoryRouter
        initialEntries={['/case-studies/lead-enrichment-automation']}
      >
        <ModalProvider>
          <Routes>
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          </Routes>
        </ModalProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Lead Enrichment Automation for B2B SaaS/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/The Problem/i)).toBeInTheDocument();
  });

  it('renders not found state for invalid id', () => {
    render(
      <MemoryRouter initialEntries={['/case-studies/invalid-id']}>
        <ModalProvider>
          <Routes>
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          </Routes>
        </ModalProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Case Study Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Case Studies/i)).toBeInTheDocument();
  });
});
