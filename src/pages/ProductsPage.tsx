import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Package, Layers, Zap } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function ProductsPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-24 md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_60%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Built from Real Problems</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-[1.15]">
              Two Products.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ready to Deploy.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Easy Moderator is a B2B SaaS platform for Bangladeshi f-commerce merchants — replacing manual
              Facebook/Instagram/WhatsApp operations with AI-powered sales and support. TradeFlow streamlines
              supply chain operations for buying houses. Both are live and ready to deploy.
            </p>
          </div>
        </div>
      </section>

      {/* Easy Moderator */}
      <section id="easy-moderator" className="py-16 sm:py-24 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live & Available</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
                Easy Moderator
              </h2>
              <p className="text-lg text-primary font-medium mb-4">
                AI-powered sales & support layer for Bangladeshi f-commerce merchants
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Easy Moderator is a B2B SaaS platform that replaces manual f-commerce operations with an
                AI-powered sales and support layer — purpose-built for Bangladeshi merchants selling through
                Facebook Pages, Instagram, and WhatsApp.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From real-time inbox management to COD order creation, comment auto-reply to RTO risk
                detection — every module is designed to reduce manual work and increase conversion rates
                for social commerce sellers.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'AI Inbox — Real-time SSE-powered inbox with AI-suggested replies',
                  'Comment Auto-Reply — Facebook comment → DM conversion engine',
                  'Order Management — Structured COD order creation from conversations',
                  'RTO Shield — AI flags high-risk orders to reduce return-to-origin losses',
                  'Product Catalog — AI-assisted catalog with variant/alias management',
                  'Multi-Channel — Facebook, Instagram, WhatsApp unified inbox',
                  'Analytics & Reports — Conversion, channel, and team performance dashboards',
                  'Subscription Billing — aamarpay + SSLCommerz payment gateway integration',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal('products_easymoderator_cta')}
                className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2"
              >
                Get a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-2xl p-8 shadow-2xl shadow-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg font-['Space_Grotesk']">Easy Moderator</div>
                    <div className="text-xs text-primary font-medium">Live Product</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { module: 'AI Inbox', status: 'Live', desc: 'SSE-powered inbox with AI replies' },
                    { module: 'Comment Auto-Reply', status: 'Live', desc: 'Comment → DM conversion' },
                    { module: 'Order Management', status: 'Live', desc: 'COD order creation' },
                    { module: 'RTO Shield', status: 'Live', desc: 'AI risk detection' },
                    { module: 'Product Catalog', status: 'Live', desc: 'AI-assisted catalog' },
                    { module: 'Multi-Channel', status: 'Live', desc: 'FB, IG, WA unified' },
                    { module: 'Analytics & Reports', status: 'Live', desc: 'Performance dashboards' },
                    { module: 'Subscription Billing', status: 'Live', desc: 'aamarpay + SSLCommerz' },
                  ].map(({ module, status, desc }) => (
                    <div
                      key={module}
                      className="flex items-center justify-between p-2.5 bg-background/50 rounded-lg border border-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <div>
                          <span className="text-xs font-semibold text-foreground block">{module}</span>
                          <span className="text-[10px] text-muted-foreground">{desc}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-xs text-muted-foreground">
                    Built for e-commerce operators managing multiple sales channels who need a single source of truth for inventory and orders.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/15 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      {/* TradeFlow */}
      <section id="tradeflow" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Visual (flipped on desktop) */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-card to-secondary border border-accent/30 rounded-2xl p-8 shadow-2xl shadow-accent/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg font-['Space_Grotesk']">TradeFlow</div>
                    <div className="text-xs text-accent font-medium">Beta Access</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Built for', value: 'Garment buying houses' },
                    { label: 'Updates via', value: 'WhatsApp-native' },
                    { label: 'Interface', value: 'Mobile-first' },
                    { label: 'Access', value: 'Join beta now' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-accent/10"
                    >
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="text-xs font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-accent/10">
                  <p className="text-xs text-muted-foreground">
                    Built for buying house owners and managers who run operations through WhatsApp and spreadsheets and want a proper system without enterprise complexity.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/15 rounded-full blur-2xl" />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Beta Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
                TradeFlow
              </h2>
              <p className="text-lg text-accent font-medium mb-4">
                Supply chain operations software for garment buying houses
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Buying houses in the garment industry run on relationships, speed, and trust — but the
                operations behind them run on WhatsApp voice notes, shared spreadsheets, and institutional
                memory. When something goes wrong, it's hard to trace. When auditors ask for records,
                the scramble begins.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                TradeFlow is a mobile-first platform built specifically for how buying houses actually
                work. Order updates happen where your team already communicates. Risk is visible before
                it becomes a problem. Every action is auditable.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Order and shipment management in one view',
                  'WhatsApp-native updates — no app switching required',
                  'Risk scoring on orders and suppliers',
                  'Full audit trail for compliance and accountability',
                  'Mobile-first — works on the factory floor',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal('products_tradeflow_cta')}
                className="min-h-[44px] px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center gap-2"
              >
                Join the Beta
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to Custom */}
      <section className="py-14 border-t border-primary/20 bg-card/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-primary mb-4">Need Something Different?</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] mb-4">
            These products don't cover everything — and that's intentional.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When a client's problem doesn't fit a product, we build the solution from the ground up.
            Custom software, same founder accountability, same standard of delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('products_custom_bridge')}
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
