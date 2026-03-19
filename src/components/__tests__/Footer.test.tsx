import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';
import { ModalProvider } from '@/context/ModalContext';

// Mock the ModalContext to intercept the openModal call
const mockOpenModal = vi.fn();

vi.mock('@/context/ModalContext', async () => {
  const actual = (await vi.importActual('@/context/ModalContext')) as any;
  return {
    ...actual,
    useModal: () => ({
      openModal: mockOpenModal,
      closeModal: vi.fn(),
      isModalOpen: false,
    }),
  };
});

describe('Footer Component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <Footer />
        </ModalProvider>
      </MemoryRouter>
    );
    expect(
      screen.getByText(/AI Automation & Web \+ Mobile App Development Agency/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hexabyte\. All rights reserved/i)
    ).toBeInTheDocument();
  });

  it('navigates to correct pages via links', () => {
    render(
      <MemoryRouter>
        <ModalProvider>
          <Footer />
        </ModalProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', { name: /AI Automation/i })
    ).toHaveAttribute('href', '/ai-automation');
    expect(
      screen.getByRole('link', { name: /Web Development/i })
    ).toHaveAttribute('href', '/web-development');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute(
      'href',
      '/about'
    );
  });

  it('calls openModal when Contact button is clicked', () => {
    // Override the mock implementation if needed or just use the global mock setup
    render(
      <MemoryRouter>
        <ModalProvider>
          <Footer />
        </ModalProvider>
      </MemoryRouter>
    );

    const contactButtons = screen.getAllByText(/Contact/i);
    // Find the button specifically (it might be distinguished by role or class, but let's try the button element)
    const button = contactButtons.find((el) => el.tagName === 'BUTTON');

    if (button) {
      fireEvent.click(button);
      expect(mockOpenModal).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Contact button not found');
    }
  });
});
