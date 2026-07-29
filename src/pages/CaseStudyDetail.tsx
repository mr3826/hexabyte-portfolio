import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { getCaseStudyById, getCaseStudyImage } from '@/data/caseStudies';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = id ? getCaseStudyById(id) : null;
  const studyVisual = id ? getCaseStudyImage(id) : null;

  if (!study) {
    return (
      <main className="pt-[108px] md:pt-20 min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
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

          <h1 className="text-4xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6">
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
                <div className="text-sm text-muted-foreground">Impact</div>
                <div className="font-semibold">{study.impact}</div>
              </div>
            </div>
          </div>

          {study.evidenceConfidence && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary">
              Evidence confidence: {study.evidenceConfidence}
            </div>
          )}
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
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Project <span className="text-primary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-card border border-destructive/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">
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
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
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

          {/* Key Features (if exists) */}
          {study.features && (
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.features.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.features.items.map((feature: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture (if exists) */}
          {study.architecture && (
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.architecture.title}
              </h2>
              <div className="space-y-4">
                {study.architecture.layers.map((layer: any, idx: number) => (
                  <div key={idx} className="bg-card border border-primary/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-2 text-primary">{layer.component}</h3>
                    <p className="text-muted-foreground">{layer.tech}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scalability (if exists) */}
          {study.scalability && (
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.scalability.title}
              </h2>
              <p className="text-muted-foreground mb-6">{study.scalability.description}</p>
              <ul className="space-y-3">
                {study.scalability.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Design Principles (if exists) */}
          {study.designPrinciples && (
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.designPrinciples.title}
              </h2>
              <p className="text-muted-foreground mb-6">{study.designPrinciples.description}</p>
              <ul className="space-y-3">
                {study.designPrinciples.elements.map((element: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{element}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
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
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
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
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-4">Next Steps</h2>
            <p className="text-muted-foreground leading-relaxed">{study.nextSteps}</p>
          </div>
        </div>
      </section>
    </main>
  );
}