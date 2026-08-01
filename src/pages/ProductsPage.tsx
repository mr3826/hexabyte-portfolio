import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Zap, TrendingUp, AlertTriangle, MessageCircle } from 'lucide-react';

import { products, productAccessNote, Product } from '@/data/products';
import { trackEvent } from '@/utils/analytics';

import { useModal } from '@/context/ModalContext';
function ProductIdentity({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-primary mb-3">{product.category}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{product.name}</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {product.shortDescription}
      </p>

      <div className="bg-card border border-primary/20 rounded-xl p-6 mb-6">
        <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
          What you get out of it
        </h3>
        <p className="text-lg font-medium leading-snug">{product.promise}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span className="text-xs uppercase tracking-wider">Built for</span>
        {product.audience.map((audience) => (
          <span key={audience} className="px-2.5 py-1 bg-secondary rounded">
            {audience}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductPainPoints({ product }: { product: Product }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-2.5 mb-4">
        <AlertTriangle className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What the current way costs you
        </h3>
      </div>
      <ul className="space-y-3">
        {product.painPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive/70 flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-muted-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductWorkflow({ product }: { product: Product }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
        How a day runs
      </h3>
      <ol className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 text-sm">
        {product.workflow.map((step, idx) => (
          <Fragment key={step.step}>
            <li className="px-3 py-1.5 bg-primary/10 text-primary rounded-full flex-shrink-0">
              {step.step}
            </li>
            {idx < product.workflow.length - 1 && (
              <span className="text-muted-foreground/60 rotate-90 sm:rotate-0" aria-hidden="true">
                →
              </span>
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

export default function ProductsPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                Products Built by Hexabyte
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Software That Removes{' '}
              <span className="text-primary">a Cost You Already Pay</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Four products for commerce, service and supply-chain operations. Each one starts
              from a job someone is doing by hand today, and ends with that job running on its own.
            </p>
          </div>
        </div>
      </section>

      {/* Product index */}
      <nav
        aria-label="Products"
        className="border-t border-border bg-card/30 sticky top-[108px] md:top-20 z-30 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ul className="flex items-center gap-2 overflow-x-auto nav-strip-scroll py-3">
            {products.map((product) => (
              <li key={product.id} className="flex-shrink-0">
                <a
                  href={`#${product.anchor}`}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors whitespace-nowrap"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {products.map((product, index) => {
        // Alternate the copy/context order so four sections do not read identically.
        const contextFirst = index % 2 === 1;

        return (
          <section
            key={product.id}
            id={product.anchor}
            className="py-16 sm:py-24 border-t border-border"
            style={{ scrollMarginTop: '170px' }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
                <div className={contextFirst ? 'lg:order-2' : ''}>
                  <ProductIdentity product={product} />
                </div>
                <div className={`space-y-6 ${contextFirst ? 'lg:order-1' : ''}`}>
                  <ProductPainPoints product={product} />
                  <ProductWorkflow product={product} />
                </div>
              </div>

              {/* What changes */}
              <div className="mb-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <TrendingUp className="w-4 h-4 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    What changes once it runs
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="bg-card border border-primary/20 rounded-xl p-6"
                    >
                      <h4 className="font-semibold mb-2">{outcome.label}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                  What it does
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.capabilities.map((capability) => (
                    <div key={capability.title} className="bento-card group flex flex-col">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <capability.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-base font-semibold mb-2">{capability.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs — Link for internal routes, anchor for external URLs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {product.cta.map((cta) => {
                  const isExternal = Boolean(cta.href?.startsWith('http'));
                  const className =
                    cta.variant === 'primary'
                      ? 'cta-engineering justify-center'
                      : 'min-h-[44px] px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2 border border-border text-foreground hover:bg-secondary';
                  const icon = isExternal ? (
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  );
                  const onClick = () => trackEvent('cta_clicked', { source: cta.source });

                  // No href means "ask us about this" — open the inquiry modal and
                  // carry the product's source through, so the enquiry records which
                  // product prompted it.
                  if (!cta.href) {
                    return (
                      <button
                        key={cta.source}
                        type="button"
                        onClick={() => {
                          onClick();
                          openModal(cta.source);
                        }}
                        className={className}
                      >
                        {cta.label}
                        {icon}
                      </button>
                    );
                  }

                  return isExternal ? (
                    <a
                      key={cta.source}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClick}
                      className={className}
                    >
                      {cta.label}
                      {icon}
                    </a>
                  ) : (
                    <Link key={cta.source} to={cta.href} onClick={onClick} className={className}>
                      {cta.label}
                      {icon}
                    </Link>
                  );
                })}
              </div>

              {/* How access works, then who operates it */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="w-4 h-4 text-primary mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {productAccessNote}
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary mb-2">
                    {product.operatorStatement}
                  </p>
                  {product.legalLinks && product.legalLinks.length > 0 && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {product.legalLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1.5"
                        >
                          {link.label}
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bridge to custom engineering */}
      <section className="py-14 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider text-primary mb-4">Custom Engineering</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Your bottleneck isn't on this page?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Then it gets built for your operation — same standards, scoped to the process that is
            actually costing you time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                type="button"
                onClick={() => openModal('products_final_cta')}
                className="cta-engineering justify-center"
              >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-6 py-3 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
