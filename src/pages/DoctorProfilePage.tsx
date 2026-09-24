import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Check, Phone, Globe, Clock, Award, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
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

      {/* Classic Editorial Breadcrumb */}
      <div className="bg-white border-b border-navy-100">
        <div className="container-app py-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-navy-500 uppercase tracking-widest">
            <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-navy-400" />
            <Link to="/doctors" className="hover:text-navy-900 transition-colors">Doctors</Link>
            <ChevronRight className="w-3 h-3 text-navy-400" />
            <span className="text-navy-900 font-bold">{doctor.name}</span>
          </nav>
        </div>
      </div>

      {/* Classic Profile Header Section */}
      <section className="bg-white py-20 md:py-28 border-b border-navy-100">
        <div className="container-app">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Portrait / Photo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-2xl bg-navy-50 border border-navy-200/80 shadow-xl relative overflow-hidden flex items-center justify-center group">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 to-navy-900 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none z-10" />
                
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-2xl bg-white shadow-lg border border-navy-200/60 flex flex-col items-center justify-center text-center p-6 relative z-10">
                    <span className="text-xs uppercase tracking-widest font-bold text-primary-600 mb-1">Consultant</span>
                    <span className="text-5xl font-extrabold text-navy-900 tracking-tight">
                      {doctor.name.replace('Dr. ', '').charAt(0)}
                    </span>
                    <div className="w-8 h-0.5 bg-primary-600 mt-2" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Profile Bio & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-200/80 text-navy-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" /> {doctor.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-3 tracking-tight">{doctor.name}</h1>
              <p className="text-lg md:text-xl text-primary-600 font-bold mb-6">{doctor.specialty}</p>
              
              {doctor.qualification && (
                <div className="flex items-center gap-3 text-sm text-navy-800 font-semibold mb-6 bg-navy-50/70 py-3 px-4 rounded-xl border border-navy-200/60 w-fit">
                  <Award className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>{doctor.qualification}</span>
                </div>
              )}

              <p className="text-base text-navy-600 leading-relaxed mb-8 font-normal">{doctor.overview}</p>

              <div className="flex flex-wrap gap-4">
                <Link to={`/book?doctor=${doctor.slug}`} className="btn bg-navy-900 text-white hover:bg-navy-800 shadow-md px-6 py-3.5 text-sm font-bold">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md px-6 py-3.5 text-sm font-bold">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                </a>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-6 py-3.5 text-sm font-bold">
                  <Phone className="w-4 h-4 text-primary-600" /> Call Clinic
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Structured Information & Expertise Section */}
      <section className="py-20 md:py-28 bg-navy-50/40">
        <div className="container-app max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Expertise Card */}
            <div className="bg-white p-8 rounded-2xl border border-navy-200/80 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                  <h2 className="text-xl font-bold text-navy-900 tracking-tight">Areas of Expertise</h2>
                </div>
                <div className="w-12 h-0.5 bg-primary-600 mb-6" />
                <ul className="space-y-4">
                  {doctor.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-navy-50 border border-navy-200 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-600 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-navy-800 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Information Card */}
            <div className="bg-white p-8 rounded-2xl border border-navy-200/80 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2 tracking-tight">Clinical Profile</h2>
                <div className="w-12 h-0.5 bg-primary-600 mb-6" />
                
                <div className="space-y-4">
                  {doctor.experience && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-50/50 border border-navy-200/60 shadow-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary-600 shrink-0 border border-navy-200/60 shadow-sm">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Professional Tenure</p>
                        <p className="text-sm font-bold text-navy-900">{doctor.experience}</p>
                      </div>
                    </div>
                  )}

                  {doctor.languages && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-50/50 border border-navy-200/60 shadow-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary-600 shrink-0 border border-navy-200/60 shadow-sm">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Languages Spoken</p>
                        <p className="text-sm font-bold text-navy-900">{doctor.languages.join(', ')}</p>
                      </div>
                    </div>
                  )}

                  {doctor.schedule && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-50/50 border border-navy-200/60 shadow-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary-600 shrink-0 border border-navy-200/60 shadow-sm">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Clinical Schedule</p>
                        <p className="text-sm font-bold text-navy-900">{doctor.schedule}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t border-navy-100">
          <div className="container-app">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">Specialized Treatments</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Associated Clinical Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group p-8 bg-navy-50/40 hover:bg-white hover:border-navy-300 transition-all rounded-xl border border-navy-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">{s.title}</h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{s.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Doctors Section */}
      {relatedDoctors.length > 0 && (
        <section className="py-20 md:py-28 bg-navy-50/40 border-t border-navy-100">
          <div className="container-app">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">Our Medical Board</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Other Distinguished Specialists</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedDoctors.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Classic CTA Section */}
      <section className="py-20 md:py-28 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="container-app text-center relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4 inline-block">Direct Consultation</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Book an Appointment with {doctor.name}</h2>
          <p className="text-navy-200 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">Schedule your appointment online or coordinate directly via our dedicated WhatsApp support desk.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={`/book?doctor=${doctor.slug}`} className="btn bg-white text-navy-900 hover:bg-navy-100 shadow-md font-bold px-6 py-3.5">
              <Calendar className="w-4 h-4 text-primary-600" /> Book Appointment
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md font-bold px-6 py-3.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}