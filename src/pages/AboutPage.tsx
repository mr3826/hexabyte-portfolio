import { Zap, Target, Users, MessageSquare, Check, X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import founderImage from '@/assets/founder.jpg';

export default function AboutPage() {
  const { openModal } = useModal();
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Founder-Led Agency
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
              Founder-Led{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Automation Agency
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Every project is personally scoped, designed, implemented, and delivered
              by the founder — <br className="hidden md:block" />
              <span className="text-foreground font-medium">
                no hidden handoffs, no diluted ownership.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 font-medium"
              >
                Book Discovery Inquiry
              </button>
              <a
                href="#how-it-works"
                className="min-h-[44px] px-8 py-4 border border-primary/30 text-foreground rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
              >
                Learn How We Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Snapshot */}
      <section className="py-16 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Founder Image */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                  src={founderImage}
                  alt="Founder & Lead Automation Engineer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-primary/20 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Available for Select Projects
                </span>
              </div>

              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-3">
                Founder & Lead Automation Engineer
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                I personally handle every aspect of your project — from initial
                strategy and system design to implementation, testing, and
                deployment. You're not passed to a junior team. You work
                directly with the person who built the agency's reputation.
              </p>

              <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Founder promise:</span>{' '}
                  clear scope, weekly progress visibility, and decision-level
                  communication throughout delivery.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Direct communication — no account managers or intermediaries
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Full accountability and ownership of outcomes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Deep expertise in AI, automation, web, and mobile systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Strategic partner, not just a service provider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Criteria */}
      <section className="py-20 border-t border-primary/20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Who We Are a <span className="text-primary">Strong Fit</span> For
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Best results come from founder teams that value execution speed,
              practical architecture, and direct collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold font-['Space_Grotesk'] mb-4 text-primary">
                Great Fit
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  SMB founders replacing manual workflows with automation
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  Teams launching SaaS or internal ops platforms quickly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  Businesses needing mobile-first delivery from day one
                </li>
              </ul>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold font-['Space_Grotesk'] mb-4 text-primary">
                Not the Best Fit
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5" />
                  Teams seeking lowest-cost, outsourced bulk execution
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5" />
                  Projects needing large onsite teams and agency layers
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5" />
                  Engagements without stakeholder access for rapid decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How This Agency Works */}
      <section
        id="how-it-works"
        className="py-20 border-t border-primary/20 bg-card/30"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-4">
              How This Agency Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A different approach to building automation systems and
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">
                Founder-Led Delivery
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every line of code, every system design, every integration is
                handled personally. No delegation to junior developers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">
                Automation-First Mindset
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We build systems that reduce manual work, scale efficiently, and
                integrate seamlessly with AI and modern tools.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">
                Scalable Systems
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experts are added only when needed for specialized work. Core
                development stays with the founder for consistency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">
                Clear Communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Direct access to the founder. Fast decisions, quick iterations,
                and transparent progress updates throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founder-Led Matters */}
      <section className="py-20 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Why Founder-Led Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The difference between working with the founder vs. a traditional
              agency
            </p>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left p-6 font-['Space_Grotesk'] text-lg">
                      Aspect
                    </th>
                    <th className="text-center p-6 font-['Space_Grotesk'] text-lg bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Founder-Led
                      </div>
                    </th>
                    <th className="text-center p-6 font-['Space_Grotesk'] text-lg text-muted-foreground">
                      Traditional Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10">
                    <td className="p-6 font-medium">Who You Work With</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">
                          Founder directly
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Account managers & juniors</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-primary/10">
                    <td className="p-6 font-medium">Decision Speed</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">
                          Immediate decisions
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Multiple approval layers</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-primary/10">
                    <td className="p-6 font-medium">Code Quality</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">
                          Senior-level throughout
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Mixed team skill levels</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-primary/10">
                    <td className="p-6 font-medium">Accountability</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Full ownership</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Distributed responsibility</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-primary/10">
                    <td className="p-6 font-medium">Communication</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Direct & fast</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Through intermediaries</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium">Iteration Speed</td>
                    <td className="p-6 text-center bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Rapid pivots</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground/50" />
                        <span>Slower coordination</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Stack */}
      <section className="py-20 border-t border-primary/20 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Tools & Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern, production-grade technologies for AI automation and
              application development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'n8n', category: 'Automation' },
              { name: 'OpenAI', category: 'AI Models' },
              { name: 'Qdrant', category: 'Vector DB' },
              { name: 'Pinecone', category: 'Vector DB' },
              { name: 'Webhooks', category: 'Integration' },
              { name: 'REST APIs', category: 'Integration' },
              { name: 'React', category: 'Web' },
              { name: 'Next.js', category: 'Web' },
              { name: 'Flutter', category: 'Mobile' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Supabase', category: 'Backend' },
              { name: 'PostgreSQL', category: 'Database' },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-4 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-1">{tool.name}</p>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              And many more tools selected based on your specific project
              requirements
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Work with a Founder-Led Agency?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your automation or application project. Direct
            conversation, clear roadmap, quality execution.
          </p>
          <button
            onClick={openModal}
            className="min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 font-medium text-lg"
          >
            Book Discovery Inquiry
          </button>
        </div>
      </section>
    </div>
  );
}
