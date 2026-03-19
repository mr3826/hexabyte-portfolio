import { ArrowRight, Globe, Code2, Layers, Rocket } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Link } from 'react-router-dom';
import dashboardImage from '@/assets/placeholder-image.svg';

export default function WebAppPage() {
  const { openModal } = useModal();
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                Production-Ready Web Apps
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
              Custom <span className="text-primary">Web Applications</span>{' '}
              Built for Scale
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              SaaS platforms, admin dashboards, and AI-powered web apps built
              with React and Next.js for SMB founders who need speed without
              compromising architecture quality.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Inquiry <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            What We <span className="text-primary">Build</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <Layers className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                SaaS Platforms
              </h3>
              <p className="text-muted-foreground mb-4">
                Multi-tenant applications with subscription management, user
                authentication, and scalable architecture.
              </p>
              <div className="text-sm text-primary">✓ Live & Deployed</div>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <Code2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                Admin Dashboards
              </h3>
              <p className="text-muted-foreground mb-4">
                Complex data visualization, real-time updates, and intuitive
                interfaces for managing your business operations.
              </p>
              <div className="text-sm text-primary">✓ Production-Ready</div>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                AI-Powered Apps
              </h3>
              <p className="text-muted-foreground mb-4">
                Intelligent web applications that leverage AI for automation,
                predictions, and enhanced user experiences.
              </p>
              <div className="text-sm text-primary">✓ AI-Integrated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            Our <span className="text-primary">Tech Stack</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Frontend</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>React 18</div>
                <div>Next.js 14</div>
                <div>TypeScript</div>
                <div>Tailwind CSS</div>
                <div>Motion</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Backend</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Node.js</div>
                <div>Express</div>
                <div>Python</div>
                <div>FastAPI</div>
                <div>REST APIs</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Database</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>PostgreSQL</div>
                <div>MongoDB</div>
                <div>Redis</div>
                <div>Supabase</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary">Deployment</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Vercel</div>
                <div>AWS</div>
                <div>Docker</div>
                <div>CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-6">
                Built for <span className="text-primary">Production</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Responsive design across all devices',
                  'Performance optimized (Core Web Vitals)',
                  'Security best practices (OWASP)',
                  'SEO optimized',
                  'Accessibility compliant (WCAG)',
                  'Real-time features with WebSockets',
                  'Payment integration (Stripe)',
                  'Analytics and monitoring',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-2xl p-2">
              <img
                src={dashboardImage}
                alt="Production-ready dashboard interface"
                className="w-full h-auto rounded-lg shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Build <span className="text-primary">Your Web App?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and create something amazing
            together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book Discovery Inquiry
            </button>
            <Link
              to="/case-studies/tradeflow"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View TradeFlow Case
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
