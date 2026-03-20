import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectModal from '../ProjectModal';

describe('ProjectModal Component', () => {
  it('does not render when isOpen is false', () => {
    render(<ProjectModal isOpen={false} onClose={vi.fn()} />);
    expect(screen.queryByText(/Book Your/i)).not.toBeInTheDocument();
  });

  it('renders correctly when isOpen is true', () => {
    render(<ProjectModal isOpen={true} onClose={vi.fn()} />);
    expect(
      screen.getByRole('heading', { name: /Book Your Discovery Inquiry/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Tell us about yourself/i)).toBeInTheDocument();
  });

  it('shows validation errors if form is submitted empty', () => {
    // The current implementation disables the submit button if fields are empty,
    // so we test that the button is disabled.
    render(<ProjectModal isOpen={true} onClose={vi.fn()} />);

    const submitButton = screen.getByRole('button', {
      name: /Continue to Book a Call/i,
    });
    expect(submitButton).toBeDisabled();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = vi.fn();
    render(<ProjectModal isOpen={true} onClose={onCloseMock} />);

    fireEvent.click(
      screen.getByRole('button', { name: /Close project inquiry modal/i })
    );

    expect(onCloseMock).toHaveBeenCalled();
  });
});
