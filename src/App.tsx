import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIAutomationPage from '@/pages/AIAutomationPage';
import WebAppPage from '@/pages/WebAppPage';
import MobileAppPage from '@/pages/MobileAppPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import AboutPage from '@/pages/AboutPage';
import ProcessPage from '@/pages/ProcessPage';
import PricingPage from '@/pages/PricingPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ProductsPage from '@/pages/ProductsPage';
import { ModalProvider } from '@/context/ModalContext';
import ScrollToTop from '@/components/ScrollToTop';
import { trackEvent } from '@/utils/analytics';

type RouteSeo = {
  title: string;
  description: string;
};

const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'Hexabyte | Founder-Led AI Automation, Web & Mobile Development',
    description:
      'Founder-led agency helping SMB teams ship AI automation, web apps, and mobile products with direct accountability and production-first delivery.',
  },
  '/ai-automation': {
    title: 'AI Automation Services | Hexabyte',
    description:
      'Automate repetitive operations with founder-led AI workflow systems, integrations, and production-ready automation delivery.',
  },
  '/web-development': {
    title: 'Custom Web App Development | Hexabyte',
    description:
      'Build reliable, scalable web applications with founder-level accountability and practical product execution.',
  },
  '/mobile-development': {
    title: 'Mobile App Development | Hexabyte',
    description:
      'Launch mobile products faster with production-focused Flutter and mobile engineering support for founder teams.',
  },
  '/products': {
    title: 'Our Products | Easy Moderator & TradeFlow | Hexabyte',
    description:
      'Two live SaaS products built by Hexabyte: Easy Moderator for omni-channel e-commerce inventory management and TradeFlow for garment supply chain operations.',
  },
  '/about': {
    title: 'About Hexabyte | The Founder Story',
    description:
      'The story behind Hexabyte — why we built our own products first, how we approach client work, and where we are headed.',
  },
  '/process': {
    title: 'Our Process | Hexabyte — How We Scope & Deliver',
    description:
      'How Hexabyte thinks, scopes, and delivers. A 4-phase framework with direct founder communication, weekly demos, and milestone-based delivery from 6 to 20 weeks.',
  },
  '/pricing': {
    title: 'Pricing | Hexabyte — Fixed-Price Custom Software',
    description:
      'Transparent fixed pricing for custom software projects. Focused Build (from $3,000), Systems Integration (from $8,000), and Custom Platform — scoped before work begins.',
  },
  '/resources': {
    title: 'Resources | Hexabyte - Free Automation Tools & Guides',
    description:
      'Free automation checklists, ROI calculators, and guides for e-commerce and supply chain operations. Subscribe to our newsletter for weekly insights.',
  },
  '/case-studies': {
    title: 'Case Studies | Hexabyte',
    description:
      'Explore founder-led AI automation, web app, and mobile delivery case studies with implementation details and outcomes.',
  },
};

function upsertMetaTag(name: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (existing) {
    existing.content = content;
    return;
  }

  const tag = document.createElement('meta');
  tag.name = name;
  tag.content = content;
  document.head.appendChild(tag);
}

function upsertOgTag(property: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (existing) {
    existing.content = content;
    return;
  }

  const tag = document.createElement('meta');
  tag.setAttribute('property', property);
  tag.content = content;
  document.head.appendChild(tag);
}

function upsertCanonical(url: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (existing) {
    existing.href = url;
    return;
  }

  const tag = document.createElement('link');
  tag.rel = 'canonical';
  tag.href = url;
  document.head.appendChild(tag);
}

function RouteObserver() {
  const location = useLocation();

  useEffect(() => {
    const isCaseDetail = location.pathname.startsWith('/case-studies/');
    const caseId = isCaseDetail ? location.pathname.replace('/case-studies/', '') : null;

    const CASE_SEO: Record<string, RouteSeo> = {
      'shopify-automation': {
        title: 'Shopify Multi-Channel Automation Case Study | Hexabyte',
        description: 'How Hexabyte built an event-driven automation platform syncing Shopify, Amazon, and eBay inventory and order workflows in 12 weeks.',
      },
      'easy-moderator': {
        title: 'Easy Moderator — Commerce Moderation Platform Case Study | Hexabyte',
        description: 'Full-stack multi-tenant moderation system with role-aware workflows, social integration hooks, and automated testing pipelines.',
      },
      'tradeflow': {
        title: 'TradeFlow — Garment Supply Chain SaaS Case Study | Hexabyte',
        description: 'Mobile-first operational SaaS for Bangladesh buying houses with WhatsApp-native updates, risk scoring, and auditable order management.',
      },
      'reel-studio': {
        title: 'Reel Studio — AI Video Generation Pipeline Case Study | Hexabyte',
        description: 'FastAPI-based AI video automation workflow with queue orchestration, checkpoint recovery, and cloud storage integration.',
      },
      'rag-chatbot': {
        title: 'RAG Chatbot — Retrieval-Augmented Generation Case Study | Hexabyte',
        description: 'Vector embedding pipeline combined with LLM inference for accurate, data-grounded conversational responses on internal documents.',
      },
    };

    const routeSeo = isCaseDetail
      ? (caseId && CASE_SEO[caseId]) || {
          title: 'Case Study | Hexabyte',
          description: 'Detailed breakdown of founder-led delivery from problem framing to implementation and measurable outcomes.',
        }
      : ROUTE_SEO[location.pathname] || ROUTE_SEO['/'];

    const fullUrl = `${window.location.origin}${location.pathname}`;
    const ogImage = `${window.location.origin}/og-image.png`;

    document.title = routeSeo.title;
    upsertMetaTag('description', routeSeo.description);
    upsertCanonical(fullUrl);

    // OpenGraph
    upsertOgTag('og:type', 'website');
    upsertOgTag('og:site_name', 'Hexabyte');
    upsertOgTag('og:url', fullUrl);
    upsertOgTag('og:title', routeSeo.title);
    upsertOgTag('og:description', routeSeo.description);
    upsertOgTag('og:image', ogImage);

    // Twitter / X
    upsertMetaTag('twitter:card', 'summary_large_image');
    upsertMetaTag('twitter:title', routeSeo.title);
    upsertMetaTag('twitter:description', routeSeo.description);
    upsertMetaTag('twitter:image', ogImage);

    // JSON-LD structured data
    const existingSchema = document.head.querySelector('#jsonld-schema');
    if (existingSchema) existingSchema.remove();

    const schema: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Hexabyte',
        url: window.location.origin,
        logo: `${window.location.origin}/hexabyte-logo.png`,
        email: 'contact@hexabyte.tech',
        sameAs: [
          'https://www.linkedin.com/in/mr3826',
          'https://github.com/mr3826',
        ],
        description: 'Founder-led B2B software agency. Custom automation, web and mobile solutions, and two live SaaS products: Easy Moderator and TradeFlow.',
      },
    ];

    if (location.pathname === '/') {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Hexabyte a freelancer or an agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An agency — founder-led. The founder personally owns every engagement from scoping to delivery. Specialists are brought in when the project requires it.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will I work directly with the founder?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every client has direct founder access throughout strategy, implementation, and post-launch. No account managers, no intermediaries.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens after the discovery conversation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You receive a scoped implementation path: clear problem framing, proposed approach, milestone plan, and fixed price — before any commitment.',
            },
          },
        ],
      });
    }

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema.length === 1 ? schema[0] : schema);
    document.head.appendChild(script);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith('/case-studies/')) {
      trackEvent('case_study_viewed', {
        case_id: location.pathname.replace('/case-studies/', ''),
      });
      return;
    }

    if (
      location.pathname === '/ai-automation' ||
      location.pathname === '/web-development' ||
      location.pathname === '/mobile-development'
    ) {
      trackEvent('service_page_viewed', {
        service_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteObserver />
      <ModalProvider>
        <div className="min-h-screen bg-background text-foreground font-['Inter']">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/web-development" element={<WebAppPage />} />
            <Route path="/mobile-development" element={<MobileAppPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          </Routes>
          <Footer />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}
