import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { DoctorsPage } from '@/pages/DoctorsPage';
import { DoctorProfilePage } from '@/pages/DoctorProfilePage';
import { SpecialtiesPage } from '@/pages/SpecialtiesPage';
import { SpecialtyDetailPage } from '@/pages/SpecialtyDetailPage';
import { InsurancePage } from '@/pages/InsurancePage';
import { HealthGuidePage } from '@/pages/HealthGuidePage';
import { ArticlePage } from '@/pages/ArticlePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { BookPage } from '@/pages/BookPage';
import { PrivacyPolicyPage, TermsPage, MedicalDisclaimerPage, NotFoundPage } from '@/pages/LegalPages';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:slug" element={<DoctorProfilePage />} />
            <Route path="/specialties" element={<SpecialtiesPage />} />
            <Route path="/specialties/:slug" element={<SpecialtyDetailPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/health-guide" element={<HealthGuidePage />} />
            <Route path="/health-guide/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}