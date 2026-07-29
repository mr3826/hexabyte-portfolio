import { Package, Layers, Calendar, Store, Shield, ExternalLink } from 'lucide-react';

export default function CompanyInformationPage() {
  return (
    <main className="pt-[108px] md:pt-20 bg-[#0a0a0a] min-h-screen">
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-primary uppercase tracking-wider mb-3">Company Information</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Hexabyte Technologies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Hexabyte Technologies is a founder-led information technology business based in Dhaka, Bangladesh.
            We build practical AI systems, operational automation, web and mobile applications, and focused software
            products for commerce, service, and supply-chain operations.
          </p>
        </div>
      </section>

      {/* Registered Business Details */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Registered Business Details</h2>

          <dl className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Legal Name</dt>
              <dd className="font-semibold">Hexabyte Technologies</dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Public Brand</dt>
              <dd className="font-semibold">Hexabyte</dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Business Structure</dt>
              <dd className="font-semibold">Sole Proprietorship</dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Business Activity</dt>
              <dd className="font-semibold">Information technology, software products, and engineering services</dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Registered Address</dt>
              <dd className="font-semibold">
                Plot-107, North Tower, 8th Floor, Sector-7, Uttara, Dhaka-1230, Bangladesh
              </dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd className="font-semibold">
                <a href="mailto:contact@hexabyte.tech" className="text-primary hover:underline">contact@hexabyte.tech</a>
              </dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Phone</dt>
              <dd className="font-semibold">
                <a href="tel:+8801886895874" className="text-primary hover:underline">+880 1886-895874</a>
              </dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Website</dt>
              <dd className="font-semibold">
                <a href="https://hexabyte.tech" className="text-primary hover:underline">https://hexabyte.tech</a>
              </dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Founder</dt>
              <dd className="font-semibold">Evan Ahmed</dd>
            </div>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-lg">
              <dt className="text-sm text-muted-foreground">Discovery Call</dt>
              <dd className="font-semibold">
                <a href="https://calendly.com/hexabyte/discovery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                  https://calendly.com/hexabyte/discovery
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Products Operated by Hexabyte Technologies */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Products Operated by Hexabyte Technologies</h2>

          <div className="space-y-4">
            <div className="bg-card border border-primary/20 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">Easy Moderator</div>
                  <div className="text-sm text-primary font-medium">Live & Available</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">AI Social-Commerce Operations</span>
            </div>

            <div className="bg-card border border-accent/20 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg">Easy E-commerce</div>
                  <div className="text-sm text-accent font-medium">Beta Testing</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">AI Store Builder</span>
            </div>

            <div className="bg-card border border-accent/20 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg">Easy Assistance</div>
                  <div className="text-sm text-accent font-medium">Beta Testing</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">AI Booking & Customer Ops</span>
            </div>

            <div className="bg-card border border-warning/20 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warning/15 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <div className="font-bold text-lg">TradeFlow</div>
                  <div className="text-sm text-warning font-medium">Beta Access</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-warning/10 text-warning rounded-full">Supply Chain Operations</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Product availability and feature scope may change during beta testing. Public product pages identify the current release status.
          </p>
        </div>
      </section>

      {/* Verification Note */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Verification Note</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Business information is published to help customers, partners, and platform reviewers confirm the operator
                  behind Hexabyte products and services. The Facebook Page, Meta Business Portfolio, website, and trade-licence
                  document must use the same legal name, address, phone, and website before business-verification submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Hexabyte Technologies',
            alternateName: 'Hexabyte',
            legalName: 'Hexabyte Technologies',
            url: 'https://hexabyte.tech',
            logo: 'https://hexabyte.tech/hexabyte-logo.png',
            email: 'contact@hexabyte.tech',
            telephone: '+8801886895874',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot-107, North Tower, 8th Floor, Sector-7',
              addressLocality: 'Uttara',
              addressRegion: 'Dhaka',
              postalCode: '1230',
              addressCountry: 'BD',
            },
            founder: {
              '@type': 'Person',
              name: 'Evan Ahmed',
            },
            sameAs: [
              'https://www.linkedin.com/in/mr3826',
              'https://github.com/mr3826',
            ],
          }, null, 2),
        }}
      />
    </main>
  );
}