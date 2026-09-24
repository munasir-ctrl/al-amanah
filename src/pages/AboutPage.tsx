import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Phone, MapPin, Award, Users, Stethoscope, Shield, Building2, Sparkles, CheckCircle2, HeartPulse } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

const milestones = [
  { year: '2003', title: 'Foundation & Heritage', description: 'Established in Sharjah, UAE, Al Amanah Medical Center began with a vision to deliver compassionate, world-class healthcare to the community.' },
  { year: 'Expansion', title: 'Trusted Regional Care', description: 'Grew into a comprehensive multi-specialty clinical destination serving families across Sharjah and the Northern Emirates.' },
  { year: 'Present', title: 'Advanced Clinical Excellence', description: 'Featuring specialized physicians, modern dental suites, advanced diagnostics, and holistic alternative care solutions.' },
];

const corePillars = [
  { icon: Users, title: 'Patient-First Philosophy', description: 'Placing individual comfort, transparent communication, and empathetic healing at the absolute center of our clinical practice.' },
  { icon: Award, title: 'Clinical Rigor & Standards', description: 'Adhering strictly to international healthcare protocols, infection control guidelines, and evidence-based medicine.' },
  { icon: Stethoscope, title: 'Multi-Specialty Synergy', description: 'Conveniently housing diverse medical departments, dental surgery, cardiology, internal medicine, and wellness under one roof.' },
  { icon: Shield, title: 'Two Decades of Trust', description: 'Building a lasting legacy of reliability, safety, and accessible medical leadership for families throughout Sharjah.' },
];

const clinicalSpecialtiesList = [
  'Consultant Cardiology & Heart Care',
  'Specialist Internal Medicine & Chronic Disease Management',
  'Advanced General & Cosmetic Dentistry',
  'Traditional Unani Medicine & Holistic Healing',
  'Gentle Homeopathy Practitioner Care',
  'Comprehensive General Practice & Family Consultations',
  'ENT (Ear, Nose, and Throat) Diagnostics',
  'Pediatrics & Child Wellness'
];

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — Trusted Multi-Specialty Healthcare in Sharjah Since 2003"
        description="Discover Al Amanah Medical Center in Sharjah, UAE. Established in 2003, we provide expert care in cardiology, internal medicine, dentistry, Unani, homeopathy, and general practice."
        canonical="/about"
      />

      {/* Classic Editorial Hero Section */}
      <section className="relative bg-white py-20 md:py-28 border-b border-navy-100">
        <div className="container-app">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200/80 text-navy-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" /> Established 2003 • Sharjah, UAE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight leading-tight">
              A Legacy of Clinical Excellence & <span className="text-primary-600">Compassionate Care</span>
            </h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-8" />
            <p className="text-base md:text-xl text-navy-600 leading-relaxed font-normal max-w-3xl mx-auto">
              For over two decades, Al Amanah Medical Center has stood as a pillar of health and wellness in Sharjah—uniting experienced practitioners, advanced medical technology, and patient-first dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Clinical Scope Section */}
      <section className="py-20 md:py-28 bg-navy-50/40">
        <div className="container-app max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">Our Heritage & Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 tracking-tight leading-snug">
                Dedicated to Elevating Community Health Standards in Sharjah
              </h2>
              <p className="text-base text-navy-600 leading-relaxed mb-4">
                Our core mission is to bridge the gap between premium medical standards and affordable accessibility. Every consultation, diagnostic procedure, and treatment plan is shaped by seasoned specialists who value your lifelong wellbeing.
              </p>
              <p className="text-base text-navy-600 leading-relaxed mb-8">
                From expert internal medicine and consultant cardiology to modern dental suites, specialized pediatrics, and traditional Unani and homeopathy practices, our multi-disciplinary facility provides holistic solutions under one roof.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {clinicalSpecialtiesList.map((spec, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-navy-800">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/book" className="btn bg-navy-900 text-white hover:bg-navy-800 shadow-md px-6 py-3.5 text-sm font-bold">
                  <Calendar className="w-4 h-4" /> Book an Appointment
                </Link>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md px-6 py-3.5 text-sm font-bold">
                  <MessageCircle className="w-4 h-4" /> Connect on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-2xl border border-navy-200/80 shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-600 to-navy-900" />
                <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 border border-primary-100">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Al Amanah Medical Center</h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-primary-600 mb-4">Sharjah, United Arab Emirates</p>
                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  Serving patients across the Northern Emirates with comprehensive health checkups, preventive screenings, specialized treatments, and emergency-ready primary care.
                </p>
                <div className="pt-6 border-t border-navy-100 flex items-center justify-between text-xs text-navy-500 font-medium">
                  <span>Established: 2003</span>
                  <span className="flex items-center gap-1 text-primary-700 font-bold">
                    <HeartPulse className="w-4 h-4" /> Multi-Specialty Care
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-white border-y border-navy-100">
        <div className="container-app max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">Our Evolution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Milestones of Medical Trust</h2>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {milestones.map((m, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-navy-50/50 p-8 rounded-xl border border-navy-200/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-primary-600 mb-3 tracking-tight">
                    {m.year}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{m.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 md:py-28 bg-navy-50/40">
        <div className="container-app">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">Core Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">Our Guiding Values</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {corePillars.map((v) => (
              <motion.div 
                key={v.title} 
                variants={fadeIn}
                className="bg-white p-8 rounded-xl border border-navy-200/80 shadow-sm hover:border-navy-300 transition-all text-center flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy-50 text-primary-600 mb-5 border border-navy-100 shadow-sm">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Classic Contact CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-navy-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="container-app text-center relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-4 inline-block">Visit Our Facility</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Experience Expert Care in Sharjah</h2>
          <p className="text-navy-200 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">{siteConfig.address.full}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn bg-white text-navy-900 hover:bg-navy-100 shadow-md font-bold px-6 py-3.5">
              <Phone className="w-4 h-4 text-primary-600" /> {siteConfig.phone}
            </a>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-md font-bold px-6 py-3.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn border border-navy-700 text-white hover:bg-navy-800 shadow-md font-bold px-6 py-3.5">
              <MapPin className="w-4 h-4 text-primary-400" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}