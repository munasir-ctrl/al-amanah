import { useParams, Link } from 'react-router-dom';
import { Calendar, MessageCircle, Check, Phone, Globe, Clock, Award, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { getDoctorBySlug, doctors } from '@/data/doctors';
import { services } from '@/data/services';
import { DoctorCard } from '@/components/DoctorCard';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { siteConfig } from '@/data/siteConfig';
import { NotFoundPage } from './LegalPages';

export function DoctorProfilePage() {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug || '');

  if (!doctor) return <NotFoundPage />;

  const relatedServices = services.filter((s) => doctor.expertise.some((e) => s.title.toLowerCase().includes(e.toLowerCase().split(' ')[0])));
  const relatedDoctors = doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    worksFor: {
      '@type': 'MedicalClinic',
      name: siteConfig.legalName,
    },
  };

  return (
    <>
      <SEO
        title={`${doctor.name} — ${doctor.specialty} in Sharjah`}
        description={`${doctor.name} is a ${doctor.specialty} at Al Amanah Medical Center in Sharjah. ${doctor.overview.slice(0, 150)}`}
        canonical={`/doctors/${doctor.slug}`}
        structuredData={physicianSchema}
      />

      {/* Breadcrumb */}
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="container-app py-3">
          <nav className="flex items-center gap-2 text-xs text-navy-500">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <Link to="/doctors" className="hover:text-primary-700">Doctors</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium">{doctor.name}</span>
          </nav>
        </div>
      </div>

      {/* Profile Header */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-12 md:py-16">
        <div className="container-app">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-navy-100 to-primary-100 flex items-center justify-center shadow-soft">
                <div className="w-32 h-32 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-600">
                    {doctor.name.replace('Dr. ', '').charAt(0)}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-3 inline-block">
                {doctor.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">{doctor.name}</h1>
              <p className="text-lg text-primary-600 font-semibold mb-4">{doctor.specialty}</p>
              {doctor.qualification && (
                <p className="text-sm text-navy-500 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-600" /> {doctor.qualification}
                </p>
              )}
              <p className="text-base text-navy-600 leading-relaxed mb-6">{doctor.overview}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={`/book?doctor=${doctor.slug}`} className="btn btn-primary">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-outline">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section bg-white">
        <div className="container-app max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <ul className="space-y-2.5">
                {doctor.expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent-50 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent-600" />
                    </div>
                    <span className="text-sm text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Information</h2>
              <div className="space-y-3">
                {doctor.experience && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-50">
                    <Award className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-400">Experience</p>
                      <p className="text-sm font-medium text-navy-700">{doctor.experience}</p>
                    </div>
                  </div>
                )}
                {doctor.languages && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-50">
                    <Globe className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-400">Languages</p>
                      <p className="text-sm font-medium text-navy-700">{doctor.languages.join(', ')}</p>
                    </div>
                  </div>
                )}
                {doctor.schedule && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-50">
                    <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-400">Schedule</p>
                      <p className="text-sm font-medium text-navy-700">{doctor.schedule}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-navy-50">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Treatments & Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card group p-5 hover:shadow-premium transition-all">
                  <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                  <p className="text-sm text-navy-500">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="section bg-white">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Doctors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedDoctors.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-primary-700 text-white">
        <div className="container-app text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Book with {doctor.name}</h2>
          <p className="text-primary-100 mb-6">Schedule your appointment online or reach out via WhatsApp.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={`/book?doctor=${doctor.slug}`} className="btn bg-white text-primary-700 hover:bg-primary-50">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
