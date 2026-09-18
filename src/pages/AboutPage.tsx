import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, MapPin, Award, Users, Stethoscope, Shield, Building2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

const milestones = [
  { year: '2003', title: 'Established', description: 'Al Amanah Medical Center was founded in Sharjah, UAE, with a mission to provide quality healthcare to the community.' },
  { year: 'Growing', title: 'Trusted by the Community', description: 'Over the years, we have become a trusted healthcare provider for the people of the Northern Emirates.' },
  { year: 'Today', title: 'Comprehensive Care', description: 'We offer medical and dental services across multiple specialties, with experienced doctors and modern facilities.' },
];

const values = [
  { icon: Users, title: 'Patient-First', description: 'We put our patients at the center of everything we do.' },
  { icon: Award, title: 'Excellence', description: 'Our doctors are committed to the highest standards of medical care.' },
  { icon: Stethoscope, title: 'Comprehensive', description: 'Medical and dental services under one roof for your convenience.' },
  { icon: Shield, title: 'Trust', description: 'Two decades of trusted healthcare in Sharjah.' },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — Trusted Healthcare in Sharjah Since 2003"
        description="Learn about Al Amanah Medical Center, established in 2003 in Sharjah, UAE. Our mission, our team, and our commitment to patient-first healthcare."
        canonical="/about"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">About Us</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted Healthcare in Sharjah Since 2003</h1>
          <p className="text-base md:text-lg text-navy-500 leading-relaxed">
            Al Amanah Medical Center has emerged over the years as a favorite and trusted healthcare provider for the people of the Northern Emirates, owing to its high quality treatment facilities and the skill, dedication, and care rendered by its highly qualified team of doctors.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container-app max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">
                Our mission is to provide quality medical and dental treatment at the most affordable cost, delivered by experienced doctors who genuinely care about their patients' wellbeing.
              </p>
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                We have a specialist lady physician, a well-experienced ENT specialist, and a well-equipped cosmetic dental clinic with a dental general practitioner and experienced orthodontist — all working together to serve our community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <Building2 className="w-20 h-20 text-primary-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-navy-50">
        <div className="container-app">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{m.year}</div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{m.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-app">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600 mx-auto mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-primary-700 text-white">
        <div className="container-app text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visit Us in Sharjah</h2>
          <p className="text-primary-100 mb-6">{siteConfig.address.full}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-primary-700 hover:bg-primary-50">
              <Phone className="w-4 h-4" /> {siteConfig.phone}
            </a>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn border border-white/30 text-white hover:bg-white/10">
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
