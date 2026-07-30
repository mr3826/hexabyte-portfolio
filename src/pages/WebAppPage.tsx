import { ArrowRight, Globe, Code2, Layers, Rocket, ShieldCheck } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Link } from 'react-router-dom';

/** Comes as standard, phrased as what it means for the business rather than the acronym. */
const STANDARDS = [
  { title: 'Works on the phone your customers actually use', desc: 'Most visitors arrive on a mid-range Android. The site is built for that first, not for a designer\'s laptop.' },
  { title: 'Fast enough not to lose the sale', desc: 'Slow pages cost orders and search ranking. Speed is a delivery requirement, not a later optimisation.' },
  { title: 'Findable', desc: 'Titles, descriptions, structured data and a sitemap that let people find you without paying for every click.' },
  { title: 'Usable by everyone', desc: 'Keyboard access, readable contrast and screen-reader support — which also happens to be what search engines reward.' },
  { title: 'Payments that reconcile', desc: 'Checkout and subscription flows that match what lands in the bank, with failures visible instead of silent.' },
  { title: 'Monitored after launch', desc: 'You find out something broke from an alert, not from an angry customer.' },
];

export default function WebAppPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-[108px] md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-14 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                Web, Commerce and Internal Systems
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Software Your Team Stops{' '}
              <span className="text-primary">Working Around</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Most business software creates a second job: the spreadsheet beside it, the
              workaround everyone knows, the report someone rebuilds by hand every Monday. We
              build the system that removes those.
            </p>
            <button onClick={() => openModal('web_app_hero_primary')} className="cta-engineering">
              Describe Your Bottleneck
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-16 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">What We Build</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three Shapes This Usually Takes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Layers,
                title: 'Something you sell access to',
                desc: 'A platform your customers log into and pay for, with accounts, billing and permissions that hold up as you add customers rather than breaking at the tenth one.',
              },
              {
                icon: Code2,
                title: 'Something your team runs on',
                desc: 'The dashboard, order desk or admin tool that replaces a shared spreadsheet — so two people stop keeping different versions of the truth.',
              },
              {
                icon: Rocket,
                title: 'Something that decides for itself',
                desc: 'Applications where the routine judgement — sorting, drafting, flagging, answering — happens without a person in the loop, and escalates when it should.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bento-card group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 sm:py-20 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-primary uppercase tracking-wider mb-3">No Extra Charge</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                What Comes as Standard
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                These are not line items on a quote. They are the difference between software that
                works in a demo and software that survives your busiest week.
              </p>
              <div className="inline-flex items-start gap-3 rounded-xl border border-primary/20 bg-card p-5">
                <ShieldCheck
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  At handover you get the code, the deployment, the credentials and documentation
                  written for whoever maintains it next — including if that is not us.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {STANDARDS.map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            What Is Your Team{' '}
            <span className="text-primary">Working Around Today?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us the spreadsheet, the workaround or the report that eats every Monday. That is
            usually where the first build pays for itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('web_app_final_cta')}
              className="cta-engineering justify-center"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <Link
              to="/case-studies/easy-ecommerce"
              className="min-h-[44px] px-6 py-3 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See a Commerce Build
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
