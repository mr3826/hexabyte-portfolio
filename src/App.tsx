import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
