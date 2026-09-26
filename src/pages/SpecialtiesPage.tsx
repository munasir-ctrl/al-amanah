import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ArrowRight, Stethoscope, HeartPulse, Sparkles, Activity, Smile } from 'lucide-react';

const specialties = [
  {
    slug: 'dental-care',
    title: 'Dental Care',
    description: 'Tooth pain, cleaning, fillings, root canal, restorative and cosmetic dentistry.',
    icon: <Smile className="w-5 h-5 text-primary-600" />,
  },
  {
    slug: 'internal-medicine',
    title: 'Internal Medicine',
    description: 'Diabetes, hypertension, chronic and general medical conditions.',
    icon: <Stethoscope className="w-5 h-5 text-primary-600" />,
  },
  {
    slug: 'cardiology',
    title: 'Cardiology',
    description: 'Heart health and advanced cardiovascular consultations.',
    icon: <HeartPulse className="w-5 h-5 text-primary-600" />,
  },
  {
    slug: 'general-practice',
    title: 'General Practice',
    description: 'Frontline primary care and routine health evaluations.',
    icon: <Stethoscope className="w-5 h-5 text-primary-600" />,
  },
  {
    slug: 'unani-medicine',
    title: 'Unani Medicine',
    description: 'Traditional Unani medical treatments and natural regimen therapies.',
    icon: <Activity className="w-5 h-5 text-primary-600" />,
  },
  {
    slug: 'homoeopathy',
    title: 'Homoeopathy',
    description: 'Holistic, individualized homeopathic healing solutions.',
    icon: <Sparkles className="w-5 h-5 text-primary-600" />,
  },
];

export function SpecialtiesPage() {
  return (
    <>
      <SEO
        title="Medical Specialties — Al Amanah Medical Center Sharjah"
        description="Explore our elite medical specialties: Dental Care, Internal Medicine, Cardiology, General Practice, Unani Medicine, and Homoeopathy in Sharjah."
        canonical="/specialties"
      />
      
      {/* Luxury Hero Section */}
      <div className="bg-gradient-to-b from-navy-50/80 via-white to-white py-12 sm:py-16 md:py-20 border-b border-navy-100/50">
        <div className="container-app text-center px-4 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-3 inline-block bg-accent-50 px-3.5 py-1.5 rounded-full">
            Centers of Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
            Our Medical Specialties
          </h1>
          <p className="text-base sm:text-lg text-navy-500 leading-relaxed font-normal">
            Dedicated departments driven by clinical excellence, compassionate expertise, and personalized patient care in Sharjah.
          </p>
        </div>
      </div>

      {/* Specialties Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialties.map((sp, i) => (
              <Link
                key={sp.slug}
                to={`/services/${sp.slug}`} // Points directly to your verified working service pages
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-navy-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] hover:border-primary-200 transition-all duration-300 flex flex-col justify-between"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-navy-50/80 border border-navy-100/60 flex items-center justify-center mb-5 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                    {sp.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 group-hover:text-primary-700 transition-colors mb-2.5 tracking-tight">
                    {sp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {sp.description}
                  </p>
                </div>

                {/* Explore Link Action */}
                <div className="pt-4 border-t border-navy-100/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-navy-700 group-hover:text-primary-700 transition-colors">
                  <span className="uppercase tracking-wider text-[11px] font-bold">Explore Care</span>
                  <div className="w-7 h-7 rounded-full bg-navy-50 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}