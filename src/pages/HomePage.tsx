import { Link } from 'react-router-dom';
import {
  ArrowRight, Settings, Globe, Cpu, Brain,
  Package, Layers, Users, Target, Zap,
  CheckCircle, Search, Code, Rocket, Shield,
} from 'lucide-react';


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
                AI-Powered Systems &amp; Digital Products{' '}
                <span className="text-primary">Built for Operational Growth</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl">
                Hexabyte helps businesses streamline operations, automate repetitive workflows,
                and launch scalable digital products through founder-led execution and practical
                AI systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/hexabyte/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-engineering justify-center"
                >
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/case-studies"
                  className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Right: Operational impact stats */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '70%', label: 'Reduction in manual processing time' },
                  { value: '99.9%', label: 'Automation rate for routine operations' },
                  { value: '20x', label: 'Throughput gains from workflow automation' },
                  { value: '2', label: 'Live SaaS products solving real problems' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{value}</div>
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

      {/* Solutions Bento Grid */}
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
                title: 'Digital Product Development',
                desc: 'Build scalable web and mobile products designed for long-term business growth.',
                tags: ['Web Apps', 'Mobile', 'SaaS'],
                link: '/web-development',
              },
              {
                icon: Cpu,
                title: 'Internal Business Systems',
                desc: 'Centralize operations, improve visibility, and streamline business workflows with custom platforms.',
                tags: ['Custom Platforms', 'Data Sync', 'Dashboards'],
                link: '/case-studies',
              },
              {
                icon: Brain,
                title: 'AI Integration & Intelligence',
                desc: 'Integrate practical AI capabilities into existing business operations and customer experiences.',
                tags: ['RAG Pipelines', 'LLM Integration', 'Automation'],
                link: '/ai-automation',
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

      {/* Products Built by Hexabyte */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Own Products</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Products Built by Hexabyte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build and operate our own products — validating systems thinking through
              real-world deployment before applying it to client work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Easy Moderator */}
            <div className="bento-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-base">Easy Moderator</div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs font-medium text-primary">Live &amp; Available</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Replaces manual Facebook, Instagram, and WhatsApp operations for e-commerce
                merchants with AI-powered sales and support workflows.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                  SaaS Platform
                </span>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* TradeFlow */}
            <div className="bento-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-base">TradeFlow</div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-accent">Beta Access</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Supply chain and order management for garment buying houses — WhatsApp-native
                updates, AI risk scoring, and full audit trail.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                  Mobile-First SaaS
                </span>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
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

      {/* Why Companies Work With Hexabyte */}
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

          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground font-medium leading-relaxed mb-4">
              "You work directly with builders and decision-makers — not layers of account
              managers or outsourced coordination."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">H</span>
              </div>
              <span className="text-sm text-muted-foreground">Hexabyte — Founder-Led Execution</span>
            </div>
          </div>
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

      {/* Operational Results */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Results</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Operational Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote: 'Manual order processing that used to consume our entire support team is now fully automated. We redirected those hours into growth activities.',
                company: 'E-commerce Operator',
                result: '70% time savings',
              },
              {
                quote: 'The workflow automation Hexabyte built handles what three people used to do — and it runs without errors. The ROI was visible within the first month.',
                company: 'B2B Operations',
                result: '99.9% automation rate',
              },
              {
                quote: 'We went from a chaotic patchwork of spreadsheets and manual steps to a single connected system. Operations feel like they are finally under control.',
                company: 'Logistics Business',
                result: '20x throughput gain',
              },
            ].map((t, idx) => (
              <div key={idx} className="bento-card">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium">{t.company}</span>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    {t.result}
                  </span>
                </div>
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
            Book a 30-minute strategy call. We will map your workflow, identify the
            highest-impact automation opportunities, and outline a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
