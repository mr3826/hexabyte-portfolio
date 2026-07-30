import { Search, Lightbulb, Code, Rocket, Clock, MessageSquare, CheckCircle, ArrowRight, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

import { company } from '@/data/company';

const phases = [
  {
    number: '01',
    title: 'Understand the cost',
    duration: '1-2 weeks',
    icon: Search,
    artifact: 'Scope and price',
    description: 'We sit with how the work runs today, work out what it costs you in hours and money, and agree what better looks like in numbers.',
    output: ['Where the hours go', 'What fixing it costs', 'How we will measure it'],
  },
  {
    number: '02',
    title: 'Agree the plan',
    duration: '1-2 weeks',
    icon: Lightbulb,
    artifact: 'A plan you approve',
    description: 'You see what will be built, what it connects to, and how your data is handled — before anyone writes code, and while changing your mind is still free.',
    output: ['What gets built', 'What it connects to', 'How your data is protected'],
  },
  {
    number: '03',
    title: 'Build it',
    duration: '6-12 weeks',
    icon: Code,
    artifact: 'Working software',
    description: 'Something you can actually use lands every week, so you steer with what you can see rather than with what you imagined at the start.',
    output: ['Weekly working demos', 'Direct access to the builder', 'Your team trained as it lands'],
  },
  {
    number: '04',
    title: 'Keep it running',
    duration: 'Ongoing',
    icon: Rocket,
    artifact: 'A watched system',
    description: 'It is monitored and tuned as your volume grows, and problems reach us before they reach your customers.',
    output: ['Monitoring and alerts', 'Fixes covered for 30 days', 'Changes as you grow'],
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                How We Work
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              You Always Know What You Are{' '}
              <span className="text-primary">Paying For.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Priced before the work starts, something working to look at every week, and the
              person building it on the other end of the call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={company.discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-engineering"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/case-studies"
                className="min-h-[44px] px-8 py-4 bg-secondary border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                See the Results
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4-8</div>
                <div className="text-sm text-muted-foreground">Weeks to Something You Use</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Founder-Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">Progress You Can See</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30-Day</div>
                <div className="text-sm text-muted-foreground">Post-Launch Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Phases - Bento Grid */}
      <section className="py-14 sm:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">How It Goes</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              How We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every phase hands you something real — a price, a plan, working software, a system that is being watched.
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
                    <div className="text-xs text-primary uppercase tracking-wider mb-1">You end up with</div>
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
              <h3 className="text-lg font-semibold mb-2">You talk to the builder</h3>
              <p className="text-sm text-muted-foreground">
                A direct line to the person writing the code. No account manager relaying your question and coming back tomorrow.
              </p>
            </div>

            <div className="bento-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">You see it working every week</h3>
              <p className="text-sm text-muted-foreground">
                See the system working every week. Live deployments, not slide decks.
              </p>
            </div>

            <div className="bento-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nothing moves without your sign-off</h3>
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
            Fair Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What happens in the first two weeks?',
                a: 'We go through how the work runs today, count what it costs you, and check what is realistic. You end up with a written scope, a price and an agreed way to tell whether it worked — before you commit to a build.',
              },
              {
                q: 'How long before my team is using it?',
                a: 'One process automated end to end: 4-6 weeks. Several systems that have to agree with each other: 8-12 weeks. You see working software long before that — every week from the build phase on.',
              },
              {
                q: 'What if we change our mind halfway?',
                a: 'Expected — seeing it working is what tells you what you actually need. Small changes are absorbed as we go. A change of direction gets repriced openly rather than quietly absorbed into a slipping deadline.',
              },
              {
                q: 'Are we locked in to you afterwards?',
                a: 'No. You get the code, the accounts, the documentation and training for your team. If you want someone else to take it over, or to hire in-house, everything they need is already handed over.',
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
            Want to Know What <span className="text-primary">Yours Would Cost?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute call. We will go through how your operation runs today and come back with a scope, a price and an honest view of whether it is worth doing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={company.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
