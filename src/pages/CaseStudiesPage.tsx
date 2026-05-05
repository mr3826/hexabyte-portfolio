import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import shopifyCaseVisual from '@/assets/case-shopify-automation.svg';
import easyModeratorCaseVisual from '@/assets/case-easy-moderator.svg';
import tradeflowCaseVisual from '@/assets/case-tradeflow.svg';
import reelStudioCaseVisual from '@/assets/case-reel-studio.svg';
import ragChatbotCaseVisual from '@/assets/case-rag-chatbot.svg';

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
    image: shopifyCaseVisual,
    imageAlt:
      'Shopify automation architecture visual showing event routing and fulfillment synchronization',
  },
  {
    id: 'easy-moderator',
    category: 'Content Ops Platform',
    title: 'Easy Moderator Multi-Tenant Moderation System',
    excerpt:
      'Full-stack multi-tenant platform for commerce operations — role-aware moderation workflows, social integration hooks, and automated testing pipelines.',
    industry: 'Commerce Operations',
    timeline: '10 weeks',
    impact: 'Automated testing pipeline across frontend/backend/E2E',
    tags: ['React 18', 'Express', 'Redis'],
    image: easyModeratorCaseVisual,
    imageAlt:
      'Easy Moderator dashboard visual with moderation queue and review lanes',
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
    image: tradeflowCaseVisual,
    imageAlt:
      'TradeFlow mobile-first operations visual with risk dashboard and quick updates',
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
    image: reelStudioCaseVisual,
    imageAlt:
      'Reel Studio AI pipeline visual with staged rendering progress and checkpoint recovery',
  },
  {
    id: 'rag-chatbot',
    category: 'AI Knowledge System',
    title: 'RAG-Based Chatbot for Grounded Q&A',
    excerpt:
      'Retrieval-Augmented Generation system combining vector embeddings, document search, and LLM inference for accurate, data-grounded conversational responses.',
    industry: 'AI & Knowledge Management',
    timeline: '6 weeks',
    impact: 'Real-time data grounding with 99% accuracy on internal documents',
    tags: ['Vector DB', 'LLM APIs', 'Embeddings'],
    image: ragChatbotCaseVisual,
    imageAlt:
      'RAG chatbot architecture visual showing embedding pipeline, vector database search, and LLM response generation',
  },
];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'Automation Platform',
    'Content Ops Platform',
    'Vertical SaaS',
    'AI Media Automation',
    'AI Knowledge System',
  ];

  const filteredStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

  return (
    <main className="pt-20 bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-primary uppercase tracking-wider mb-4">System Deployments</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Production Systems.{' '}
            <span className="text-primary">Real Outcomes.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Architecture breakdowns of deployed automation systems. RAG pipelines, 
            event-driven orchestration, and multi-tenant SaaS platforms.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-[#0a0a0a]/80 sticky top-20 z-40 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category ? 'true' : 'false'}
                aria-label={`Filter case studies by ${category}`}
                className={`min-h-[44px] px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                aria-label={`View case study: ${study.title}`}
                className="bento-card group flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {study.category}
                    </span>
                    {study.id === 'shopify-automation' && (
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {study.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {study.excerpt}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-sm text-primary">{study.impact}</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Ready to <span className="text-primary">Deploy?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute engineering consultation. We'll map your automation 
            requirements and define a production-ready architecture.
          </p>
          <a
            href="https://calendly.com/hexabyte/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-engineering inline-flex"
          >
            Book Engineering Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}
