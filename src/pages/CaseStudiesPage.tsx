import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const caseStudies = [
  {
    id: 'lead-enrichment-automation',
    category: 'AI Automation',
    title: 'Lead Enrichment Automation for B2B SaaS',
    excerpt: 'Automated lead qualification process saving 20+ hours per week',
    industry: 'B2B SaaS',
    timeline: '4 weeks',
    impact: '90% time reduction',
    tags: ['Make.com', 'OpenAI', 'HubSpot'],
    image: 'automation',
  },
  {
    id: 'ai-chatbot-rag',
    category: 'AI Agents',
    title: 'RAG-Based Customer Support Chatbot',
    excerpt: 'AI chatbot trained on 10K+ support docs with 95% accuracy',
    industry: 'E-commerce',
    timeline: '6 weeks',
    impact: '70% support cost reduction',
    tags: ['Claude API', 'RAG', 'Vector DB'],
    image: 'ai',
  },
  {
    id: 'multi-tenant-commerce-ai',
    category: 'Web App',
    title: 'Multi-Tenant Commerce AI Platform',
    excerpt:
      'Production SaaS platform with AI-powered conversations and multi-channel messaging',
    industry: 'E-Commerce',
    timeline: '12 weeks',
    impact: '80% workload reduction',
    tags: ['React', 'RAG', 'Multi-Tenant'],
    image: 'web',
  },
  {
    id: 'payrun-hrm-mobile',
    category: 'Mobile App',
    title: 'PAYRUN Mobile HR Management App',
    excerpt:
      'Scalable HRM mobile app with offline support and real-time workforce management',
    industry: 'Human Resources',
    timeline: '16 weeks',
    impact: 'Enterprise-ready HRM',
    tags: ['Flutter', 'BLoC', 'Hive DB'],
    image: 'mobile',
  },
  {
    id: 'crm-automation',
    category: 'Automation',
    title: 'End-to-End CRM Workflow Automation',
    excerpt: 'Automated sales pipeline from lead capture to close',
    industry: 'Real Estate',
    timeline: '8 weeks',
    impact: '80% faster processing',
    tags: ['Zapier', 'Salesforce', 'Webhooks'],
    image: 'automation',
  },
];

export default function CaseStudiesPage() {
  const { openModal } = useModal();
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'AI Automation',
    'AI Agents',
    'Web App',
    'Mobile App',
    'Automation',
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
          <h1 className="text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. Explore how we've helped businesses
            transform operations with AI automation and custom applications.
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
                className={`px-6 py-2 rounded-lg transition-all ${
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
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {study.image === 'automation' && (
                    <Zap className="w-16 h-16 text-primary/50" />
                  )}
                  {study.image === 'ai' && (
                    <TrendingUp className="w-16 h-16 text-primary/50" />
                  )}
                  {study.image === 'web' && (
                    <div className="text-6xl text-primary/50">🌐</div>
                  )}
                  {study.image === 'mobile' && (
                    <div className="text-6xl text-primary/50">📱</div>
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
            Start Your <span className="text-primary">Success Story</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something amazing together
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </main>
  );
}
