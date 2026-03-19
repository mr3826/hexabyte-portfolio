import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Zap, ShieldCheck, Smartphone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const caseStudies = [
  {
    id: 'shopify-automation',
    category: 'Automation Platform',
    title: 'Shopify Automation for Multi-Channel Operations',
    excerpt:
      'Event-driven automation architecture connecting Shopify, Amazon, eBay, ShipStation, and AI support workflows.',
    industry: 'E-commerce',
    timeline: '12 weeks',
    impact: 'Production-ready orchestration stack',
    tags: ['AWS Lambda', 'PostgreSQL', 'Make.com'],
    image: 'automation',
    confidence: 'Medium (documentation verified)',
  },
  {
    id: 'easy-moderator',
    category: 'Content Ops Platform',
    title: 'Easy Moderator Multi-Tenant Moderation System',
    excerpt:
      'React + Node platform for social moderation, role-based workflows, and integration-heavy operations.',
    industry: 'Commerce Operations',
    timeline: '10 weeks',
    impact: 'Automated testing pipeline across frontend/backend/E2E',
    tags: ['React 18', 'Express', 'Redis'],
    image: 'ai',
    confidence: 'High (test evidence verified)',
  },
  {
    id: 'tradeflow',
    category: 'Vertical SaaS',
    title: 'TradeFlow for Bangladesh Buying Houses',
    excerpt:
      'Mobile-first operational SaaS with WhatsApp-native updates, risk scoring, and auditable order management.',
    industry: 'Garments Supply Chain',
    timeline: '8 weeks',
    impact: '30-second quick update workflows',
    tags: ['Next.js 14', 'TypeScript', 'Audit Logs'],
    image: 'web',
    confidence: 'Medium (product docs verified)',
  },
  {
    id: 'reel-studio',
    category: 'AI Media Automation',
    title: 'Reel Studio AI Content Automation Pipeline',
    excerpt:
      'FastAPI-based video generation workflow with queue orchestration, checkpoint recovery, and cloud storage integration.',
    industry: 'Media Automation',
    timeline: '9 weeks',
    impact: 'Pipeline ETA and staged processing observability',
    tags: ['FastAPI', 'GCP Storage', 'PyTorch'],
    image: 'mobile',
    confidence: 'Medium (implementation verified)',
  },
];

export default function CaseStudiesPage() {
  const { openModal } = useModal();
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'Automation Platform',
    'Content Ops Platform',
    'Vertical SaaS',
    'AI Media Automation',
  ];

  const filteredStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
            Founder-Led <span className="text-primary">Execution Proof</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four implementation-led projects with clear architecture, delivery
            scope, and evidence confidence. Shopify Automation is featured as
            the primary reference build.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`min-h-[44px] px-6 py-2 rounded-lg transition-all ${
                  filter === category
                    ? 'bg-primary text-background'
                    : 'bg-card border border-primary/20 text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Visual Indicator */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {study.image === 'automation' && (
                    <Zap className="w-16 h-16 text-primary/50" />
                  )}
                  {study.image === 'ai' && (
                    <ShieldCheck className="w-16 h-16 text-primary/50" />
                  )}
                  {study.image === 'web' && (
                    <TrendingUp className="w-16 h-16 text-primary/50" />
                  )}
                  {study.image === 'mobile' && (
                    <Smartphone className="w-16 h-16 text-primary/50" />
                  )}
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                    {study.category}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 font-['Space_Grotesk'] group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {study.excerpt}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-primary/10">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold">
                        {study.industry}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Timeline
                      </div>
                      <div className="text-sm font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {study.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div className="text-sm font-semibold text-primary">
                      {study.impact}
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    Evidence confidence: {study.confidence}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Start Your <span className="text-primary">Next Case Study</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            If you are scaling operations or launching a digital product, let us map
            the fastest production path together.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center min-h-[44px] px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            Book Discovery Inquiry <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </main>
  );
}
