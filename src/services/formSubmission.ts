/**
 * Form Submission Service
 * Handles persistence of inquiry form data to backend endpoint
 * Supports integration with webhooks, APIs, and CRM services
 */

export interface InquiryFormData {
  // User Information
  name: string;
  email: string;
  company: string;
  phone: string;
  // Project Details
  role: string;
  projectType: string[];
  currentTools: string[];
  otherTool: string;
  challenges: string[];
  goals: string;
  // Attribution
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  // Intent signals
  cta_source?: string;
  inquiry_started_at?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  nextStep?: string;
}

/**
 * Submit inquiry form data to backend
 * In production, configure the FORM_SUBMISSION_ENDPOINT environment variable
 * or deployment platform (Vercel, Netlify, etc.) to route to your backend
 */
export async function submitInquiryForm(
  formData: InquiryFormData
): Promise<SubmissionResponse> {
  try {
    // Get the endpoint from environment or use default
    const endpoint =
      import.meta.env.VITE_FORM_SUBMISSION_ENDPOINT ||
      '/api/inquiries/submit';

    console.log('[FormSubmission] Submitting inquiry to:', endpoint);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add CSRF token if available
        ...(typeof document !== 'undefined' &&
          document.querySelector('meta[name="csrf-token"]') && {
            'X-CSRF-Token': document
              .querySelector('meta[name="csrf-token"]')
              ?.getAttribute('content') || '',
          }),
      },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Form submission failed: ${response.status} ${response.statusText}`
      );
    }

    const result: SubmissionResponse = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Form submission failed');
    }

    console.log('[FormSubmission] Success:', result);
    return result;
  } catch (error) {
    console.error('[FormSubmission] Error:', error);

    // In production, you may want to send this to error tracking (Sentry, etc.)
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Failed to submit inquiry form',
    };
  }
}

/**
 * Send inquiry via email as fallback
 * This is a placeholder for email notification service
 * In production, integrate with SendGrid, Mailgun, or similar
 */
export async function sendInquiryEmail(
  formData: InquiryFormData
): Promise<boolean> {
  try {
    // Placeholder for email service integration
    console.log('[FormSubmission] Email fallback - data ready for sending:', {
      to: formData.email,
      subject: 'Inquiry Confirmation',
      replyTo: formData.email,
    });
    return true;
  } catch (error) {
    console.error('[FormSubmission] Email error:', error);
    return false;
  }
}

/**
 * Validate form data before submission
 */
export function validateInquiryForm(
  formData: InquiryFormData
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Valid email is required';
  }

  if (!formData.role?.trim()) {
    errors.role = 'Please select your role';
  }

  if (formData.projectType.length === 0) {
    errors.projectType = 'Please select at least one project type';
  }

  if (!formData.goals?.trim()) {
    errors.goals = 'Please describe your goals';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
