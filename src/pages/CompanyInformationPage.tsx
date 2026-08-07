import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Mail, Phone, Globe, MapPin, ShieldCheck } from 'lucide-react';

import { company, addressLine } from '@/data/company';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

import { useModal } from '@/context/ModalContext';
const TRUST_CHIPS = [
  `${company.address.region}, ${company.address.country}`,
  'Information Technology',
  'Founder-Led',
];

/** Fields shown in the hero profile card — identity only, no contact details or CTAs. */
const BUSINESS_PROFILE = [
  { term: 'Legal name', value: <>{company.legalNameBn} ({company.legalName})</> },
  { term: 'Public brand', value: company.brandName },
  { term: 'Business activity', value: company.activity },
  {
    term: 'Registered location',
    value: addressLine,
  },
];

const IDENTITY_DETAILS = [
  { term: 'Legal name', value: company.legalName },
  { term: 'Public brand', value: company.brandName },
  { term: 'Business activity', value: company.activity },
  { term: 'Founder', value: company.founder },
];

function DetailPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <dl className="space-y-5">{children}</dl>
    </div>
  );
}

function DetailRow({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{term}</dt>
      <dd className="font-medium leading-relaxed">{children}</dd>
    </div>
  );
}

export default function CompanyInformationPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Building2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  Registered Technology Business
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                {company.legalName}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                A founder-led technology business in {company.address.region} building practical
                AI systems, operational software, and focused digital products for commerce,
                service businesses, and supply-chain teams.
              </p>

              <ul className="flex flex-wrap gap-2 mb-8">
                {TRUST_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="text-xs px-3 py-1.5 bg-secondary border border-border rounded-full text-muted-foreground"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="cta-engineering justify-center">
                  Explore Products
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={`mailto:${company.email}`}
                  className="min-h-[44px] px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all inline-flex items-center justify-center gap-2"
                >
                  Contact Hexabyte
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Business profile card */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold">Business Profile</h2>
                </div>

                <dl className="space-y-4">
                  {BUSINESS_PROFILE.map(({ term, value }) => (
                    <div key={term} className="grid sm:grid-cols-5 gap-1 sm:gap-3">
                      <dt className="sm:col-span-2 text-xs uppercase tracking-wider text-muted-foreground sm:pt-0.5">
                        {term}
                      </dt>
                      <dd className="sm:col-span-3 text-sm font-medium leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground leading-relaxed">
                  Public business details are provided for customers, partners, and platform
                  verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company and contact details */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Company and Contact Details
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Official public information for {company.legalName} and the products it operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DetailPanel title="Company identity">
              {IDENTITY_DETAILS.map(({ term, value }) => (
                <DetailRow key={term} term={term}>
                  {value}
                </DetailRow>
              ))}
            </DetailPanel>

            <DetailPanel title="Contact and location">
              <DetailRow term="Registered address">
                <span className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{addressLine}</span>
                </span>
              </DetailRow>
              <DetailRow term="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Email Hexabyte
                </a>
              </DetailRow>
              <DetailRow term="Phone">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Call Hexabyte
                </a>
                <span className="block mt-1 text-sm text-muted-foreground font-normal">
                  {company.phoneDisplay}
                </span>
              </DetailRow>
              <DetailRow term="Website">
                <a href={company.website} className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Globe className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Visit {company.websiteDisplay}
                </a>
              </DetailRow>
            </DetailPanel>
          </div>
        </div>
      </section>

      {/* Products operated by Hexabyte */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Products Operated by {company.brandName}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Focused software products for commerce, bookings, customer operations, and
              supply-chain teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Each product is operated by {company.legalName}. Scope, pricing and onboarding for a
            specific business are agreed directly with us before anything goes live.
          </p>
        </div>
      </section>

      {/* Public business information */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 max-w-4xl">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">
              Public Business Information
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              A clear operator behind every product
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {company.brandName} publishes its legal business name, public contact details,
              registered business location, and product ownership so customers, partners, and
              verification teams can confirm who operates its services.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8">
              For privacy and security, personal identity documents and non-public registration
              details are never published on this website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Email Hexabyte
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Talk to the person building it
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discuss a product, a workflow problem, or an engineering engagement directly with
            the founder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                type="button"
                onClick={() => openModal('company_final_cta')}
                className="cta-engineering justify-center"
              >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
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
