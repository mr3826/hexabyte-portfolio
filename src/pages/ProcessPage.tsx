import { Search, Lightbulb, Code, Rocket, Clock, MessageSquare, CheckCircle, ArrowRight, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  {
    number: '01',
    title: 'Discovery',
    duration: '1-2 weeks',
    icon: Search,
    artifact: 'Scope Document',
    description: 'Map business goals, constraints, and success criteria. Define the automation opportunity.',
    output: ['Process audit', 'Tech feasibility', 'Success metrics'],
  },
  {
    number: '02',
    title: 'Architecture',
    duration: '1-2 weeks',
    icon: Lightbulb,
    artifact: 'System Blueprint',
    description: 'Design technical architecture, integrations, and data flows. Approve before building.',
    output: ['Architecture diagram', 'API mapping', 'Security review'],
  },
  {
    number: '03',
    title: 'Build',
    duration: '6-12 weeks',
    icon: Code,
    artifact: 'Production System',
    description: 'Ship in weekly milestones with direct engineering access and continuous demos.',
    output: ['Working demos', 'CI/CD setup', 'Documentation'],
  },
  {
    number: '04',
    title: 'Scale',
    duration: 'Ongoing',
    icon: Rocket,
    artifact: 'Monitored Operations',
    description: 'Instrument, stabilize, and iterate. Production support with 30-day guarantee.',
    output: ['Monitoring', 'Alerts', 'Team training'],
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-24 md:pt-20 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                Engineering Process
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Discovery → Architecture →{' '}
              <span className="text-primary">Ship.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              4-phase delivery framework. Scoped before work begins, demos every week, 
              production in weeks not quarters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://calendly.com/hexabyte/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-engineering"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/case-studies"
                className="min-h-[44px] px-8 py-4 bg-secondary border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                View Deployments
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4-8</div>
                <div className="text-sm text-muted-foreground">Weeks Discovery→Ship</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Engineering-Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">Working Demos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30-Day</div>
                <div className="text-sm text-muted-foreground">Production Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Phases - Bento Grid */}
      <section className="py-14 sm:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">4-Phase Framework</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              How We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each phase produces a concrete artifact. No fluff. Just deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.number} className="bento-card group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary">Phase {phase.number}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {phase.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>

                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 mb-4">
                    <div className="text-xs text-primary uppercase tracking-wider mb-1">Artifact</div>
                    <div className="text-sm font-semibold">{phase.artifact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {phase.output.map((item) => (
                      <span key={item} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Communication Promise */}
      <section className="py-14 sm:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Engagement Model</p>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Engineering-First Communication
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Direct technical access. No account managers. No information loss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bento-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Engineering Access</h3>
              <p className="text-sm text-muted-foreground">
                Slack channel with the lead engineer. Real-time technical discussions, no intermediaries.
              </p>
            </div>

            <div className="bento-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weekly Working Demos</h3>
              <p className="text-sm text-muted-foreground">
                See the system working every week. Live deployments, not slide decks.
              </p>
            </div>

            <div className="bento-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Milestone Gates</h3>
              <p className="text-sm text-muted-foreground">
                Each phase requires sign-off before proceeding. No surprises at delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-primary uppercase tracking-wider text-center mb-3">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Process Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What happens during Discovery?',
                a: 'Process audit, technical feasibility assessment, and scope document. 1-2 weeks. You get a clear automation roadmap with timeline and success metrics.',
              },
              {
                q: 'How long until production?',
                a: 'Simple automations: 4-6 weeks. Multi-system orchestration: 8-12 weeks. RAG pipelines and AI agents: 6-10 weeks. We scope before we commit.',
              },
              {
                q: 'What if requirements change?',
                a: 'Milestone gates allow scope adjustments at phase boundaries. Minor changes accommodated within buffer. Major pivots may require timeline adjustment.',
              },
              {
                q: 'What documentation is included?',
                a: 'Architecture diagrams, API docs, deployment runbooks, monitoring dashboards, and team training materials. Your team can operate and extend the system.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bento-card">
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
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Ready to <span className="text-primary">Ship?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute discovery call. We'll map your automation requirements and define a production-ready architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
