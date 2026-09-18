import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for Al Amanah Medical Center." canonical="/privacy-policy" />
      <div className="container-app max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-bold text-navy-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-navy-600 space-y-4">
          <p>At {siteConfig.legalName}, we are committed to protecting your privacy and ensuring the confidentiality of your personal and health information.</p>
          <h2 className="text-lg font-bold text-navy-900">Information We Collect</h2>
          <p>We collect only the minimum information necessary to provide our services: your name, contact number, email (if provided), appointment preferences, and insurance details (if applicable). We do not collect medical information through our website forms.</p>
          <h2 className="text-lg font-bold text-navy-900">How We Use Your Information</h2>
          <p>Your information is used solely for the purpose of scheduling appointments, verifying insurance coverage, and providing healthcare services. We do not share your information with third parties without your consent, except as required by law.</p>
          <h2 className="text-lg font-bold text-navy-900">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
          <h2 className="text-lg font-bold text-navy-900">Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us.</p>
          <h2 className="text-lg font-bold text-navy-900">Contact</h2>
          <p>For any privacy-related questions, please contact us at {siteConfig.email} or {siteConfig.phone}.</p>
          <p className="text-xs text-navy-400">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for Al Amanah Medical Center." canonical="/terms" />
      <div className="container-app max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-bold text-navy-900 mb-6">Terms & Conditions</h1>
        <div className="prose prose-sm max-w-none text-navy-600 space-y-4">
          <p>By using the website and services of {siteConfig.legalName}, you agree to the following terms and conditions.</p>
          <h2 className="text-lg font-bold text-navy-900">Appointment Requests</h2>
          <p>Appointments booked through our website are requests, not confirmed bookings. Our team will contact you to confirm availability. We reserve the right to reschedule or decline appointment requests.</p>
          <h2 className="text-lg font-bold text-navy-900">Pricing</h2>
          <p>Prices displayed on this website are indicative and may vary depending on clinical assessment. Please confirm the final price with our team before or during your visit.</p>
          <h2 className="text-lg font-bold text-navy-900">Insurance</h2>
          <p>Insurance coverage is subject to plan eligibility, authorization, and the terms of your insurance provider. We do not guarantee coverage for any specific treatment.</p>
          <h2 className="text-lg font-bold text-navy-900">Medical Disclaimer</h2>
          <p>The information provided on this website is for general guidance only and does not replace professional medical assessment, diagnosis, or treatment.</p>
          <p className="text-xs text-navy-400">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export function MedicalDisclaimerPage() {
  return (
    <>
      <SEO title="Medical Disclaimer" description="Medical Disclaimer for Al Amanah Medical Center." canonical="/medical-disclaimer" />
      <div className="container-app max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-bold text-navy-900 mb-6">Medical Disclaimer</h1>
        <div className="prose prose-sm max-w-none text-navy-600 space-y-4">
          <p>The information provided on the {siteConfig.legalName} website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
          <h2 className="text-lg font-bold text-navy-900">Always Seek Professional Advice</h2>
          <p>Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>
          <h2 className="text-lg font-bold text-navy-900">No Medical Diagnosis Through This Website</h2>
          <p>The symptom search and navigation tools on this website are designed to help you find the right service. They do not provide medical diagnosis. Only a qualified healthcare professional can diagnose and treat medical conditions.</p>
          <h2 className="text-lg font-bold text-navy-900">Emergency Situations</h2>
          <p>If you think you may have a medical emergency, contact your nearest emergency department or call 998 (UAE emergency number) immediately. Do not rely on this website for emergency medical advice.</p>
          <p className="text-xs text-navy-400">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <div className="container-app py-20 md:py-32 text-center">
        <p className="text-6xl font-bold text-primary-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-navy-900 mb-3">Page Not Found</h1>
        <p className="text-sm text-navy-500 mb-6">The page you are looking for might have been moved or no longer exists.</p>
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </>
  );
}
