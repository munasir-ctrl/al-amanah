import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { OfferCard, OfferDisclaimer } from '@/components/OfferCard';
import { offers } from '@/data/offers';
import { Calendar, MessageCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function OffersPage() {
  return (
    <>
      <SEO
        title="Special Offers & Care Packages in Sharjah"
        description="Transparent pricing for medical and dental treatments at Al Amanah Medical Center in Sharjah. Root canal, consultations, health checkups, and more."
        canonical="/offers"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Care Packages</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Special Offers & Care Packages</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            Transparent pricing for our most requested treatments. Book online or via WhatsApp.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
          <OfferDisclaimer />
        </div>
      </section>

      <section className="section bg-navy-50">
        <div className="container-app text-center max-w-2xl">
          <div className="flex items-start gap-2 justify-center mb-6">
            <AlertCircle className="w-5 h-5 text-navy-400 mt-0.5 shrink-0" />
            <p className="text-sm text-navy-500 text-left">
              Prices may vary depending on clinical assessment. Please confirm the final price with our team before booking. Insurance coverage may apply depending on your plan.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn btn-primary">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.offers)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> Ask About Offers
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
