import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import ResourcesPage from '../ResourcesPage';
import { ModalProvider } from '@/context/ModalContext';

function renderPage() {
  return render(
    <MemoryRouter>
      <ModalProvider>
        <ResourcesPage />
      </ModalProvider>
    </MemoryRouter>,
  );
}

describe('ResourcesPage newsletter', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it('reports an error and keeps the email when the request fails', async () => {
    vi.stubEnv('VITE_FORM_SUBMISSION_ENDPOINT', 'https://example.test/submit');
    vi.mocked(fetch).mockRejectedValue(new Error('network down'));

    renderPage();

    const input = screen.getByPlaceholderText('Enter your email');
    await userEvent.type(input, 'someone@example.com');
    await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    await waitFor(() => {
      expect(screen.getByText(/could not complete your subscription/i)).toBeInTheDocument();
    });

    expect(screen.queryByText(/Subscribed/i)).not.toBeInTheDocument();
    expect(input).toHaveValue('someone@example.com');
  });

  it('does not claim success when no endpoint is configured', async () => {
    vi.stubEnv('VITE_FORM_SUBMISSION_ENDPOINT', '');

    renderPage();

    await userEvent.type(screen.getByPlaceholderText('Enter your email'), 'someone@example.com');
    await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    await waitFor(() => {
      expect(screen.getByText(/could not complete your subscription/i)).toBeInTheDocument();
    });

    expect(fetch).not.toHaveBeenCalled();
  });

  it('confirms only after a successful response', async () => {
    vi.stubEnv('VITE_FORM_SUBMISSION_ENDPOINT', 'https://example.test/submit');
    vi.mocked(fetch).mockResolvedValue({ ok: true } as Response);

    renderPage();

    const input = screen.getByPlaceholderText('Enter your email');
    await userEvent.type(input, 'someone@example.com');
    await userEvent.click(screen.getByRole('button', { name: /Subscribe/i }));

    await waitFor(() => {
      expect(screen.getByText(/You're on the list/i)).toBeInTheDocument();
    });

    expect(input).toHaveValue('');
  });
});

describe('ResourcesPage resources', () => {
  it('does not promise downloads or page counts for files that do not exist', () => {
    renderPage();

    expect(screen.queryByText(/Download Free Checklist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\d+ pages/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Request this resource/i })).toHaveLength(4);
  });

  it('does not hardcode vendor pricing', () => {
    renderPage();

    expect(screen.queryByText(/From \$\d+\/month/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Pricing varies by plan/i).length).toBeGreaterThan(0);
  });
});
