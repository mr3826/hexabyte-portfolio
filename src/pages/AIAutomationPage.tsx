import {
  ArrowRight,
  Cpu,
  Zap,
  TrendingUp,
  GitBranch,
  Database,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';

export default function AIAutomationPage() {
  const { openModal } = useModal();
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
              AI Automation <span className="text-primary">Solutions</span> That
              Work in Production
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Founder-led automation delivery for SMB teams who need fewer
              manual handoffs, better system reliability, and faster operations.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            Automation <span className="text-primary">Platforms</span> We Use
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Make.com', desc: 'Visual workflow automation' },
              { name: 'Zapier', desc: 'Connect 5000+ apps' },
              { name: 'n8n', desc: 'Open-source flexibility' },
              { name: 'Power Automate', desc: 'Microsoft ecosystem' },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Orchestration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-6">
                AI Orchestration{' '}
                <span className="text-primary">& RAG Systems</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We build custom AI agents that understand your business context
                using RAG (Retrieval-Augmented Generation) systems trained on
                your internal data.
              </p>
              <ul className="space-y-4">
                {[
                  'GPT-4 and Claude API integration',
                  'Custom RAG systems with vector databases',
                  'Automated document processing',
                  'Intelligent data extraction and enrichment',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Vector Database</div>
                    <div className="text-xs text-muted-foreground">
                      Business Knowledge Store
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <Cpu className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">AI Agent</div>
                    <div className="text-xs text-muted-foreground">
                      GPT-4 / Claude
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Output</div>
                    <div className="text-xs text-muted-foreground">
                      Contextual Responses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Diagrams */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            System <span className="text-primary">Architecture</span>
          </h2>

          <div className="bg-card border border-primary/20 rounded-xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-12 h-12 text-primary" />
                </div>
                <div className="font-semibold mb-1">Trigger</div>
                <div className="text-sm text-muted-foreground">
                  New lead, form submission
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />

              <div className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-12 h-12 text-accent" />
                </div>
                <div className="font-semibold mb-1">Process</div>
                <div className="text-sm text-muted-foreground">
                  AI enrichment, validation
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />

              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-12 h-12 text-primary" />
                </div>
                <div className="font-semibold mb-1">Action</div>
                <div className="text-sm text-muted-foreground">
                  CRM update, notification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to <span className="text-primary">Automate?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            We will map your current process, identify highest-leverage
            automations, and define an implementation plan you can ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Inquiry
            </button>
            <Link
              to="/case-studies/shopify-automation"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View Shopify Automation Case
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
