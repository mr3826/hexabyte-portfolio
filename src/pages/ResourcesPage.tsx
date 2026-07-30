import { useEffect, useRef, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import {
  Calculator,
  ListChecks,
  ArrowRight,
  Check,
  AlertCircle,
  Zap,
  BookOpen,
  Mail,
  Shield,
} from 'lucide-react';

import { submitNewsletter } from '@/services/formSubmission';

/**
 * These resources are request-only: no files are published yet, so nothing here
 * promises a download or states a page count it cannot deliver. Restore
 * download wording once the assets exist in public/.
 */
const leadMagnets = [
  {
    id: 'automation-audit',
    title: 'SMB Automation Audit Checklist',
    description:
      'A checklist for identifying automation opportunities across operations, sales, marketing, and customer support workflows.',
    icon: ListChecks,
    modalId: 'leadmagnet_automation_audit',
    popular: true,
    color: 'primary',
  },
  {
    id: 'roi-calculator',
    title: 'Automation ROI Calculator Template',
    description:
      'A spreadsheet for working out time savings, cost reduction, and payback period on an automation investment.',
    icon: Calculator,
    modalId: 'leadmagnet_roi_calculator',
    popular: false,
    color: 'accent',
  },
  {
    id: 'ai-commerce-launch',
    title: 'AI Commerce Launch Checklist',
    description:
      'What to prepare before launching a Bangladesh-focused online store: product data, store structure, checkout and COD controls, courier setup, customer messaging, and analytics.',
    icon: Shield,
    modalId: 'leadmagnet_ai_commerce_launch',
    popular: true,
    color: 'success',
  },
  {
    id: 'integration-blueprint',
    title: 'System Integration Decision Framework',
    description:
      'Technical criteria for choosing between Make.com, Zapier, n8n, or custom API development for a given use case.',
    icon: BookOpen,
    modalId: 'leadmagnet_integration_blueprint',
    popular: false,
    color: 'accent',
  },
];

type SubscribeState = 'idle' | 'submitting' | 'success' | 'error';

export default function ResourcesPage() {
  const { openModal } = useModal();
  const [email, setEmail] = useState('');
  const [subscribeState, setSubscribeState] = useState<SubscribeState>('idle');
  const [subscribeError, setSubscribeError] = useState('');
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribeState === 'submitting') return;

    setSubscribeState('submitting');
    setSubscribeError('');

    const result = await submitNewsletter({ email, cta_source: 'resources_newsletter' });

    if (!result.success) {
      // Keep the entered email so a retry does not mean retyping it.
      setSubscribeState('error');
      setSubscribeError(
        'We could not complete your subscription. Please try again, or email us directly.',
      );
      return;
    }

    setSubscribeState('success');
    setEmail('');
    resetTimer.current = setTimeout(() => setSubscribeState('idle'), 4000);
  };

  return (
    <main className="pt-[108px] md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Same technical grid as the homepage and Products page. Previously a cyan
            radial (#00d9ff) left over from an older palette, which matched nothing. */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                Free Tools & Resources
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] tracking-tight">
              Resources to{' '}
              <span className="text-primary">Accelerate Your Automation</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Checklists, templates, and frameworks for identifying automation
              opportunities and implementing them effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Request a <span className="text-primary">Resource</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us which one you need and we will send it over, along with any context
              specific to your setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadMagnets.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`relative bg-card border rounded-xl p-6 sm:p-8 ${
                    item.popular
                      ? 'border-primary shadow-lg shadow-primary/10'
                      : 'border-primary/20'
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-background text-xs font-semibold rounded-full">
                      Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${
                        item.color === 'primary'
                          ? 'bg-primary/10'
                          : item.color === 'accent'
                          ? 'bg-accent/10'
                          : 'bg-success/10'
                      } rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          item.color === 'primary'
                            ? 'text-primary'
                            : item.color === 'accent'
                            ? 'text-accent'
                            : 'text-success'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">Preview resource</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openModal(item.modalId)}
                    className={`w-full min-h-[44px] px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      item.popular
                        ? 'bg-primary text-background hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50'
                        : 'bg-secondary border border-primary/30 text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    Request this resource
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-14 sm:py-20 bg-secondary/30 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Automation Insights in Your Inbox
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Weekly tips on identifying automation opportunities, tool comparisons,
            and real case studies from founder-led delivery.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-invalid={subscribeState === 'error'}
              aria-describedby="newsletter-status"
              className="flex-1 min-h-[44px] px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={subscribeState === 'submitting' || subscribeState === 'success'}
              className={`min-h-[44px] px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-80 ${
                subscribeState === 'success'
                  ? 'bg-success text-background'
                  : 'bg-primary text-background hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50'
              }`}
            >
              {subscribeState === 'success' ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  Subscribed
                </>
              ) : subscribeState === 'submitting' ? (
                'Subscribing…'
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>

          <div id="newsletter-status" role="status" aria-live="polite" className="mt-4">
            {subscribeState === 'error' ? (
              <p className="text-sm text-destructive inline-flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                {subscribeError}
              </p>
            ) : subscribeState === 'success' ? (
              <p className="text-sm text-success">You&apos;re on the list.</p>
            ) : (
              <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
            )}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-14 sm:py-20 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Recommended <span className="text-primary">Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The automation stack we use and recommend for SMB operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              // Vendor pricing changes; it is not hardcoded here.
              {
                name: 'Make.com',
                category: 'Automation Platform',
                description: 'Visual workflow builder with a large integration catalogue',
                pricing: 'Pricing varies by plan',
              },
              {
                name: 'Zapier',
                category: 'Automation Platform',
                description: 'Easy automation for non-technical teams',
                pricing: 'Pricing varies by plan',
              },
              {
                name: 'n8n',
                category: 'Self-Hosted Automation',
                description: 'Open-source workflow automation with full control',
                pricing: 'Self-hosted or paid cloud',
              },
              {
                name: 'Airtable',
                category: 'Database + Workflows',
                description: 'Relational database with built-in automation',
                pricing: 'Pricing varies by plan',
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-card border border-primary/20 rounded-lg p-5 hover:border-primary/50 transition-all"
              >
                <div className="text-xs text-primary mb-1">{tool.category}</div>
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {tool.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {tool.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Implement</span> These
            Strategies?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free discovery call to discuss your specific automation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => openModal('resources_final_cta')}
              className="min-h-[44px] px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}