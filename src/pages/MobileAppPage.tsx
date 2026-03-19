import {
  ArrowRight,
  Smartphone,
  Layers,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Link } from 'react-router-dom';
import mobileScreenshot from '@/assets/placeholder-image.svg';

export default function MobileAppPage() {
  const { openModal } = useModal();
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                App Store & Play Store Ready
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
              <span className="text-primary">Cross-Platform</span> Mobile Apps
              That Scale
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Flutter-based iOS and Android apps with AI-powered features,
              published on App Store and Play Store. One codebase, two
              platforms.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Launch Your App <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Flutter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            Why <span className="text-primary">Flutter?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                Single Codebase
              </h3>
              <p className="text-muted-foreground">
                Write once, deploy to both iOS and Android. Faster development,
                lower costs, and easier maintenance.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <Layers className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                Native Performance
              </h3>
              <p className="text-muted-foreground">
                Compiled to native code for smooth 60fps animations and
                exceptional performance on both platforms.
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-['Space_Grotesk']">
                Beautiful UI
              </h3>
              <p className="text-muted-foreground">
                Rich, customizable widgets that look and feel native on each
                platform, with pixel-perfect control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-12 text-center">
            What We <span className="text-primary">Build</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'AI-Powered Features',
                    desc: 'ML Kit, image recognition, natural language processing',
                  },
                  {
                    title: 'Real-Time Sync',
                    desc: 'Firebase, WebSocket connections for live updates',
                  },
                  {
                    title: 'Push Notifications',
                    desc: 'FCM integration for iOS and Android',
                  },
                  {
                    title: 'In-App Purchases',
                    desc: 'Stripe, Apple Pay, Google Pay integration',
                  },
                  {
                    title: 'Offline Support',
                    desc: 'Local storage and sync when online',
                  },
                  {
                    title: 'Biometric Auth',
                    desc: 'Face ID, Touch ID, fingerprint',
                  },
                  {
                    title: 'Camera & Media',
                    desc: 'Photo, video, and audio processing',
                  },
                  {
                    title: 'Maps & Location',
                    desc: 'Google Maps, location tracking',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Phone Mockup with Real Screenshot */}
              <div className="w-72 mx-auto">
                <img
                  src={mobileScreenshot}
                  alt="Mobile app interface showing live data dashboard"
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl hover:shadow-primary/30 transition-shadow duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-6">
              Published on{' '}
              <span className="text-primary">Major App Stores</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We handle the entire submission process, from app store
              optimization to compliance with Apple and Google guidelines.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-background/50 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-muted-foreground">Apps on App Store</div>
              </div>
              <div className="bg-background/50 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-muted-foreground">Apps on Play Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Build{' '}
            <span className="text-primary">Your Mobile App?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reach millions of users on iOS and Android with a single codebase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Start Your App
            </button>
            <Link
              to="/case-studies"
              className="px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View Our Apps
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
