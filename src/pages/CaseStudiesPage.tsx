import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

import { company } from '@/data/company';
import {
  caseStudies,
  CASE_STUDY_DOMAINS,
  EVIDENCE_TYPES,
  EvidenceType,
} from '@/data/caseStudies';
import { getProductById } from '@/data/products';
import { ProductStatusBadge } from '@/components/ProductStatusBadge';

/** Plural filter label for each evidence type. */
const EVIDENCE_FILTER_LABEL: Record<EvidenceType, string> = {
  'Deployed System': 'Deployed Systems',
  'Live Product': 'Live Products',
  'Beta Product Build': 'Beta Product Builds',
  'Internal R&D': 'Internal R&D',
};

const EVIDENCE_STYLE: Record<EvidenceType, string> = {
  'Deployed System': 'bg-success/10 text-success border border-success/25',
  'Live Product': 'bg-primary/10 text-primary border border-primary/25',
  'Beta Product Build': 'bg-warning/10 text-warning border border-warning/25',
  'Internal R&D': 'bg-muted text-muted-foreground border border-border',
};

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');

  // Derived from the data, so a new case study cannot end up unreachable behind a
  // hand-maintained filter list.
  const filters = useMemo(() => {
    const present = new Set(caseStudies.map((study) => study.evidenceType));
    const domains = new Set(caseStudies.map((study) => study.domain));
    return [
      'All',
      ...EVIDENCE_TYPES.filter((type) => present.has(type)).map(
        (type) => EVIDENCE_FILTER_LABEL[type],
      ),
      ...CASE_STUDY_DOMAINS.filter((domain) => domains.has(domain)),
    ];
  }, []);

  const filteredStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter(
          (study) =>
            EVIDENCE_FILTER_LABEL[study.evidenceType] === filter || study.domain === filter,
        );

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-primary uppercase tracking-wider mb-4">Selected Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Systems Delivered.{' '}
            <span className="text-primary">Products Being Built.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent view of deployed systems, live products, and beta product builds —
            including the problem, architecture, current status, and available evidence.
          </p>
        </div>
      </section>

      {/* Filters */}
      {/* The mobile header is 108px tall (top bar + category strip), not 80px. */}
      <section className="py-4 bg-[#0a0a0a]/80 sticky top-[108px] md:top-20 z-30 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category ? 'true' : 'false'}
                aria-label={`Filter work by ${category}`}
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
            {filteredStudies.map((study) => {
              // Status comes from the product record rather than being re-derived from ids.
              const productStatus = study.productId
                ? getProductById(study.productId)?.status
                : undefined;

              return (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                aria-label={`View case study: ${study.title}`}
                className="bento-card group flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${EVIDENCE_STYLE[study.evidenceType]}`}
                    >
                      {study.evidenceType}
                    </span>
                    {productStatus && <ProductStatusBadge status={productStatus} />}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-3 h-3" aria-hidden="true" />
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
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-border mt-auto">
                  <span className="text-sm text-primary">{study.impact}</span>
                  <ArrowRight
                    className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Ready to <span className="text-primary">Build?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute call. We will map your requirements and define an architecture you
            can actually run.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={company.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <Link
              to="/products"
              className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}