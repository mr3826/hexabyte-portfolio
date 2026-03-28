import { useModal } from '@/context/ModalContext';
import {
  Check,
  Zap,
  Clock,
  MessageSquare,
  Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceTiers = [
  {
    name: 'Focused Build',
    description: 'Single workflow or integration to solve one critical pain point',
    scope: '1 automation workflow',
    timeline: '3-6 weeks',
    startingFrom: 'From $3,000',
    popular: false,
    features: [
      'Discovery & requirements session',
      'Single workflow design & build',
      'Up to 3 system integrations',
      'Basic testing & documentation',
      '2 weeks post-launch support',
    ],
    idealFor: 'First automation test or single pain point relief',
    cta: 'Discuss Your Project',
    modalId: 'pricing_focused',
  },
  {
    name: 'Systems Integration',
    description: 'Multi-workflow automation connecting your key business tools',
    scope: '3-5 connected workflows',
    timeline: '6-12 weeks',
    startingFrom: 'From $8,000',
    popular: true,
    features: [
      'Full process audit & mapping',
      'Multi-workflow architecture',
      'Up to 8 system integrations',
      'Error handling & monitoring setup',
      'Team training session',
      '4 weeks post-launch support',
      'Slack access during build',
    ],
    idealFor: 'Operations teams ready to automate multiple manual processes',
    cta: 'Discuss System Build',
    modalId: 'pricing_system',
  },
  {
    name: 'Custom Platform',
    description: 'Complex multi-system orchestration or custom tool development',
    scope: 'Custom scope',
    timeline: '12-20 weeks',
    startingFrom: 'Custom quote',
    popular: false,
    features: [
      'End-to-end platform architecture',
      'Unlimited integrations',
      'Custom API development if needed',
      'Advanced monitoring & alerting',
      'Full team training & documentation',
      '8 weeks post-launch support',
      'Quarterly optimization reviews',
    ],
    idealFor: 'Complex operations or custom SaaS extension needs',
    cta: 'Book Architecture Review',
    modalId: 'pricing_custom',
  },
];


export default function PricingPage() {
  const { openModal } = useModal();

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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">
                Fixed-Price. No Surprises.
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-[1.15]">
              Transparent Pricing for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Custom Software Projects
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Every project is scoped before work begins. You get a fixed price, a clear
              milestone plan, and direct founder involvement from first conversation to production.
            </p>

            <div className="inline-flex items-center gap-4 text-sm text-muted-foreground bg-card border border-primary/20 rounded-full px-6 py-3">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" />
                3-20 week timelines
              </span>
              <span className="w-px h-4 bg-border"></span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary" />
                Direct founder work
              </span>
              <span className="w-px h-4 bg-border"></span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4 text-primary" />
                Slack access included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Custom Development</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Bespoke Automation{' '}
              <span className="text-primary">For Unique Needs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When off-the-shelf or productized solutions do not fit, I build 
              custom automation tailored to your exact operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-card border rounded-xl p-8 ${
                  tier.popular
                    ? 'border-primary shadow-lg shadow-primary/20'
                    : 'border-primary/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background text-xs font-semibold rounded-full">
                    Most Common
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">{tier.startingFrom}</div>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="px-3 py-1 bg-secondary rounded-lg font-medium">
                      {tier.scope}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {tier.timeline}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.16em] text-primary mb-3">
                    What is Included
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-primary/10 mb-6">
                  <div className="text-xs text-muted-foreground mb-1">
                    Best for teams who
                  </div>
                  <div className="text-sm font-medium">{tier.idealFor}</div>
                </div>

                <button
                  type="button"
                  onClick={() => openModal(tier.modalId)}
                  className={`w-full min-h-[44px] px-6 py-3 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-primary text-background hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50'
                      : 'bg-secondary border border-primary/30 text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-primary/20 rounded-xl p-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">How pricing works:</span> Every project
              is quoted based on scope complexity, not hours. You receive a fixed price and
              milestone plan before any commitment is made.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-14 sm:py-20 bg-secondary/30 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              How I <span className="text-primary">Price Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              No hourly billing. No hidden fees. Just clear scope and honest pricing.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Discovery Call (Free)',
                desc: 'We discuss your pain points, current tools, and desired outcomes. I ask questions to understand the real scope.',
              },
              {
                step: '02',
                title: 'Scope Document & Quote',
                desc: 'Within 48 hours, you receive a detailed scope document with fixed-price quote, timeline, and deliverables.',
              },
              {
                step: '03',
                title: 'Milestone Payments',
                desc: 'Pay in 2-3 milestones (50% start, 30% midpoint, 20% delivery). No upfront 100% payment required.',
              },
              {
                step: '04',
                title: 'Delivery & Iteration',
                desc: 'Weekly demos, direct Slack access, and iterative refinement based on your feedback.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
            Ready to <span className="text-primary">Automate?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute discovery call. I will ask about your operations, 
            suggest whether a product or custom build fits, and provide a detailed estimate 
            if we are a good match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => openModal('pricing_discovery')}
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Free Discovery Call
            </button>
            <Link
              to="/process"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              See How I Work
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No commitment required. If I cannot help, I will point you to someone who can.
          </p>
        </div>
      </section>
    </main>
  );
}
