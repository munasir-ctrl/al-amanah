import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Ear, HeartPulse, Baby, ClipboardCheck, Smile,
  Search, ArrowRight, Check, Calendar, MessageCircle, Phone,
  MapPin, Shield, Award, Users, Building2, Star,
  Activity, Droplet, Sparkles, Brush, AlertCircle,
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
  { icon: Users, title: 'Experienced Medical Team', description: 'Specialists with years of experience in internal medicine, ENT, dentistry, Unani, homeopathy, and more.' },
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
        description="Al Amanah Medical Center in Sharjah — trusted healthcare since 2003. Internal medicine, cardiology, general practice, Unani, homeopathy, dental care. Book an appointment online today."
        structuredData={faqSchema}
      />

      {/* ULTRA-LUXURY HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-32 border-b border-navy-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary-50/60 via-navy-50/30 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-navy-100/40 via-primary-50/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        </div>

        <div className="container-app relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-50 border border-navy-200/80 shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-primary-600" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">Sharjah, United Arab Emirates</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.08] mb-6 tracking-tight">
                Healthcare You Can Trust.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-navy-800 mt-1">
                  Care You Can Feel.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-navy-600 leading-relaxed mb-8 max-w-2xl font-normal">
                Expert modern medical, dental, Unani, and homeopathic care in Sharjah, delivered by experienced practitioners utilizing a patient-first, clinical excellence approach since 2003.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/book" className="btn bg-navy-900 text-white hover:bg-navy-800 shadow-md px-8 py-4 text-sm font-bold tracking-wide">
                  <Calendar className="w-4 h-4 text-primary-400" /> Book an Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md px-8 py-4 text-sm font-bold tracking-wide">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Desk
                </a>
                <Link to="/doctors" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-6 py-4 text-sm font-bold tracking-wide">
                  Find a Doctor <ArrowRight className="w-4 h-4 text-primary-600" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-100">
                {trustIndicators.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary-50 border border-primary-100 shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-primary-600 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-navy-800 tracking-tight leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-200/80 bg-navy-50 aspect-[4/5] group">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 to-navy-900 z-10" />
                <img
                  src={heroImage}
                  alt="Doctor consulting a patient at Al Amanah Medical Center in Sharjah"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 bg-white rounded-2xl shadow-xl p-4 border border-navy-200/80 z-20 backdrop-blur-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 text-primary-600 shadow-sm">
                  <Star className="w-6 h-6 fill-primary-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-400">Excellence</p>
                  <p className="text-sm font-extrabold text-navy-900">Trusted Since 2003</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3.5 bg-white rounded-2xl shadow-xl p-4 border border-navy-200/80 z-20 backdrop-blur-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 border border-navy-200 text-navy-900 shadow-sm">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-400">Specialized</p>
                  <p className="text-sm font-extrabold text-navy-900">Expert Medical Board</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ULTRA-LUXURY STATS BAR */}
      <section ref={statsRef} className="bg-navy-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="container-app relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={20} suffix="+" label="Years of Service" visible={statsVisible} />
            <StatCounter value={9} label="Expert Doctors" visible={statsVisible} />
            <StatCounter value={12} label="Services Offered" visible={statsVisible} />
            <StatCounter value={14} suffix="+" label="Insurance Partners" visible={statsVisible} />
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Services"
            title="How Can We Help You Today?"
            subtitle="Choose a department below to explore the elite clinical care we offer and find the right specialist for your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCards.map((card, i) => {
              const Icon = iconMap[card.icon] || Stethoscope;
              return (
                <Link
                  key={card.id}
                  to={card.link}
                  className="p-8 bg-navy-50/40 hover:bg-white hover:border-navy-300 transition-all duration-300 rounded-2xl border border-navy-200/80 shadow-sm flex flex-col justify-between group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-navy-200/80 text-primary-600 mb-6 group-hover:scale-105 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed mb-6 font-normal">{card.description}</p>
                  </div>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:translate-x-1 transition-transform">
                    Explore Care <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PATIENT PROBLEM SOLVER */}
      <section className="py-20 md:py-28 bg-navy-50/40 border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Quick Navigation"
            title="Tell Us What You Need"
            subtitle="Search for your symptom or condition below to route directly to the appropriate service. This is a navigation tool — not a medical diagnosis."
          />
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search symptoms or conditions: tooth pain, diabetes, joint pain..."
                className="w-full pl-14 pr-6 py-4.5 rounded-2xl border border-navy-200/80 bg-white text-navy-900 placeholder:text-navy-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm font-medium text-sm"
                aria-label="Search symptoms or conditions"
              />
            </div>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {filteredSymptoms.map((symptom) => (
                <Link
                  key={symptom.label}
                  to={`/services/${symptom.serviceSlug}`}
                  className="px-4 py-2.5 rounded-xl bg-white border border-navy-200/80 text-xs font-bold text-navy-800 hover:border-primary-600 hover:bg-primary-50/50 hover:text-primary-700 transition-all shadow-sm"
                >
                  {symptom.label}
                </Link>
              ))}
              {filteredSymptoms.length === 0 && (
                <p className="text-sm text-navy-500 font-medium">No matches found. Try another search term or browse our core services.</p>
              )}
            </div>
            <div className="flex items-start gap-2.5 mt-8 justify-center bg-white p-4 rounded-xl border border-navy-200/60 shadow-sm max-w-lg mx-auto">
              <AlertCircle className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
              <p className="text-xs text-navy-600 leading-relaxed font-normal text-center">
                Information provided is for general orientation purposes and does not replace professional clinical evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-20 md:py-28 bg-white border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Featured Services"
            title="Comprehensive Care, Under One Roof"
            subtitle="From routine clinical evaluations to advanced specialist treatments, modern medicine, Unani, and homeopathy ensure holistic well-being."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 9).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-8 py-4 font-bold text-sm">
              View All Services <ArrowRight className="w-4 h-4 text-primary-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DOCTORS */}
      <section className="py-20 md:py-28 bg-navy-50/40 border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors & Practitioners"
            subtitle="Experienced medical, dental, and holistic professionals dedicated to uncompromising patient care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 8).map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/doctors" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-8 py-4 font-bold text-sm">
              View All Doctors <ArrowRight className="w-4 h-4 text-primary-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-20 md:py-28 bg-white border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Care Packages"
            title="Special Offers & Care Packages"
            subtitle="Transparent pricing for our most requested preventative and clinical packages."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.slice(0, 6).map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/offers" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-8 py-4 font-bold text-sm">
              View All Offers <ArrowRight className="w-4 h-4 text-primary-600" />
            </Link>
          </div>
          <OfferDisclaimer />
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-20 md:py-28 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container-app relative z-10">
          <SectionHeading
            eyebrow="Insurance Network"
            title="Your Insurance. Your Care. Made Simple."
            subtitle="We coordinate with an extensive network of insurance providers to ensure accessible healthcare financing."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {insuranceProviders.map((provider) => (
              <div key={provider} className="flex items-center justify-center px-4 py-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-colors shadow-sm">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{provider}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy-200 text-center max-w-2xl mx-auto mb-10 italic font-light">
            {insuranceDisclaimer}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/insurance" className="btn bg-white text-navy-900 hover:bg-navy-100 shadow-md font-bold px-8 py-3.5">
              <Shield className="w-4 h-4 text-primary-600" /> Check My Insurance
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.insurance)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md font-bold px-8 py-3.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp Insurance Desk
            </a>
          </div>
        </div>
      </section>

      {/* WHY AL AMANAH */}
      <section className="py-20 md:py-28 bg-white border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Al Amanah Medical Center"
            subtitle="Over two decades of trusted clinical excellence in Sharjah, grounded in expertise and patient-first values."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAlAmanah.map((item, i) => (
              <div
                key={item.title}
                className="p-8 bg-navy-50/40 rounded-2xl border border-navy-200/80 shadow-sm hover:border-navy-300 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-navy-200/80 text-primary-600 mb-6 shadow-sm">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="py-20 md:py-28 bg-navy-50/40 border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Facilities"
            title="A Glimpse Inside Our Center"
            subtitle="State-of-the-art facilities engineered for safety, cleanliness, and utmost patient comfort."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {facilityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-navy-200/80 bg-white text-left focus:outline-none"
                style={{ transitionDelay: `${i * 50}ms` }}
                aria-label={`View ${img.label}`}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-bold text-white tracking-wide">{img.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors" aria-label="Close gallery">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={facilityImages[lightboxIndex].url} alt={facilityImages[lightboxIndex].alt} className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10" />
        </div>
      )}

      {/* PATIENT REVIEWS */}
      <section className="py-20 md:py-28 bg-white border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Trusted by Patients Across Sharjah"
            subtitle="Reflecting our ongoing dedication to clinical standard and personalized patient experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { text: 'The doctor was very thorough and took the time to explain everything clearly. Highly recommended for anyone looking for a premier physician in Sharjah.', author: 'Verified Patient', source: 'Google' },
              { text: 'Excellent dental service. The staff were professional and the clinic was exceptionally clean. My root canal treatment was completely painless.', author: 'Verified Patient', source: 'Google' },
              { text: 'I visited the clinic for specialized care. Very experienced practitioners and the treatment was highly effective. Thank you Al Amanah.', author: 'Verified Patient', source: 'Google' },
            ].map((review, i) => (
              <div key={i} className="p-8 bg-navy-50/40 rounded-2xl border border-navy-200/80 shadow-sm flex flex-col justify-between" style={{ transitionDelay: `${i * 80}ms` }}>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-navy-700 leading-relaxed mb-6 font-normal">"{review.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-navy-200/60">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">{review.author}</span>
                  <span className="text-xs font-bold text-navy-500 flex items-center gap-1.5 uppercase tracking-wider">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-8 py-4 font-bold text-sm">
              Read More Reviews <ArrowRight className="w-4 h-4 text-primary-600" />
            </a>
          </div>
        </div>
      </section>

      {/* URGENT CARE CTA */}
      <section className="py-20 md:py-28 bg-navy-50/40 border-t border-navy-100">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white border border-navy-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-primary-400">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Need Medical Attention?</h3>
                </div>
                <p className="text-sm text-navy-200 mb-8 leading-relaxed font-normal">Contact our desk immediately to check the earliest available consultation slot with our physicians.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-navy-900 hover:bg-navy-100 shadow-md font-bold px-6 py-3.5 text-sm">
                  <Phone className="w-4 h-4 text-primary-600" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.medical)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md font-bold px-6 py-3.5 text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-950 text-white border border-primary-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-white">
                    <Smile className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Having Dental Pain?</h3>
                </div>
                <p className="text-sm text-primary-100 mb-8 leading-relaxed font-normal">Coordinate directly with our specialized dental department for priority emergency care scheduling.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-navy-900 hover:bg-navy-100 shadow-md font-bold px-6 py-3.5 text-sm">
                  <Phone className="w-4 h-4 text-primary-600" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.dental, siteConfig.whatsapp.dental)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md font-bold px-6 py-3.5 text-sm">
                  <MessageCircle className="w-4 h-4" /> Dental Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH GUIDE */}
      <section className="py-20 md:py-28 bg-white border-t border-navy-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="Health Guide"
            title="Health Tips & Medical Insights"
            subtitle="Expert articles written by our practitioners to help you make informed health decisions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to={`/health-guide/${article.slug}`}
                className="group bg-navy-50/40 rounded-2xl overflow-hidden border border-navy-200/80 shadow-sm hover:border-navy-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-navy-100 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-navy-900 uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors mb-3 tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed line-clamp-2 font-normal">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-primary-600 uppercase tracking-widest">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/health-guide" className="btn bg-white text-navy-900 border border-navy-300 hover:bg-navy-50 shadow-sm px-8 py-4 font-bold text-sm">
              View All Health Guides <ArrowRight className="w-4 h-4 text-primary-600" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}