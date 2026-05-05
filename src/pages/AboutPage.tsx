import { Zap, Package, Layers, Shield, ArrowRight, Cpu, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder.png';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-background pt-20">

      {/* Hero — Origin Story */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Select Projects</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
                Built Products First.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  The Agency Followed.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                I didn't start Hexabyte to take on projects. I started building products
                because I kept seeing the same problems go unsolved — e-commerce operators
                drowning in spreadsheets, buying houses running supply chains on WhatsApp
                voice notes, B2B teams losing hours every day to work that software should handle.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Easy Moderator and TradeFlow were built to solve those problems directly.
                The agency work came from clients who saw what was possible and wanted the
                same depth of thinking applied to their own operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/hexabyte/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-engineering"
                >
                  Book Engineering Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/case-studies"
                  className="min-h-[44px] px-8 py-4 border border-border text-foreground rounded-lg hover:bg-secondary transition-all font-medium inline-flex items-center justify-center gap-2"
                >
                  View Deployments
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                  src={founderImage}
                  alt="Founder, Hexabyte"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section id="principles" className="py-16 sm:py-20 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Engineering Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Opinionated stances on how we build systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                num: '01',
                icon: Cpu,
                title: 'Ship Fast',
                body: 'Production in weeks, not quarters. Working systems over perfect specs. We deploy early and iterate with real data.',
              },
              {
                num: '02',
                icon: Shield,
                title: 'Own the Stack',
                body: 'Full accountability from API to UI. No handoffs, no gaps. The engineer who designs it deploys it and monitors it.',
              },
              {
                num: '03',
                icon: Bot,
                title: 'Measure Everything',
                body: 'Latency, throughput, error rates. If it moves, we instrument it. Dashboards are not optional — they\'re part of the deliverable.',
              },
              {
                num: '04',
                icon: Layers,
                title: 'Scale First',
                body: 'Built for 10x load from day one. No "we\'ll fix it later" architecture. Horizontal scaling should be a config change, not a rewrite.',
              },
            ].map(({ num, icon: Icon, title, body }) => (
              <div key={title} className="bento-card group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{num}</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products snapshot */}
      <section className="py-16 sm:py-20 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.16em] text-primary mb-3">Live Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              What We Built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two products. Both live. Both built from observed problems, not speculation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold font-['Space_Grotesk']">Easy Moderator</div>
                  <div className="text-xs text-primary font-medium">Live & Available</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Multi-tenant commerce operations platform — role-aware moderation workflows,
                social platform integration hooks, and automated test pipelines for release confidence.
              </p>
              <Link
                to="/products#easy-moderator"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card border border-accent/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-bold font-['Space_Grotesk']">TradeFlow</div>
                  <div className="text-xs text-accent font-medium">Beta Access</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Built for garment buying houses. Mobile-first order management,
                WhatsApp-native updates, risk scoring, full audit trail.
              </p>
              <Link
                to="/products#tradeflow"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 — Vision */}
      <section className="py-16 sm:py-20 border-t border-primary/20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-[0.16em] text-primary font-medium">Where This Is Heading</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-6 leading-snug">
            The goal is not scale for scale's sake.
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              The goal is to build a small, high-trust operation with lasting client
              relationships and products that outlive any single engagement. Hexabyte
              is deliberately selective — because deep involvement and volume don't coexist.
            </p>
            <p>
              The products will grow on their own. The client work stays intentional.
              As both mature, the aim is to compound the knowledge gained from each into
              the other — products informed by real delivery experience, delivery informed
              by product thinking.
            </p>
            <p className="text-foreground font-medium">
              That's the arc. Not the biggest agency. The most trusted one.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Ready to <span className="text-primary">Ship?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a 30-minute engineering consultation. We'll map your automation 
            requirements and define a production-ready architecture.
          </p>
          <a
            href="https://calendly.com/hexabyte/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-engineering inline-flex"
          >
            Book Engineering Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
