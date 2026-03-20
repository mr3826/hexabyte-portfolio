import { X, Check } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { getAttributionFromUrl, trackEvent } from '@/utils/analytics';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // User Information
    name: '',
    email: '',
    company: '',
    phone: '',
    // Project Details
    role: '',
    projectType: [] as string[],
    currentTools: [] as string[],
    otherTool: '',
    challenges: [] as string[],
    goals: '',
  });

  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const phoneId = useId();
  const roleId = useId();
  const toolsOtherId = useId();
  const goalsId = useId();

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      lastFocusedElementRef.current?.focus();
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleClose();
      return;
    }

    if (event.key !== 'Tab' || !modalRef.current) {
      return;
    }

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const attribution = getAttributionFromUrl();
    trackEvent('inquiry_submitted', {
      role: formData.role,
      project_type_count: formData.projectType.length,
      challenges_count: formData.challenges.length,
      has_company: Boolean(formData.company),
      ...attribution,
    });
    // In production, send formData to your backend/CRM
    // Move to calendar step
    setStep(2);
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onKeyDown={handleDialogKeyDown}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-primary/20 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          aria-label="Close project inquiry modal"
          className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Indicator */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all ${
                step === 1
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/20 text-primary'
              }`}
            >
              {step > 1 ? <Check className="w-4 h-4" /> : '1'}
            </div>
            <div
              className={`w-16 h-0.5 transition-all ${
                step === 2 ? 'bg-primary' : 'bg-primary/20'
              }`}
            />
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all ${
                step === 2
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/20 text-muted-foreground'
              }`}
            >
              2
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span className={step === 1 ? 'text-primary' : ''}>
              Project Details
            </span>
            <span className={step === 2 ? 'text-primary' : ''}>
              Book Your Call
            </span>
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2
                id="project-modal-title"
                className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] mb-2"
              >
                Book Your{' '}
                <span className="text-primary">Discovery Inquiry</span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about yourself and your project to book a free strategy
                call.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Information Section */}
              <div className="bg-secondary/30 border border-primary/10 rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-semibold text-primary mb-4">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor={nameId} className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={emailId} className="block text-sm font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor={companyId} className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      id={companyId}
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor={phoneId} className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Role/Company Context */}
              <div>
                <label htmlFor={roleId} className="block text-sm font-semibold mb-2">
                  What best describes you?{' '}
                  <span className="text-destructive">*</span>
                </label>
                <select
                  id={roleId}
                  required
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select your role...</option>
                  <option value="founder">Founder / Co-Founder</option>
                  <option value="startup">Startup Team</option>
                  <option value="agency">Agency</option>
                  <option value="business">SME / Business Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Project Type */}
              <fieldset>
                <legend className="block text-sm font-semibold mb-3">
                  What type of project?{' '}
                  <span className="text-destructive">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'AI Automation',
                    'Web Application',
                    'Mobile Application',
                    'Combination of the above',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          projectType: toggleArrayItem(
                            formData.projectType,
                            type
                          ),
                        })
                      }
                      aria-pressed={formData.projectType.includes(type)}
                      className={`px-4 py-3 text-sm rounded-lg border transition-all text-left ${
                        formData.projectType.includes(type)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-input-background border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            formData.projectType.includes(type)
                              ? 'bg-primary border-primary'
                              : 'border-primary/30'
                          }`}
                        >
                          {formData.projectType.includes(type) && (
                            <Check className="w-3 h-3 text-background" />
                          )}
                        </div>
                        <span>{type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Current Tools */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Current tools or systems?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {[
                    'Google Sheets',
                    'Airtable',
                    'CRM (HubSpot/Salesforce)',
                    'Internal tools',
                    'No existing system',
                  ].map((tool) => (
                    <button
                      key={tool}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          currentTools: toggleArrayItem(
                            formData.currentTools,
                            tool
                          ),
                        })
                      }
                      className={`px-3 py-2 text-sm rounded-lg border transition-all text-left ${
                        formData.currentTools.includes(tool)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-input-background border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
                <input
                  id={toolsOtherId}
                  type="text"
                  placeholder="Other tools (optional)"
                  value={formData.otherTool}
                  onChange={(e) =>
                    setFormData({ ...formData, otherTool: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              {/* Main Challenges */}
              <fieldset>
                <legend className="block text-sm font-semibold mb-3">
                  Main challenges or pain points?{' '}
                  <span className="text-destructive">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Too much manual work',
                    'Disconnected tools',
                    'Slow response times',
                    'Scaling issues',
                    'Poor data visibility',
                    'Need MVP fast',
                  ].map((challenge) => (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          challenges: toggleArrayItem(
                            formData.challenges,
                            challenge
                          ),
                        })
                      }
                      aria-pressed={formData.challenges.includes(challenge)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all text-left ${
                        formData.challenges.includes(challenge)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-input-background border-primary/20 hover:border-primary/50'
                      }`}
                    >
                      {challenge}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Project Goals */}
              <div>
                <label htmlFor={goalsId} className="block text-sm font-semibold mb-2">
                  What do you want to achieve?{' '}
                  <span className="text-destructive">*</span>
                </label>
                <textarea
                  id={goalsId}
                  required
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                  placeholder="Automate processes, launch an MVP, scale an app, improve efficiency..."
                  rows={4}
                  className="w-full px-4 py-3 bg-input-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 space-y-3">
              <button
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.role ||
                  formData.projectType.length === 0 ||
                  formData.challenges.length === 0 ||
                  !formData.goals
                }
                className="w-full min-h-[44px] px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Book a Call
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Free 20-30 min strategy call. No obligation.
              </p>
            </div>
          </form>
        ) : (
          <div className="px-8 pb-8">
            {/* Calendar Step */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] mb-2">
                Book Your Free{' '}
                <span className="text-primary">Strategy Call</span>
              </h2>
              <p className="text-muted-foreground">
                Thanks, {formData.name.split(' ')[0]}! We have captured your
                project details and will use them to make your discovery call
                focused and actionable.
              </p>
            </div>

            {/* Calendar Embed Placeholder */}
            <div className="bg-secondary/50 border border-primary/20 rounded-xl p-12 text-center">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Scheduling Step</h3>
                <p className="text-sm text-muted-foreground">
                  Your scheduling embed will appear here (Calendly / Cal.com).
                  Until integration is connected, we follow up manually within
                  one business day.
                </p>
                <div className="pt-4">
                  <p className="text-xs text-muted-foreground mb-3">
                    Add your calendar embed code here:
                  </p>
                  <code className="text-xs bg-background px-3 py-2 rounded block break-all">
                    {`<!-- Calendly inline widget -->`}
                  </code>
                  <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>Pre-filled info:</strong>
                      <br />
                      {formData.name} • {formData.email}
                      {formData.company && ` • ${formData.company}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-6 min-h-[44px] px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
