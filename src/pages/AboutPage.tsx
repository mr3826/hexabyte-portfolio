import { Zap, Package, Layers, Users, Shield, ArrowRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder.png';

export default function AboutPage() {
  const { openModal } = useModal();

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
                <button
                  type="button"
                  onClick={() => openModal('about_hero_primary')}
                  className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 font-medium"
                >
                  Start a Conversation
                </button>
                <Link
                  to="/case-studies"
                  className="min-h-[44px] px-8 py-4 border border-primary/30 text-foreground rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium inline-flex items-center justify-center gap-2"
                >
                  See Our Work
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

      {/* Act 2 — What Hexabyte Is */}
      <section id="how-it-works" className="py-16 sm:py-20 border-t border-primary/20 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              How Hexabyte Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not a traditional agency. Not a freelancer. Something more deliberate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Package,
                title: 'Products First',
                body: 'We built two SaaS products before taking client work. That experience shapes how we scope and deliver — we know what it means to own a system long after launch.',
              },
              {
                icon: Shield,
                title: 'Custom Solutions Second',
                body: 'Client work is an extension of the same discipline. When a product doesn\'t fit your problem, we build the solution with the same ownership mindset.',
              },
              {
                icon: Users,
                title: 'Relationship Over Retainer',
                body: 'We don\'t optimize for volume. We take a small number of clients at a time and stay closely involved. The goal is long-term trust, not short-term throughput.',
              },
              {
                icon: Layers,
                title: 'Selective Intake',
                body: 'Taking fewer clients means more time and depth per engagement. If a project isn\'t a strong fit, we say so — and point to someone better positioned to help.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">{title}</h3>
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
      <section className="py-16 sm:py-20 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-6">
            If this resonates, let's talk.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We won't take every project. But if yours is a strong fit, we'll tell you
            clearly — and if not, we'll point you in the right direction.
          </p>
          <button
            type="button"
            onClick={() => openModal('about_final_cta')}
            className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 font-medium text-lg"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
