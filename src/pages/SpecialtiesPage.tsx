import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { specialtyPages } from '@/data/specialties';
import { ArrowRight } from 'lucide-react';

export function SpecialtiesPage() {
  return (
    <>
      <SEO
        title="Specialties — Specialist Care in Sharjah"
        description="Explore our medical specialties at Al Amanah Medical Center in Sharjah — cardiology, internal medicine, general practice, dental, Unani, and homoeopathy."
        canonical="/specialties"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Specialties</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Our Specialties in Sharjah</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            Find the right specialist for your health concern. Each specialty page provides detailed information about the care we offer.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {specialtyPages.map((sp, i) => (
              <Link
                key={sp.slug}
                to={`/specialties/${sp.slug}`}
                className="card group p-6 hover:shadow-premium hover:border-primary-200 transition-all reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-primary-700 transition-colors">{sp.h1}</h3>
                  <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-sm text-navy-500 leading-relaxed">{sp.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}