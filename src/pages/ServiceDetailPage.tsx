import { useParams, Link } from 'react-router-dom';
import { Calendar, MessageCircle, Check, Clock, ArrowRight, Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { DoctorCard } from '@/components/DoctorCard';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { NotFoundPage } from './LegalPages';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFoundPage />;

  const relatedDoctors = doctors.filter((d) => service.relatedDoctors?.includes(d.slug));
  const relatedServices = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.shortDescription,
    procedureType: service.category,
  };

  return (
    <>
      <SEO
        title={`${service.title} in Sharjah`}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
        structuredData={serviceSchema}
      />

      {/* Breadcrumb - Hidden or wrapped cleanly on mobile */}
      <div className="bg-navy-50 border-b border-navy-100 overflow-x-auto">
        <div className="container-app py-2.5 sm:py-3 whitespace-nowrap">
          <nav className="flex items-center gap-2 text-xs text-navy-500">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary-700">Services</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium truncate">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-8 sm:py-12 md:py-16">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Column (Appears first or second depending on layout preference, stacked on mobile) */}
            <div className="order-2 lg:order-1">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold mb-3 sm:mb-4 inline-block ${service.category === 'Dental' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'}`}>
                {service.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-navy-500 leading-relaxed mb-6">
                {service.longDescription}
              </p>

              {/* Action Buttons: Full width on mobile for easy tapping */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                <Link to={`/book?service=${service.slug}`} className="btn btn-primary justify-center w-full sm:w-auto">
                  <Calendar className="w-4 h-4 shrink-0" /> Book Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp justify-center w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
                </a>
              </div>

              {/* Price & Duration Details Meta */}
              <div className="flex items-center gap-6 pt-4 border-t border-navy-100/60">
                {service.price && (
                  <div>
                    <p className="text-xs text-navy-400">Starting Price</p>
                    <p className="text-base sm:text-lg font-bold text-primary-700">{service.price}</p>
                  </div>
                )}
                {service.duration && (
                  <div>
                    <p className="text-xs text-navy-400">Duration</p>
                    <p className="text-base sm:text-lg font-bold text-navy-700 flex items-center gap-1">
                      <Clock className="w-4 h-4 shrink-0" /> {service.duration}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Image Column */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br from-primary-100 to-accent-100 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits / What's Included Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="container-app max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-navy-50">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-50 shrink-0">
                  <Check className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-xs sm:text-sm text-navy-700 font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-10 sm:py-14 md:py-16 bg-navy-50">
          <div className="container-app max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="card p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="py-10 sm:py-14 md:py-16 bg-white">
          <div className="container-app">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">Related Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {relatedDoctors.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-10 sm:py-14 md:py-16 bg-navy-50">
          <div className="container-app">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {relatedServices.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card group p-4 sm:p-5 hover:shadow-premium transition-all">
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-1 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-500 mb-3 line-clamp-2">{s.shortDescription}</p>
                  <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary-700 text-white text-center">
        <div className="container-app max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-sm sm:text-base text-primary-100 mb-6">Schedule your {service.title.toLowerCase()} appointment today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to={`/book?service=${service.slug}`} className="btn bg-white text-primary-700 hover:bg-primary-50 justify-center">
              <Calendar className="w-4 h-4 shrink-0" /> Book Appointment
            </Link>
            <a href={`tel:+97165615545`} className="btn border border-white/30 text-white hover:bg-white/10 justify-center">
              <Phone className="w-4 h-4 shrink-0" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}