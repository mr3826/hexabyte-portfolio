import { useModal } from '@/context/ModalContext';
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Zap,
  Calendar,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  {
    number: '01',
    title: 'Discovery',
    duration: 'Phase 1',
    icon: Search,
    description:
      'We map your business goals, operational constraints, and success criteria in a focused strategy session.',
    deliverables: [
      'Business process audit',
      'Automation opportunity assessment',
      'Technical feasibility review',
      'Success metrics definition',
    ],
    outcome: 'Clear scope document with prioritized automation roadmap',
  },
  {
    number: '02',
    title: 'Architecture',
    duration: 'Phase 2',
    icon: Lightbulb,
    description:
      'Design the technical architecture and workflow automation with mobile-first delivery assumptions.',
    deliverables: [
      'System architecture diagram',
      'Integration mapping',
      'Data flow documentation',
      'Security & compliance review',
    ],
    outcome: 'Approved technical blueprint ready for implementation',
  },
  {
    number: '03',
    title: 'Build',
    duration: 'Phase 3',
    icon: Code,
    description:
      'Ship in weekly milestones with direct founder communication and progress visibility.',
    deliverables: [
      'Weekly working demos',
      'Milestone-based delivery',
      'Direct Slack access',
      'Continuous integration setup',
    ],
    outcome: 'Production-ready automation system with documentation',
  },
  {
    number: '04',
    title: 'Scale',
    duration: 'Phase 4',
    icon: Rocket,
    description:
      'Instrument workflows, stabilize operations, and iterate based on real-world usage.',
    deliverables: [
      'Performance monitoring setup',
      'Error handling & alerts',
      'Team training session',
      '30-day support period',
    ],
    outcome: 'Stable, monitored system with team ready to operate',
  },
];

export default function ProcessPage() {
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                How We Work
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-[1.15]">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Think, Scope, and Deliver
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A founder-led process designed for speed, clarity, and measurable
              operational outcomes. No hidden handoffs, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => openModal('process_hero_primary')}
                className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
              >
                Start Your Discovery
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/case-studies"
                className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                See Past Deliveries
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Scoped</div>
                <div className="text-sm text-muted-foreground">Before Work Begins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Founder-Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">Progress Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30-Day</div>
                <div className="text-sm text-muted-foreground">Post-Launch Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              A <span className="text-primary">4-Phase</span> Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project follows this structure. Timelines vary by scope — most land between
              6 and 20 weeks. We scope before we commit, so you get a clear estimate before work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.number}
                  className="bg-card border border-primary/20 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-primary">
                          Phase {phase.number}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-['Space_Grotesk']">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{phase.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Outcome:</span>
                      <span className="text-sm text-muted-foreground">
                        {phase.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Communication Promise */}
      <section className="py-14 sm:py-20 bg-secondary/30 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Communication <span className="text-primary">Guarantee</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Direct founder access means clear accountability and no information loss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Slack Access</h3>
              <p className="text-sm text-muted-foreground">
                Real-time communication with the founder throughout the project. No account
                managers or intermediaries.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weekly Demos</h3>
              <p className="text-sm text-muted-foreground">
                See progress every week with working demonstrations. Adjust priorities based
                on what you see.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Milestone Approval</h3>
              <p className="text-sm text-muted-foreground">
                No surprise deliveries. Each phase requires your sign-off before proceeding
                to the next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
            Process <span className="text-primary">FAQ</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What happens during the Discovery phase?',
                a: 'We conduct a comprehensive audit of your current operations, identify automation opportunities, and define success metrics. You receive a detailed scope document with prioritized recommendations and timeline.',
              },
              {
                q: 'Can the timeline be shortened or extended?',
                a: 'Yes. Simple automations (2-3 integrations) can be delivered in 6-8 weeks. Complex multi-system orchestration may require 14-16 weeks. We adjust based on your specific needs.',
              },
              {
                q: 'What if requirements change mid-project?',
                a: 'We plan for this. The milestone structure allows for scope adjustments at phase boundaries. Minor changes are accommodated; major pivots may require timeline adjustments.',
              },
              {
                q: 'How do you handle project delays?',
                a: 'Transparency is key. If a technical challenge emerges, you hear about it immediately with options and revised timeline. No surprises at delivery time.',
              },
              {
                q: 'What documentation do I receive?',
                a: 'Complete system architecture, API documentation, workflow diagrams, training materials, and runbooks for your team to operate and extend the system.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Start Your{' '}
            <span className="text-primary">12-Week Transformation?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a discovery call to map your automation roadmap and see if we're a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('process_final_cta')}
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
