import { Link } from 'react-router-dom';
import {
  ArrowRight, Settings, Globe, Cpu, Brain,
  Users, Target, Zap,
  CheckCircle, Search, Code, Rocket, Shield,
  Smartphone,
} from 'lucide-react';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main className="pt-[108px] md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  Founder-Led Technology Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                AI-Powered Systems & Digital Products{' '}
                <span className="text-primary">Built for Real Operations</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl">
                Hexabyte Technologies helps businesses automate work, launch scalable software,
                and run customer operations through practical AI, web, mobile, and workflow systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={company.discoveryCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-engineering justify-center"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/products"
                  className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Verifiable company signals */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: String(products.length), label: 'Focused Products' },
                  { value: 'Direct', label: 'Founder Access' },
                  { value: 'End-to-End', label: 'Product Engineering' },
                  { value: 'Bangladesh', label: 'Local Market Expertise' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 leading-tight">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">{label}</div>
                  </div>
                ))}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Solutions</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Built to Solve Business Problems
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on the operational outcomes — not just the technology behind them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Settings,
                title: 'Operational Automation',
                desc: 'Automate repetitive workflows, reporting, approvals, and internal processes using AI-powered systems.',
                tags: ['Workflow Design', 'n8n', 'AI Agents'],
                link: '/ai-automation',
              },
              {
                icon: Globe,
                title: 'Web, Commerce & SaaS Platforms',
                desc: 'Build scalable web, e-commerce, dashboard, SaaS, and internal systems designed for long-term business growth.',
                tags: ['Web Apps', 'E-commerce', 'SaaS'],
                link: '/web-development',
              },
              {
                icon: Cpu,
                title: 'AI Customer & Knowledge Systems',
                desc: 'Integrate practical AI capabilities — assistants, RAG, document intelligence — into customer operations.',
                tags: ['AI Assistants', 'RAG', 'Document Intelligence'],
                link: '/ai-automation',
              },
              {
                icon: Smartphone,
                title: 'Mobile & Field Operations',
                desc: 'Flutter apps, offline-first workflows, real-time operational tools for field and supply-chain teams.',
                tags: ['Flutter', 'Offline-First', 'Real-time Ops'],
                link: '/mobile-development',
              },
            ].map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="bento-card group cursor-pointer block"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Own Products</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Products Built by Hexabyte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused software for commerce, service businesses, and supply-chain teams. Each card
              states its current availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variant="compact" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hexabyte Section */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">The Hexabyte Difference</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Why Companies Work With Hexabyte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A founder-led operation means accountability, speed, and strategic depth — without the overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: Users,
                title: 'Direct Founder Access',
                desc: 'You work with the decision-maker on every call, every milestone, and every strategic choice.',
              },
              {
                icon: Zap,
                title: 'Fast, Decisive Execution',
                desc: 'No layers of approval. Decisions happen quickly, and systems ship in weeks — not quarters.',
              },
              {
                icon: Target,
                title: 'Strategic Involvement',
                desc: 'We think about your business model, not just your feature list. Solutions are built to last.',
              },
              {
                icon: Brain,
                title: 'Product-Minded Engineering',
                desc: 'We build and operate our own products, so we think like founders — not just implementers.',
              },
              {
                icon: Shield,
                title: 'Full Accountability',
                desc: 'No outsourcing, no handoffs. The people who design the system are the people who build it.',
              },
              {
                icon: CheckCircle,
                title: 'Practical AI — No Hype',
                desc: 'AI is applied where it creates measurable operational value, not as a marketing checkbox.',
              },
            ].map((point) => (
              <div key={point.title} className="bento-card group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* The self-quotation card that sat here presented company-written
              positioning as a testimonial. The page already covers this ground in
              the How We Work section below, so it is not replaced. */}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Technology</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">The Hexabyte Stack</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Production-grade tooling across AI, automation, and full-stack engineering.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                category: 'AI / LLM',
                items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'LangChain', 'Pinecone', 'Whisper'],
              },
              {
                category: 'Automation',
                items: ['n8n', 'Make (Integromat)', 'AWS EventBridge', 'Zapier', 'Webhooks'],
              },
              {
                category: 'Frontend',
                items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
              },
              {
                category: 'Backend / DB',
                items: ['Supabase', 'PostgreSQL', 'Node.js', 'Redis', 'Prisma'],
              },
              {
                category: 'Infrastructure',
                items: ['AWS Lambda', 'Vercel', 'Docker', 'GitHub Actions', 'Cloudflare'],
              },
            ].map(({ category, items }) => (
              <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-3 py-4 border-b border-border/50 last:border-0">
                <span className="text-xs font-mono font-medium text-primary/70 sm:w-32 shrink-0 uppercase tracking-wider">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure Section */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">What We Measure</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Operational Signals Over Vanity Metrics</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Reliability', desc: 'Uptime, error rates, and system stability under load' },
              { title: 'Processing Time', desc: 'End-to-end latency for critical workflows' },
              { title: 'Adoption', desc: 'Active usage, feature penetration, and retention' },
              { title: 'Operational Throughput', desc: 'Orders, bookings, tickets processed per period' },
              { title: 'Error Rates', desc: 'Failed operations, retries, and exception handling' },
              { title: 'Customer Response Time', desc: 'Time from enquiry to meaningful response' },
            ].map((metric, idx) => (
              <div key={idx} className="bento-card text-center">
                <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured process that keeps engagements predictable, transparent, and results-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: '01',
                icon: Search,
                title: 'Discovery',
                desc: 'Understand your workflow, operational constraints, and where the highest-impact opportunities are.',
              },
              {
                num: '02',
                icon: Settings,
                title: 'System Planning',
                desc: 'Map out the solution architecture — what gets built, how it connects, and what success looks like.',
              },
              {
                num: '03',
                icon: Code,
                title: 'Build & Integration',
                desc: 'Execute with precision and speed. Weekly milestones, working demos, and direct access throughout.',
              },
              {
                num: '04',
                icon: Rocket,
                title: 'Optimization & Support',
                desc: 'Refine based on real data, monitor for stability, and scale as your operation grows.',
              },
            ].map((step) => (
              <div key={step.num} className="bento-card text-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-primary">{step.num}</span>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform{' '}
            <span className="text-primary">Your Operations?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a 30-minute call. We will map your workflow, identify the highest-impact
            automation opportunities, and outline a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={company.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              to="/products"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}