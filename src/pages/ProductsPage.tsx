import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { ProductStatusBadge } from '@/components/ProductStatusBadge';

export default function ProductsPage() {
  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Products Built by Hexabyte</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Software Products Built Around{' '}
              <span className="text-primary">Real Operational Problems</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We build and operate focused software products for commerce, service businesses, and supply-chain teams.
              One product is publicly available, while three are being validated through beta programmes.
            </p>
          </div>
        </div>
      </section>

      {products.map((product) => (
        <section key={product.id} id={product.anchor} className="py-16 sm:py-24 border-t border-border" style={{ scrollMarginTop: '120px' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <ProductStatusBadge status={product.status} className="mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{product.name}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mb-6">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>Audience:</span>
                {product.audience.map((a, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary rounded">{a}{i < product.audience.length - 1 ? ',' : ''}</span>
                ))}
              </div>
            </div>

            {/* Promise */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 mb-12">
              <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">One-Sentence Promise</h3>
              <p className="text-lg font-medium">{product.promise}</p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {product.capabilities.map((capability) => (
                <div key={capability.title} className="bento-card group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
                  {capability.status && (
                    <span className={`text-xs px-2 py-1 rounded ${
                      capability.status === 'available' ? 'bg-success/10 text-success' :
                      capability.status === 'in-validation' ? 'bg-warning/10 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {capability.status === 'available' ? 'Available in Beta' :
                       capability.status === 'in-validation' ? 'In Validation' :
                       'Planned for Wider Release'}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Workflow Visual */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Product Workflow</h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 text-sm overflow-x-auto pb-4">
                {product.workflow.map((step, idx) => (
                    <>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap flex-shrink-0">
                        {step.step}
                      </span>
                      {idx < product.workflow.length - 1 && (
                        <span className="hidden sm:inline text-muted-foreground">→</span>
                      )}
                    </>
                  ))}
              </div>
            </div>

            {/* Beta Disclosure */}
            {product.betaDisclosure && (
              <div className="bg-warning/10 border border-warning/30 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-warning" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warning mb-2">Beta Status Disclosure</h4>
                    <p className="text-sm text-muted-foreground">{product.betaDisclosure}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {product.cta.map((cta, idx) => (
                <Link
                  key={idx}
                  to={cta.href}
                  target={cta.href.startsWith('http') ? '_blank' : undefined}
                  rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`min-h-[44px] px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2 ${
                    cta.variant === 'primary'
                      ? 'cta-engineering'
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Operator Statement & Legal Links */}
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-sm font-medium text-primary mb-2">{product.operatorStatement}</p>
              {product.legalLinks && product.legalLinks.length > 0 && (
                <div className="flex flex-wrap gap-4 text-sm">
                  {product.legalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1.5"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Bridge to Custom */}
      <section className="py-14 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider text-primary mb-4">Custom Engineering</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need something different?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When a client's problem doesn't fit a product, we build the solution from the ground up.
            Custom automation systems, same engineering standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/hexabyte/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-engineering justify-center"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/case-studies"
              className="min-h-[44px] px-8 py-4 bg-secondary border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See Deployments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}