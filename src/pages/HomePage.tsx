import { Link } from 'react-router-dom';
import { ArrowRight, Package, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <main className="pt-24 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Founder-Built. Relationship-First.
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-[1.15]">
                Software That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Earns Long-Term Trust
                </span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-4 leading-relaxed">
                Hexabyte builds custom B2B software solutions and ships its own products —
                Easy Moderator and TradeFlow. Every project is personally led by the founder,
                from first conversation to production.
              </p>

              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                We take select clients. Not because capacity is limited, but because deep
                involvement requires it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => openModal('home_hero_primary')}
                  className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/products"
                  className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>

            {/* Hero Visual — two product cards */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/20 space-y-4">
                <Link
                  to="/products#easy-moderator"
                  className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all group"
                >
                  <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="text-sm font-semibold">Easy Moderator</div>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">Live</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Multi-tenant moderation for commerce ops
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>

                <Link
                  to="/products#tradeflow"
                  className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border border-accent/20 hover:border-accent/50 transition-all group"
                >
                  <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="text-sm font-semibold">TradeFlow</div>
                      <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full font-medium">Beta</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Supply chain ops for buying houses
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </Link>

                <div className="p-4 bg-background/30 rounded-lg border border-primary/10">
                  <div className="text-xs text-muted-foreground mb-2 font-medium">Custom Solutions</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    When a product doesn't fit your problem, we build the solution. Web apps, AI
                    automation, mobile — scoped and delivered by the founder.
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-12 border-y border-primary/20 bg-card/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center bg-card border border-primary/20 rounded-2xl p-6 lg:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary mb-3">
                Featured Work
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold font-['Space_Grotesk'] mb-3">
                Shopify Automation: Event-Driven Operations at Scale
              </h2>
              <p className="text-muted-foreground mb-4">
                Serverless workflows for real-time inventory sync, automated order handling,
                and AI support orchestration across Shopify, Amazon, and eBay.
              </p>
              <Link
                to="/case-studies/shopify-automation"
                className="min-h-[44px] px-5 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center justify-center"
              >
                View This Case Study
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Architecture', value: 'Event-Driven Serverless' },
                { label: 'Focus', value: 'Inventory + Fulfillment' },
                { label: 'Channels', value: 'Shopify, Amazon, eBay' },
                { label: 'Timeline', value: '12 Weeks to Production' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-background/60 border border-primary/10 rounded-xl p-4">
                  <div className="text-muted-foreground mb-1">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.16em] text-primary mb-3">Client Outcomes</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Long-term relationships built on delivery, transparency, and results that hold up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'We were manually processing 200+ orders daily. Hexabyte built an automation system that cut our processing time by 70%. Direct founder access made all the difference.',
                initials: 'SK',
                role: 'Operations Director',
                company: 'E-commerce Company',
                result: '18 hours saved/week',
              },
              {
                quote: 'The founder personally scoped our inventory sync between Shopify and our warehouse. System went live in 8 weeks with zero downtime.',
                initials: 'MR',
                role: 'Founder & CEO',
                company: 'Fashion Brand',
                result: '99.8% inventory accuracy',
              },
              {
                quote: 'ROI was clear in month 2. The automation paid for itself by eliminating manual data entry errors that were costing us refunds.',
                initials: 'AT',
                role: 'Supply Chain Manager',
                company: 'Buying House',
                result: '$12K saved/month',
              },
            ].map((t) => (
              <div key={t.initials} className="bg-card border border-primary/20 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-6 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm mb-4 pt-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.role}</div>
                    <div className="text-xs text-muted-foreground">{t.company}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-2 text-xs text-primary">
                  <span className="font-semibold">Result:</span>
                  <span className="text-muted-foreground">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Track: Products + Custom */}
      <section className="py-14 sm:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              How We Can <span className="text-primary">Help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two paths. One standard of delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Track 1: Products */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.16em] text-primary mb-3">Ready-to-Deploy</p>
                <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-3">Our Products</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We built Easy Moderator and TradeFlow to solve problems we saw repeatedly in
                  e-commerce and supply chain. If your challenge fits, adopting an existing product
                  is faster and more cost-effective than building from scratch.
                </p>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  'Easy Moderator — omni-channel inventory AI (Live)',
                  'TradeFlow — supply chain ops for buying houses (Beta)',
                  'Faster deployment than custom builds',
                  'Configurable to your workflow',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="min-h-[44px] px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Track 2: Custom */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.16em] text-accent mb-3">Built For You</p>
                <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When a product doesn't fit your problem, we build the solution. Web apps,
                  AI automation, mobile platforms, system integrations — scoped clearly,
                  delivered with founder accountability, fixed price.
                </p>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  'AI automation & workflow systems',
                  'Custom web and mobile applications',
                  'System integrations & API connectivity',
                  'Fixed price — scoped before work begins',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openModal('home_custom_track')}
                className="min-h-[44px] px-6 py-3 bg-secondary border border-accent/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-14 sm:py-20 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent by design. No surprises, no handoffs, no black boxes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Discovery',
                text: 'Map business goals, constraints, and success criteria in one focused session.',
              },
              {
                title: 'Architecture',
                text: 'Design practical scope with clear milestones. You approve before we build.',
              },
              {
                title: 'Build',
                text: 'Ship in milestones with direct founder communication and weekly progress updates.',
              },
              {
                title: 'Scale',
                text: 'Stabilize, monitor, and iterate. Relationships don\'t end at launch.',
              },
            ].map((step, idx) => (
              <div key={step.title} className="bg-card border border-primary/20 rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center mb-4 text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold font-['Space_Grotesk'] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              See the full process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Straight answers before you commit to anything.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is Hexabyte a freelancer or an agency?',
                a: 'An agency — founder-led. The founder personally owns every engagement from scoping to delivery. Specialists are brought in when the project requires it. You always have a single point of accountability.',
              },
              {
                q: 'Will I work directly with the founder?',
                a: 'Yes. Every client has direct founder access throughout strategy, implementation, and post-launch. No account managers, no intermediaries.',
              },
              {
                q: 'How do your products relate to your client work?',
                a: 'Easy Moderator and TradeFlow were built from real client problems we observed. They reflect the same standards we hold for custom delivery. If your problem fits a product, that\'s usually faster. If not, we scope a custom solution.',
              },
              {
                q: 'What happens after the discovery conversation?',
                a: 'You receive a scoped implementation path: clear problem framing, proposed approach, milestone plan, and fixed price — before any commitment.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-card border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="py-14 sm:py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Build Something{' '}
            <span className="text-primary">That Lasts?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            If your problem fits what we solve well, we'll know by the end of our
            first conversation. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => openModal('home_final_cta')}
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Start a Conversation
            </button>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
