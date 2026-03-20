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
  '/about': {
    title: 'About Hexabyte | Founder-Led Delivery',
    description:
      'Meet the founder-led team behind Hexabyte and learn how we execute AI, web, and mobile initiatives with direct accountability.',
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
    const routeSeo = isCaseDetail
      ? {
          title: 'Case Study Details | Hexabyte',
          description:
            'Detailed breakdown of founder-led delivery from problem framing to implementation and measurable outcomes.',
        }
      : ROUTE_SEO[location.pathname] || ROUTE_SEO['/'];

    document.title = routeSeo.title;
    upsertMetaTag('description', routeSeo.description);
    upsertCanonical(`${window.location.origin}${location.pathname}`);
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
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          </Routes>
          <Footer />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}
