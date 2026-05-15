import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Workflow, ShoppingCart, Bot, Globe, Smartphone } from 'lucide-react';
import TerminalWidget from '@/components/TerminalWidget';


export default function HomePage() {
  return (
    <main className="pt-24 md:pt-20">
      {/* Hero Section - SV Engineering Partner Style */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  Accepting New Projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                AI Systems{' '}
                <span className="text-primary">that Ship.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl">
                We build production-ready RAG pipelines, n8n orchestration, and automation 
                engines for fast-moving teams. Deploy infrastructure that scales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/hexabyte/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-engineering justify-center"
                >
                  Book Engineering Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/case-studies"
                  className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
                >
                  View Deployments
                </Link>
              </div>
            </div>

            {/* Right: Terminal Widget */}
            <div className="relative">
              <TerminalWidget />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Capabilities</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Infrastructure We Deploy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six core systems. Built for production from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Cpu,
                title: 'RAG Pipelines',
                desc: 'Vector search + LLM integration with semantic retrieval',
                tags: ['Pinecone', 'OpenAI', 'Embeddings'],
              },
              {
                icon: Workflow,
                title: 'n8n Orchestration',
                desc: 'Event-driven workflow automation at scale',
                tags: ['Webhooks', 'APIs', 'Scheduling'],
              },
              {
                icon: ShoppingCart,
                title: 'Shopify Automation',
                desc: 'Event-driven commerce operations across channels',
                tags: ['Lambda', 'Webhooks', 'Multi-channel'],
              },
              {
                icon: Bot,
                title: 'AI Agents',
                desc: 'Autonomous task execution with tool-calling',
                tags: ['Claude', 'Functions', 'Memory'],
              },
              {
                icon: Globe,
                title: 'Custom Web Apps',
                desc: 'Next.js + Supabase stacks with real-time sync',
                tags: ['Next.js', 'Supabase', 'TypeScript'],
              },
              {
                icon: Smartphone,
                title: 'Mobile Systems',
                desc: 'Flutter + native integrations for iOS/Android',
                tags: ['Flutter', 'Dart', 'Native SDKs'],
              },
            ].map((service) => (
              <div key={service.title} className="bento-card group cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
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

      {/* Featured Deployment */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div>
              <p className="text-xs text-primary uppercase tracking-wider mb-3">Featured Deployment</p>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
                Shopify Multi-Channel Automation
              </h2>
              <p className="text-muted-foreground mb-6">
                Event-driven serverless architecture syncing inventory and orders across 
                Shopify, Amazon, and eBay. 70% reduction in processing time.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['AWS Lambda', 'EventBridge', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to="/case-studies/shopify-automation"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2"
              >
                View Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Latency', value: '< 100ms' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Throughput', value: '1K+ / day' },
                { label: 'Timeline', value: '12 weeks' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#0a0a0a] border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Technical Focus */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Client Outcomes</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Systems in Production</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote: 'The RAG pipeline they built reduced our support ticket resolution time by 70%. Vector search is now our competitive edge.',
                company: 'SaaS Platform',
                result: '70% latency reduction',
              },
              {
                quote: 'Event-driven Shopify automation handling 1000+ orders daily. Zero manual intervention for 8 weeks straight.',
                company: 'E-commerce Operator',
                result: '99.9% automation rate',
              },
              {
                quote: 'n8n orchestration connecting 6 different APIs. What used to take 4 hours now runs in 12 minutes.',
                company: 'Logistics Startup',
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

      {/* Engineering Principles */}
      <section className="py-14 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Engineering Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Ship Fast', desc: 'Production in weeks, not quarters. Working systems over perfect specs.' },
              { num: '02', title: 'Own the Stack', desc: 'Full accountability from API to UI. No handoffs, no gaps.' },
              { num: '03', title: 'Measure Everything', desc: 'Latency, throughput, error rates. If it moves, we instrument it.' },
              { num: '04', title: 'Scale First', desc: 'Built for 10x load from day one. No "we\'ll fix it later" architecture.' },
            ].map((principle) => (
              <div key={principle.num} className="bento-card text-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-semibold text-primary">{principle.num}</span>
                </div>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to <span className="text-primary">Deploy?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a 30-minute engineering consultation. We'll map your automation 
            requirements and define a production-ready architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book Engineering Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
