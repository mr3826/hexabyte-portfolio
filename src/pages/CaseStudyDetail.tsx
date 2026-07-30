import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { getCaseStudyById, getCaseStudyImage } from '@/data/caseStudies';
import { company } from '@/data/company';
import NotFoundPage from '@/pages/NotFoundPage';

export default function CaseStudyDetail() {
  const { id } = useParams();
  
  // Redirect old Shopify case study to Easy E-commerce
  if (id === 'shopify-automation') {
    return <Navigate to="/case-studies/easy-ecommerce" replace />;
  }

  const study = id ? getCaseStudyById(id) : null;
  const studyVisual = id ? getCaseStudyImage(id) : null;

  // One 404 implementation, so an unknown case-study id is noindexed too.
  if (!study) {
    return <NotFoundPage />;
  }

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>

            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {study.category}
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {study.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Industry</div>
                <div className="font-semibold">{study.industry}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{study.timeline}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Result</div>
                <div className="font-semibold">{study.impact}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {studyVisual && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card">
              <img
                src={studyVisual.src}
                alt={studyVisual.alt}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Project <span className="text-primary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-card border border-destructive/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              {study.problem.title}
            </h2>
            <ul className="space-y-3">
              {study.problem.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  </div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {study.solution.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {study.solution.description}
            </p>
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-primary">Our Approach</h3>
              <ul className="space-y-3">
                {study.solution.approach.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {study.results.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {study.results.metrics.map((metric: any, idx: number) => (
                <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="text-sm font-semibold text-primary mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-primary">Key Outcomes</h3>
              <ul className="space-y-3">
                {study.results.outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {study.workflow.title}
            </h2>
            <div className="space-y-4">
              {study.workflow.steps.map((step: any, idx: number) => (
                <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.phase}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-card border border-primary/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Where this goes next</h2>
            <p className="text-muted-foreground leading-relaxed">{study.nextSteps}</p>
          </div>

          {/* Implementation detail, deliberately last: it matters to a technical
              reviewer and to nobody else reading for the business outcome. */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Under the hood</h2>
            <p className="text-sm text-muted-foreground mb-6">
              For the technical reader — what your team would be inheriting.
            </p>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — a reader who got this far recognised their own operation. */}
      <section className="py-14 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Does this sound like your operation?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Bring us the process that is costing you the most time. We will tell you plainly
            whether it is worth automating.
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