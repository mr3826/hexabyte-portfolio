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
              Before taking client work, we built our own products to solve problems we saw firsthand in
              e-commerce and supply chain operations. Both are live. Both are available for your team today.
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
                Omni-channel inventory management for e-commerce teams
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                E-commerce operators managing inventory across Daraz, Facebook Shop, Shopify, and other
                channels know the pain — stock mismatches, delayed order updates, manual reconciliation
                at midnight. Easy Moderator was built to eliminate exactly that.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                It connects your sales channels, keeps inventory synchronized in real time, and handles
                routine customer queries through an AI-powered chatbot trained on your products. Your
                team stops firefighting and starts focusing on growth.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Real-time inventory sync across all channels',
                  'AI chatbot that answers product & order questions',
                  'Automatic stock alerts before you run out',
                  'Multi-platform order consolidation',
                  'Built for Daraz, Shopify, Facebook, and more',
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
                <div className="space-y-3">
                  {[
                    { label: 'Channels Connected', value: 'Daraz · Shopify · Facebook' },
                    { label: 'Inventory Sync', value: 'Real-time' },
                    { label: 'AI Chatbot', value: 'Product-trained' },
                    { label: 'Deployment', value: 'Available now' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/10"
                    >
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="text-xs font-semibold text-foreground">{value}</span>
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
