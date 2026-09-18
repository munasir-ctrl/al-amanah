import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Ear, HeartPulse, Baby, ClipboardCheck, Smile,
  Search, ArrowRight, Check, Calendar, MessageCircle, Phone,
  MapPin, Shield, Award, Users, Clock, Building2, Star,
  Activity, Droplet, Sparkles, Brush, AlertCircle, Navigation,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { DoctorCard } from '@/components/DoctorCard';
import { OfferCard, OfferDisclaimer } from '@/components/OfferCard';
import { StatCounter } from '@/components/StatCounter';
import { helpCards, symptomSearch } from '@/data/helpCards';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { offers } from '@/data/offers';
import { insuranceProviders, insuranceDisclaimer } from '@/data/insurance';
import { articles } from '@/data/healthGuide';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

const iconMap: Record<string, typeof Stethoscope> = {
  Stethoscope, Ear, HeartPulse, Baby, ClipboardCheck, Smile,
  Activity, Droplet, Sparkles, Brush,
};

const heroImage = 'https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&w=1600';
const dentalImage = 'https://images.pexels.com/photos/8224633/pexels-photo-8224633.jpeg?auto=compress&cs=tinysrgb&w=800';
const clinicImage = 'https://images.pexels.com/photos/7108324/pexels-photo-7108324.jpeg?auto=compress&cs=tinysrgb&w=800';
const receptionImage = 'https://images.pexels.com/photos/7108325/pexels-photo-7108325.jpeg?auto=compress&cs=tinysrgb&w=800';
const examRoomImage = 'https://images.pexels.com/photos/8460234/pexels-photo-8460234.jpeg?auto=compress&cs=tinysrgb&w=800';
const ultrasoundImage = 'https://images.pexels.com/photos/7108402/pexels-photo-7108402.jpeg?auto=compress&cs=tinysrgb&w=800';
const doctorSmiling = 'https://images.pexels.com/photos/18828743/pexels-photo-18828743.jpeg?auto=compress&cs=tinysrgb&w=800';

const facilityImages = [
  { url: receptionImage, alt: 'Reception area at Al Amanah Medical Center', label: 'Reception' },
  { url: clinicImage, alt: 'Modern clinic interior', label: 'Clinic Interior' },
  { url: examRoomImage, alt: 'Medical examination room', label: 'Examination Room' },
  { url: dentalImage, alt: 'Dental clinic', label: 'Dental Clinic' },
  { url: ultrasoundImage, alt: 'Medical equipment', label: 'Medical Equipment' },
  { url: doctorSmiling, alt: 'Our medical team', label: 'Our Team' },
];

const trustIndicators = [
  { icon: Award, label: 'Established in 2003' },
  { icon: Users, label: 'Experienced Doctors' },
  { icon: Stethoscope, label: 'Medical & Dental Care' },
  { icon: Shield, label: 'Insurance Accepted' },
];

const whyAlAmanah = [
  { icon: Building2, title: 'Established in 2003', description: 'Over 20 years of trusted healthcare service to the Sharjah community.' },
  { icon: Users, title: 'Experienced Medical Team', description: 'Specialists with years of experience in internal medicine, ENT, dentistry, and more.' },
  { icon: Stethoscope, title: 'Medical + Dental Services', description: 'Comprehensive care under one roof — from routine checkups to specialist treatment.' },
  { icon: MapPin, title: 'Central Sharjah Location', description: 'Conveniently located in Al Mubarak Center, accessible from across the Northern Emirates.' },
  { icon: Shield, title: 'Multiple Insurance Networks', description: 'We work with a wide range of insurance providers for accessible healthcare.' },
  { icon: Calendar, title: 'Online Appointment Requests', description: 'Book your appointment online in minutes — no waiting on the phone.' },
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSymptoms = searchQuery
    ? symptomSearch.filter((s) =>
        s.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : symptomSearch;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book an appointment at Al Amanah Medical Center?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book an appointment online through our website, via WhatsApp, or by calling us at 06 561 55 45.',
        },
      },
      {
        '@type': 'Question',
        name: 'What insurance providers do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with a wide range of insurance providers including Nextcare, ADNIC, AXA, Daman, NAS, MSH, and many more. Please confirm your coverage with our team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Al Amanah Medical Center located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located at Suite #308, Al Mubarak Center, Sharjah, UAE.',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Best Physician & Medical Center in Sharjah"
        description="Al Amanah Medical Center in Sharjah — trusted healthcare since 2003. Internal medicine, ENT, cardiology, pediatrics, dental care. Book an appointment online today."
        structuredData={faqSchema}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-primary-50 animate-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 animate-float" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container-app relative py-12 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-navy-100 shadow-soft mb-5">
                <MapPin className="w-3.5 h-3.5 text-accent-600" />
                <span className="text-xs font-semibold text-navy-700">Sharjah, UAE</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.1] mb-5">
                Healthcare You Can Trust.
                <br />
                <span className="text-gradient">Care You Can Feel.</span>
              </h1>
              <p className="text-base md:text-lg text-navy-500 leading-relaxed mb-8 max-w-xl">
                Expert medical and dental care in Sharjah, delivered by experienced doctors with a patient-first approach.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/book" className="btn btn-primary text-base px-7 py-3.5">
                  <Calendar className="w-5 h-5" /> Book an Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-base px-7 py-3.5">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
                <Link to="/doctors" className="btn btn-ghost text-base px-5 py-3.5">
                  Find a Doctor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustIndicators.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 shrink-0">
                      <Check className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-xs font-medium text-navy-600 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img
                  src={heroImage}
                  alt="Doctor consulting a patient at Al Amanah Medical Center in Sharjah"
                  className="w-full h-[320px] md:h-[440px] lg:h-[520px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-premium p-4 border border-navy-100 animate-float">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-50">
                  <Star className="w-6 h-6 text-accent-500 fill-accent-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">Trusted Since 2003</p>
                  <p className="text-xs text-navy-500">20+ years of care</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-premium p-4 border border-navy-100 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">Expert Specialists</p>
                  <p className="text-xs text-navy-500">Medical & Dental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED STATS BAR */}
      <section ref={statsRef} className="bg-gradient-to-r from-primary-700 via-primary-800 to-navy-900 py-10 md:py-14">
        <div className="container-app">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCounter value={20} suffix="+" label="Years of Service" visible={statsVisible} />
            <StatCounter value={9} label="Expert Doctors" visible={statsVisible} />
            <StatCounter value={12} label="Services Offered" visible={statsVisible} />
            <StatCounter value={14} suffix="+" label="Insurance Partners" visible={statsVisible} />
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Services"
            title="How Can We Help You Today?"
            subtitle="Choose a department below to explore the care we offer and find the right doctor for your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpCards.map((card, i) => {
              const Icon = iconMap[card.icon] || Stethoscope;
              return (
                <Link
                  key={card.id}
                  to={card.link}
                  className="card group hover:shadow-premium hover:border-primary-200 transition-all duration-300 p-6 reveal flex flex-col"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">{card.description}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                    Explore Care <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PATIENT PROBLEM SOLVER */}
      <section className="section bg-navy-50">
        <div className="container-app">
          <SectionHeading
            eyebrow="Quick Navigation"
            title="Tell Us What You Need"
            subtitle="Search for your symptom or condition below to find the right service. This is a navigation tool — not a medical diagnosis."
          />
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search: tooth pain, diabetes, ear pain..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                aria-label="Search symptoms or conditions"
              />
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {filteredSymptoms.map((symptom) => (
                <Link
                  key={symptom.label}
                  to={`/services/${symptom.serviceSlug}`}
                  className="px-4 py-2.5 rounded-xl bg-white border border-navy-200 text-sm font-medium text-navy-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all"
                >
                  {symptom.label}
                </Link>
              ))}
              {filteredSymptoms.length === 0 && (
                <p className="text-sm text-navy-500">No matches found. Try another term or browse our services.</p>
              )}
            </div>
            <div className="flex items-start gap-2 mt-6 justify-center">
              <AlertCircle className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" />
              <p className="text-xs text-navy-400 max-w-lg text-center">
                Information provided is for general guidance and does not replace professional medical assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Featured Services"
            title="Comprehensive Care, Under One Roof"
            subtitle="From routine checkups to specialist treatment, our medical and dental services are designed to keep you and your family healthy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 9).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-outline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DOCTORS */}
      <section className="section bg-navy-50">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors"
            subtitle="Experienced professionals committed to providing personalized care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {doctors.slice(0, 8).map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/doctors" className="btn btn-outline">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Care Packages"
            title="Special Offers & Care Packages"
            subtitle="Transparent pricing for our most requested treatments. Book online or via WhatsApp."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.slice(0, 6).map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/offers" className="btn btn-outline">
              View All Offers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <OfferDisclaimer />
        </div>
      </section>

      {/* INSURANCE */}
      <section className="section bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Insurance"
            title="Your Insurance. Your Care. Made Simple."
            subtitle="We work with a wide range of insurance providers to make your healthcare accessible and affordable."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
            {insuranceProviders.map((provider) => (
              <div key={provider} className="flex items-center justify-center px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-semibold text-white">{provider}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary-200 text-center max-w-2xl mx-auto mb-8 italic">
            {insuranceDisclaimer}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/insurance" className="btn bg-white text-primary-700 hover:bg-primary-50">
              <Shield className="w-4 h-4" /> Check My Insurance
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.insurance)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp About Insurance
            </a>
          </div>
        </div>
      </section>

      {/* WHY AL AMANAH */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Al Amanah Medical Center"
            subtitle="Two decades of trusted healthcare in Sharjah, built on experience, comprehensive services, and patient-first care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyAlAmanah.map((item, i) => (
              <div
                key={item.title}
                className="card p-6 reveal hover:shadow-card transition-shadow"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="section bg-navy-50">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Facilities"
            title="A Glimpse Inside Our Center"
            subtitle="Modern, comfortable facilities designed to make your visit as pleasant as possible."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
                aria-label={`View ${img.label}`}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">{img.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/80 backdrop-blur-sm p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-5 right-5 text-white/80 hover:text-white" aria-label="Close gallery">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={facilityImages[lightboxIndex].url} alt={facilityImages[lightboxIndex].alt} className="max-w-full max-h-[85vh] rounded-2xl object-contain" />
        </div>
      )}

      {/* PATIENT REVIEWS */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Trusted by Patients Across Sharjah"
            subtitle="We are proud of the trust our patients place in us. Here is what they share about their experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { text: 'The doctor was very thorough and took the time to explain everything clearly. Highly recommended for anyone looking for a good physician in Sharjah.', author: 'Verified Patient', source: 'Google' },
              { text: 'Excellent dental service. The staff were professional and the clinic was very clean. My root canal treatment was completely painless.', author: 'Verified Patient', source: 'Google' },
              { text: 'I visited the ENT specialist for a chronic sinus problem. Very experienced doctor and the treatment was effective. Thank you Al Amanah.', author: 'Verified Patient', source: 'Google' },
            ].map((review, i) => (
              <div key={i} className="card p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-navy-600 leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-navy-50">
                  <span className="text-sm font-semibold text-navy-700">{review.author}</span>
                  <span className="text-xs text-navy-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Read More Reviews <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* URGENT CARE CTA */}
      <section className="section bg-navy-50">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card p-6 md:p-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white border-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Need Medical Attention?</h3>
              </div>
              <p className="text-sm text-primary-100 mb-5">Contact our team to check the earliest available consultation.</p>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-primary-700 hover:bg-primary-50">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.medical)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="card p-6 md:p-8 bg-gradient-to-br from-accent-500 to-accent-700 text-white border-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Having Dental Pain?</h3>
              </div>
              <p className="text-sm text-accent-50 mb-5">Contact our dental team for the earliest available appointment.</p>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-accent-700 hover:bg-accent-50">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.dental, siteConfig.whatsapp.dental)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> Contact Dental Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH GUIDE */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Health Guide"
            title="Health Tips & Medical Insights"
            subtitle="Expert-written articles to help you understand your health and make informed decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to={`/health-guide/${article.slug}`}
                className="card group hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent-600 mb-2">{article.category}</span>
                  <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-3 flex-1 line-clamp-2">{article.excerpt}</p>
                  <span className="text-xs text-navy-400">{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/health-guide" className="btn btn-outline">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find Us in Sharjah"
            subtitle="We are conveniently located in Al Mubarak Center, Sharjah."
          />
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="card p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 shrink-0">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">{siteConfig.legalName}</h3>
                  <p className="text-sm text-navy-500">{siteConfig.address.full}</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-600 shrink-0" />
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-medium text-navy-700 hover:text-primary-700">{siteConfig.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                  <div className="text-sm text-navy-600">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day}>{h.day}: {h.time}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.directions)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft min-h-[300px] border border-navy-100">
              <iframe
                src={siteConfig.mapsEmbed}
                title="Al Amanah Medical Center location map"
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-gradient-to-br from-primary-700 via-primary-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="container-app relative text-center">
          <div className="reveal max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Take the Next Step for Your Health?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Book an appointment online in minutes, or reach out via WhatsApp. Our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/book" className="btn bg-white text-primary-700 hover:bg-primary-50 text-base px-7 py-3.5">
                <Calendar className="w-5 h-5" /> Book an Appointment
              </Link>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-base px-7 py-3.5">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn border border-white/30 text-white hover:bg-white/10 text-base px-7 py-3.5">
                <Phone className="w-5 h-5" /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
