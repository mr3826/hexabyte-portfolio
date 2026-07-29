import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { ProductStatusBadge } from '@/components/ProductStatusBadge';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'Content Ops Platform',
    'Vertical SaaS',
    'AI Media Automation',
    'AI Knowledge System',
    'Product Build',
  ];

  const filteredStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
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
            Architecture breakdowns of deployed automation systems, product builds, and multi-tenant SaaS platforms.
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
                    {study.productId && (
                      <ProductStatusBadge status={study.id === 'easy-moderator' ? 'live' : study.id === 'tradeflow' ? 'beta' : 'private-beta'} />
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
                    <span key={tag.label} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                      {tag.label}
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