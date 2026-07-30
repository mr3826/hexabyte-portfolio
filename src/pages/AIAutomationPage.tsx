import {
  ArrowRight,
  Clock,
  Zap,
  TrendingUp,
  FileSearch,
  Inbox,
  Repeat,
  ClipboardCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';

/** The four jobs businesses most often ask us to take off a person's desk. */
const TIME_SINKS = [
  {
    icon: Inbox,
    title: 'Answering the same questions',
    desc: 'Price, stock, delivery time, opening hours. Answered instantly from your own information, at any hour, with a person pulled in only when it matters.',
  },
  {
    icon: Repeat,
    title: 'Moving data between systems',
    desc: 'Orders retyped into a courier panel, leads copied into a sheet, invoices keyed in twice. Handled without anyone remembering to do it.',
  },
  {
    icon: ClipboardCheck,
    title: 'Chasing approvals and follow-ups',
    desc: 'The quote nobody replied to, the document waiting on a signature, the customer who never got called back. Tracked and nudged automatically.',
  },
  {
    icon: FileSearch,
    title: 'Finding the answer in documents',
    desc: 'Contracts, policies, specs and past decisions searched in seconds, with the source shown so the answer can be checked.',
  },
];

export default function AIAutomationPage() {
  const { openModal } = useModal();

  return (
    <main className="pt-[108px] md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-14 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs text-primary uppercase tracking-wider mb-4">
              Operational Automation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Stop Paying Salaries for{' '}
              <span className="text-primary">Copy and Paste</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Every business has work that runs on someone's memory and a lot of retyping. We
              find the most expensive of it, automate it, and show you the difference in hours
              and cost.
            </p>
            <button
              onClick={() => openModal('ai_automation_hero_primary')}
              className="cta-engineering"
            >
              Find My Biggest Time Sink
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* What we take off your desk */}
      <section className="py-16 sm:py-20 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">Where The Hours Go</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Four Jobs Worth Taking Off a Person
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the ones that pay back fastest, in almost every operation we look at.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {TIME_SINKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bento-card group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Answers from your own information */}
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Answers From{' '}
                <span className="text-primary">Your Own Information</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A general-purpose chatbot will answer confidently and be wrong about your prices,
                your policies and your stock. We build assistants that can only answer from what
                your business has actually written down — and that show where each answer came
                from.
              </p>
              <ul className="space-y-4">
                {[
                  'Answers grounded in your documents, prices and policies',
                  'The source shown, so any answer can be checked',
                  'Handover to a person the moment it is uncertain',
                  'A log of the questions you cannot answer yet',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-8">
              <div className="space-y-4">
                {[
                  {
                    icon: FileSearch,
                    title: 'Your documents',
                    desc: 'Prices, policies, product details, past decisions',
                  },
                  {
                    icon: Clock,
                    title: 'The question',
                    desc: 'Asked by a customer or your own team, any hour',
                  },
                  {
                    icon: TrendingUp,
                    title: 'An answer you can check',
                    desc: 'With the document it came from attached',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{title}</div>
                      <div className="text-xs text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a workflow runs */}
      <section className="py-16 sm:py-20 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary uppercase tracking-wider mb-3">In Practice</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What Automated Work Looks Like
            </h2>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
              {[
                { step: 'Something happens', desc: 'An order, an enquiry, a form, a due date' },
                { step: 'It gets handled', desc: 'Checked, completed, routed — by rules you set' },
                { step: 'Everything is updated', desc: 'Systems, records and the people who need to know' },
              ].map(({ step, desc }, idx, all) => (
                <div key={step} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="text-center max-w-[15rem]">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary">{idx + 1}</span>
                    </div>
                    <div className="font-semibold mb-1">{step}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                  {idx < all.length - 1 && (
                    <ArrowRight
                      className="w-8 h-8 text-primary rotate-90 lg:rotate-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            What Would You Do With <span className="text-primary">Ten Hours a Week?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us how the work runs today. We will come back with what can be automated, what
            it saves, and what it costs — before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('ai_automation_final_cta')}
              className="cta-engineering justify-center"
            >
              Start With One Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <Link
              to="/case-studies/rag-chatbot"
              className="min-h-[44px] px-6 py-3 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
            >
              See It Working
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
