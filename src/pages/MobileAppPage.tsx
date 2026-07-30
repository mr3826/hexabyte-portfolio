import {
  ArrowRight,
  Smartphone,
  Layers,
  Zap,
  CheckCircle2,
  WifiOff,
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Link } from 'react-router-dom';

/** Capabilities described by the operational problem they solve, not the SDK behind them. */
const CAPABILITIES = [
  {
    title: 'Captured on the spot',
    desc: 'Job status, readings, quantities and signatures recorded where the work happens, instead of written on paper and typed up that evening',
  },
  {
    title: 'Works with no signal',
    desc: 'A basement, a factory floor or a delivery route still records the update, and syncs when the connection comes back',
  },
  {
    title: 'Photo as proof',
    desc: 'Condition, damage and completion evidence attached to the job — the thing that settles a dispute later',
  },
  {
    title: 'Everyone sees the same status',
    desc: 'Head office stops calling to ask, because the update arrives the moment it is made',
  },
  {
    title: 'Alerts that reach the right person',
    desc: 'A new job, an urgent change or an approval request lands on the phone of whoever needs to act',
  },
  {
    title: 'Sign in without a password',
    desc: 'Face or fingerprint, so shared logins and sticky notes stop being your access control',
  },
  {
    title: 'Payment in the field',
    desc: 'Take payment at the door or at the counter, and have it reconcile against the order',
  },
  {
    title: 'Routes and locations',
    desc: 'Where the team is, where the job is, and the order to do them in',
  },
];

export default function MobileAppPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-[108px] md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-14 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                Mobile and Field Operations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              The Update Happens{' '}
              <span className="text-primary">Where the Work Does</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Delivery routes, factory floors, service calls, site visits. If the record is only
              written up hours later at a desk, it is already wrong. We build the app that
              captures it in seconds, on a phone, with no signal required.
            </p>
            <button
              onClick={() => openModal('mobile_app_hero_primary')}
              className="cta-engineering"
            >
              Describe Your Field Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* One app, both platforms */}
      <section className="py-16 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">How We Build It</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              One App, Both Platforms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your team is on a mix of Android and iPhone. Paying for two separate builds — and
              two sets of changes forever after — is a cost with no benefit to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: 'Built once, not twice',
                desc: 'One build covers Android and iPhone, so the quote and the timeline are roughly half of what two native apps cost.',
              },
              {
                icon: Layers,
                title: 'Feels like a normal app',
                desc: 'Smooth scrolling, native gestures and no lag — your team will not tolerate a phone app that fights them, and neither would we.',
              },
              {
                icon: WifiOff,
                title: 'Changes reach everyone at once',
                desc: 'One change ships to every device, instead of two codebases drifting apart until nobody knows which is right.',
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

      {/* Capabilities */}
      <section className="py-16 sm:py-20 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">What It Does</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Built Around the Job, Not the Feature List
            </h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {CAPABILITIES.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Getting it into hands */}
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Getting it onto your team's phones
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Publishing is part of the job, not an afterthought you inherit. Store listings,
              review requirements, privacy declarations and update releases are handled — and if
              the app is internal, it goes out to your team without a public listing at all.
            </p>
            <ul className="space-y-3">
              {[
                'Store submission and review requirements handled end to end',
                'Privacy and permission declarations prepared honestly, which is also what gets them approved',
                'Internal distribution where the app is for staff rather than the public',
                'Update releases after launch, so the first version is not the last one',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{item}</span>
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
            Still Running on{' '}
            <span className="text-primary">Paper and Phone Calls?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Walk us through one day of your field process. We will show you what it looks like
            when the record writes itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('mobile_app_final_cta')}
              className="cta-engineering justify-center"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <Link
              to="/case-studies/tradeflow"
              className="min-h-[44px] px-6 py-3 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See a Field Operations Build
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
