import { Link } from 'react-router-dom';
import { ArrowRight, Package, Layers, Zap, Database, MessageSquare, BarChart3, FileText, Truck } from 'lucide-react';

const easyModeratorModules = [
  {
    icon: Database,
    title: 'Products & Catalog',
    desc: 'Manual entry or AI bulk upload. Vector embeddings for AI product search. Low-stock monitoring.',
    tags: ['AI Extraction', 'Vector Search', 'Stock Guards'],
  },
  {
    icon: MessageSquare,
    title: 'Unified Inbox',
    desc: 'Real-time SSE stream from FB/IG/WhatsApp. AI intent routing with confidence scoring. Human handoff (HITL).',
    tags: ['Webhooks', 'SSE', 'Auto-Reply'],
  },
  {
    icon: Package,
    title: 'Order Engine',
    desc: 'Full COD lifecycle: draft → confirm → book courier → track. RTO Shield fraud detection.',
    tags: ['COD Workflow', 'RTO Shield', 'Tracking'],
  },
  {
    icon: Truck,
    title: 'Delivery Integrations',
    desc: 'Steadfast, Pathao, RedX API connections. Real-time booking and tracking from within orders.',
    tags: ['Steadfast', 'Pathao', 'RedX'],
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    desc: 'RAG-powered AI brain. FAQs with semantic search. Branding rules. Document uploads. Knowledge gaps tracking.',
    tags: ['RAG', 'Semantic Search', 'Documents'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Campaigns',
    desc: 'Dashboard KPIs. Queue management. Broadcast campaigns to connected channels with delivery stats.',
    tags: ['KPIs', 'Queue', 'Broadcasts'],
  },
];

const tradeflowFeatures = [
  { label: 'Architecture', value: 'Mobile-first API' },
  { label: 'Updates', value: 'WhatsApp-native' },
  { label: 'Risk Scoring', value: 'AI-powered' },
  { label: 'Audit Trail', value: 'Full compliance' },
];

export default function ProductsPage() {
  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Live Systems</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Production SaaS.{' '}
              <span className="text-primary">Ready to Deploy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Battle-tested automation infrastructure. Two live products solving real operational problems 
              for BD f-commerce and supply chain teams.
            </p>
          </div>
        </div>
      </section>

      {/* Easy Moderator - Bento Grid */}
      <section id="easy-moderator" className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live & Available</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Easy Moderator</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              AI-powered sales & support layer for Bangladeshi f-commerce merchants. 
              Replaces manual Facebook/Instagram/WhatsApp operations with automated workflows.
            </p>
          </div>

          {/* Bento Grid - 6 Modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {easyModeratorModules.map((module) => (
              <div key={module.title} className="bento-card group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <module.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{module.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dependency Chain */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">System Dependency Chain</h3>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Channel Connected</span>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Inbox Receives Messages</span>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">AI Uses Knowledge + Products</span>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Order Created</span>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Courier Booked</span>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Tracking Updated</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Schedule Technical Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/case-studies/easy-moderator"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* TradeFlow */}
      <section id="tradeflow" className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Beta Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">TradeFlow</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Supply chain operations for garment buying houses. WhatsApp-native updates, 
                risk scoring, and auditable order management.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {tradeflowFeatures.map(({ label, value }) => (
                  <div key={label} className="bg-card border border-border rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="font-semibold text-sm">{value}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com/hexabyte/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                Join Beta
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="bg-card border border-accent/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">TradeFlow</div>
                    <div className="text-xs text-accent font-medium">Beta</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Order and shipment management',
                    'WhatsApp-native operations',
                    'Supplier risk scoring',
                    'Full audit trail',
                    'Mobile-first interface',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to Custom */}
      <section className="py-14 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider text-primary mb-4">Custom Engineering</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need something different?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When a client's problem doesn't fit a product, we build the solution from the ground up.
            Custom automation systems, same engineering standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See Deployments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
