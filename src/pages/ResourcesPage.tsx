import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import {
  Download,
  FileText,
  Calculator,
  ListChecks,
  ArrowRight,
  Check,
  Zap,
  BookOpen,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const leadMagnets = [
  {
    id: 'automation-audit',
    title: 'SMB Automation Audit Checklist',
    description:
      'A comprehensive 25-point checklist to identify automation opportunities in your business. Covers operations, sales, marketing, and customer support workflows.',
    icon: ListChecks,
    pages: '12 pages',
    downloads: '200+',
    cta: 'Download Free Checklist',
    modalId: 'leadmagnet_automation_audit',
    popular: true,
    color: 'primary',
  },
  {
    id: 'roi-calculator',
    title: 'Automation ROI Calculator Template',
    description:
      'Google Sheets template to calculate time savings, cost reduction, and payback period for your automation investments.',
    icon: Calculator,
    pages: 'Spreadsheet',
    downloads: '150+',
    cta: 'Get Free Template',
    modalId: 'leadmagnet_roi_calculator',
    popular: false,
    color: 'accent',
  },
  {
    id: 'shopify-automations',
    title: '5 Shopify Automations Guide',
    description:
      'Step-by-step implementation guide for the highest-impact Shopify automations: inventory sync, order routing, customer tagging, and more.',
    icon: FileText,
    pages: '18 pages',
    downloads: '300+',
    cta: 'Download Guide',
    modalId: 'leadmagnet_shopify_guide',
    popular: true,
    color: 'primary',
  },
  {
    id: 'integration-blueprint',
    title: 'System Integration Decision Framework',
    description:
      'Decision tree and technical criteria for choosing between Make.com, Zapier, n8n, or custom API development for your use case.',
    icon: BookOpen,
    pages: '8 pages',
    downloads: '120+',
    cta: 'Download Framework',
    modalId: 'leadmagnet_integration_blueprint',
    popular: false,
    color: 'accent',
  },
];


export default function ResourcesPage() {
  const { openModal } = useModal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const endpoint = import.meta.env.VITE_FORM_SUBMISSION_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: email.split('@')[0],
            email,
            role: 'Newsletter Subscriber',
            goals: 'Stay updated on automation insights',
            cta_source: 'resources_newsletter',
            referrer: document.referrer || null,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        // Silently continue — subscription UI still confirms
      }
    }

    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <main className="pt-24 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                Free Tools & Resources
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-[1.15]">
              Resources to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Accelerate Your Automation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Free checklists, templates, and guides to help you identify
              automation opportunities and implement them effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Free <span className="text-primary">Downloads</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical tools to audit your operations, calculate ROI, and plan
              your automation roadmap.
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
                          : 'bg-accent/10'
                      } rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          item.color === 'primary'
                            ? 'text-primary'
                            : 'text-accent'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-['Space_Grotesk'] mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{item.pages}</span>
                      </div>
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
                    <Download className="w-4 h-4" />
                    {item.cta}
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

          <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
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
              className="flex-1 min-h-[44px] px-4 py-3 bg-background border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`min-h-[44px] px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                subscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-background hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50'
              }`}
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-14 sm:py-20 bg-secondary/30 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Recommended <span className="text-primary">Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The automation stack we use and recommend for SMB operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Make.com',
                category: 'Automation Platform',
                description: 'Visual workflow builder with 1000+ app integrations',
                pricing: 'From $9/month',
              },
              {
                name: 'Zapier',
                category: 'Automation Platform',
                description: 'Easy automation for non-technical teams',
                pricing: 'From $19/month',
              },
              {
                name: 'n8n',
                category: 'Self-Hosted Automation',
                description: 'Open-source workflow automation with full control',
                pricing: 'Free (self-hosted)',
              },
              {
                name: 'Airtable',
                category: 'Database + Workflows',
                description: 'Relational database with built-in automation',
                pricing: 'From $20/month',
              },
            ].map((tool, idx) => (
              <div
                key={idx}
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
          <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-6">
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
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Call
            </button>
            <Link
              to="/pricing"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
