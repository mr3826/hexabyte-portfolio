import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import ResourcesPage from '@/pages/ResourcesPage';
import ProductsPage from '@/pages/ProductsPage';
import CompanyInformationPage from '@/pages/CompanyInformationPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ModalProvider } from '@/context/ModalContext';
import ScrollToTop from '@/components/ScrollToTop';
import { company } from '@/data/company';
import { trackEvent } from '@/utils/analytics';

type RouteSeo = {
  title: string;
  description: string;
};

const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'Hexabyte Technologies | AI Systems, Automation and Digital Products',
    description:
      'Hexabyte Technologies builds practical AI automation, web and mobile systems, and focused software products including Easy Moderator, Easy Assistance, Easy E-commerce, and TradeFlow.',
  },
  '/ai-automation': {
    title: 'AI Automation Engineering | Hexabyte',
    description:
      'Production-grade AI workflow systems, RAG pipelines, and autonomous agents. Built for scale, not demos.',
  },
  '/web-development': {
    title: 'Web Application Engineering | Hexabyte',
    description:
      'Next.js + Supabase stacks with real-time sync. Production-ready web applications deployed in weeks.',
  },
  '/mobile-development': {
    title: 'Mobile Systems Engineering | Hexabyte',
    description:
      'Flutter + native SDK integrations for iOS/Android. Ship mobile infrastructure that performs at scale.',
  },
  '/products': {
    title: 'Software Products | Easy Moderator, Easy E-commerce, Easy Assistance and TradeFlow',
    description:
      'Explore software products built by Hexabyte Technologies for social commerce, online stores, bookings, customer operations, and supply-chain teams.',
  },
  '/about': {
    title: 'The Engineering Partner | Hexabyte',
    description:
      'High-velocity engineering partner for fast-moving teams. Production-first systems, direct technical leadership.',
  },
  '/process': {
    title: 'How We Deliver | Hexabyte Engineering Process',
    description:
      '4-phase delivery: Discovery → Architecture → Build → Scale. Direct engineering leadership, weekly demos, production in weeks not quarters.',
  },
  '/resources': {
    title: 'Engineering Resources | Hexabyte',
    description:
      'Technical guides, automation patterns, and architecture blueprints for engineering teams building scalable systems.',
  },
  '/case-studies': {
    title: 'System Deployments | Hexabyte Case Studies',
    description:
      'Production deployments with architecture details: RAG pipelines, event-driven automation, multi-tenant SaaS systems, and product builds. Technical breakdowns.',
  },
  '/company-information': {
    title: 'Company Information | Hexabyte Technologies',
    description:
      'Registered business details for Hexabyte Technologies: legal name, address, contact information, products operated, and verification for customers, partners, and platform reviewers.',
  },
};

const CASE_SEO: Record<string, RouteSeo> = {
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
  'easy-assistance': {
    title: 'Easy Assistance — AI Booking and Customer Operations Case Study | Hexabyte',
    description: 'Conversational booking platform for service businesses — AI qualification, availability checking, confirmation, reminders, and follow-up automation.',
  },
  'easy-ecommerce': {
    title: 'Easy E-commerce — AI Store and Commerce Builder Case Study | Hexabyte',
    description: 'AI-guided website and commerce operations platform for Bangladesh-first merchants — store creation, catalogue, checkout, courier, and merchant operations.',
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
    upsertOgTag('og:site_name', 'Hexabyte Technologies');
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

    // The single source of Organization schema for the whole site. Facts come from
    // src/data/company.ts so they cannot drift from what the pages display.
    const schema: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.legalName,
        alternateName: company.brandName,
        legalName: company.legalName,
        url: window.location.origin,
        logo: `${window.location.origin}/hexabyte-logo.png`,
        image: `${window.location.origin}/og-image.png`,
        email: company.email,
        telephone: company.phoneHref,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.street,
          addressLocality: company.address.locality,
          addressRegion: company.address.region,
          postalCode: company.address.postalCode,
          addressCountry: company.address.countryCode,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: company.email,
          telephone: company.phoneHref,
          availableLanguage: ['English', 'Bengali'],
        },
        founder: {
          '@type': 'Person',
          name: company.founder,
          // Personal profiles belong to the Person, not the Organization.
          sameAs: [company.founderSocial.linkedin, company.founderSocial.github],
        },
        // Company-owned profiles only.
        sameAs: [company.social.facebook],
        description:
          'Founder-led technology company. Practical AI systems, operational automation, web and mobile applications, and focused software products for commerce, service, and supply-chain operations.',
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
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/shopify-automation" element={<Navigate to="/case-studies/easy-ecommerce" replace />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/company-information" element={<CompanyInformationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}