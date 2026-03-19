import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
  Code2,
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function HomePage() {
  const { openModal } = useModal();
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">
                  Production-Ready AI Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
                We Build AI Automation & Scalable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Web + Mobile Apps
                </span>{' '}
                That Work in Production
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI agents, automation systems, SaaS platforms, and
                cross-platform mobile apps that deliver measurable business
                outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  Book a Free Automation Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Live Web Apps
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    App Store Apps
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    100K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Hours Saved
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-2xl p-8 shadow-2xl shadow-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border border-primary/20">
                    <Cpu className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-sm font-semibold">AI Automation</div>
                      <div className="text-xs text-muted-foreground">
                        Workflow Optimization
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border border-accent/20">
                    <Globe className="w-8 h-8 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">
                        Web Applications
                      </div>
                      <div className="text-xs text-muted-foreground">
                        React / Next.js
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border border-primary/20">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-sm font-semibold">Mobile Apps</div>
                      <div className="text-xs text-muted-foreground">
                        iOS & Android
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end solutions that transform business operations and
              deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Automation */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                AI Automation & Workflow Systems
              </h3>
              <p className="text-muted-foreground mb-4">
                Eliminate manual tasks with intelligent automation using
                Make.com, Zapier, n8n, and custom solutions.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Time wasted on repetitive manual processes
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  70-90% reduction in processing time
                </div>
              </div>
              <Link
                to="/ai-automation"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Agents & Chatbots */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                AI Agents & Chatbots (RAG-based)
              </h3>
              <p className="text-muted-foreground mb-4">
                Custom AI agents trained on your business data using RAG systems
                for accurate, contextual responses.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Information bottlenecks and support costs
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  24/7 support with 95% accuracy
                </div>
              </div>
              <Link
                to="/ai-automation"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* CRM Automation */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                Lead Enrichment & CRM Automation
              </h3>
              <p className="text-muted-foreground mb-4">
                Automated data enrichment and CRM workflows that keep your sales
                pipeline flowing smoothly.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Incomplete data and manual data entry
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  3x faster lead qualification
                </div>
              </div>
              <Link
                to="/ai-automation"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                Custom Web App Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Production-ready SaaS platforms, admin dashboards, and
                AI-powered web applications built with React and Next.js.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Complex business processes without digital tools
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  Scalable, maintainable applications
                </div>
              </div>
              <Link
                to="/web-development"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile Development */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                Cross-Platform Mobile App Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Flutter-based iOS and Android apps with AI-powered features,
                published on App Store and Play Store.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Need for mobile-first experiences
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  Reach millions on iOS & Android
                </div>
              </div>
              <Link
                to="/mobile-development"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Additional Service */}
            <div className="group bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-['Space_Grotesk']">
                API Integrations & Webhooks
              </h3>
              <p className="text-muted-foreground mb-4">
                Connect your tools and systems with REST APIs, webhooks, and
                custom integration solutions.
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Problem Solved:
                </div>
                <div className="text-sm text-muted-foreground">
                  Disconnected systems and data silos
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold mb-2 text-primary">
                  Business Outcome:
                </div>
                <div className="text-sm text-muted-foreground">
                  Unified data across all platforms
                </div>
              </div>
              <Link
                to="/ai-automation"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Our <span className="text-primary">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Best-in-class tools and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">AI</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>OpenAI GPT-4</div>
                <div>Claude API</div>
                <div>ChatGPT</div>
                <div>Gemini</div>
                <div>LangChain</div>
                <div>RAG Systems</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Automation</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Make.com</div>
                <div>Zapier</div>
                <div>n8n</div>
                <div>Power Automate</div>
                <div>Custom APIs</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Integration</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>REST APIs</div>
                <div>Webhooks</div>
                <div>Google Apps Script</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Data</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Airtable</div>
                <div>Google Sheets</div>
                <div>PostgreSQL</div>
                <div>Vector Databases</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Tools</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Python</div>
                <div>JavaScript</div>
                <div>HubSpot</div>
                <div>Salesforce</div>
                <div>Pipedrive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Start Your <span className="text-primary">Automation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free consultation to discuss how we can transform your
            business with AI and automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Free Automation Audit
            </button>
            <Link
              to="/case-studies"
              className="px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
