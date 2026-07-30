import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Package, Layers } from 'lucide-react';

const DESTINATIONS = [
  { to: '/', label: 'Home', description: 'Start from the top', icon: Home },
  { to: '/products', label: 'Products', description: 'Four focused products', icon: Package },
  { to: '/case-studies', label: 'Work', description: 'Systems and product builds', icon: Layers },
];

/**
 * Rendered by the `*` route and by CaseStudyDetail for an unknown id.
 *
 * The noindex tag is owned by this component rather than RouteObserver: mounting
 * here *is* the route-aware signal that nothing matched, whereas a pathname check
 * in RouteObserver would have to duplicate the route table and drift from it.
 */
export default function NotFoundPage() {
  useEffect(() => {
    // RouteObserver has no route table and falls back to the homepage title for an
    // unmatched path, so correct it here where we know nothing matched.
    document.title = 'Page Not Found | Hexabyte Technologies';

    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, follow';
    document.head.appendChild(meta);

    return () => meta.remove();
  }, []);

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a] min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
              404 — Page not found
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              This page doesn&apos;t exist
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              The link may be out of date or mistyped. Everything below is still where it should
              be.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            {DESTINATIONS.map(({ to, label, description, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div className="font-semibold mb-1 flex items-center gap-1.5">
                  {label}
                  <ArrowRight
                    className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
