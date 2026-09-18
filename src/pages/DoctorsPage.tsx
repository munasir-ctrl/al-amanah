import { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { DoctorCard } from '@/components/DoctorCard';
import { doctors, doctorCategories } from '@/data/doctors';

export function DoctorsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return doctors;
    return doctors.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Our Doctors — Meet Our Medical Team in Sharjah"
        description="Meet the experienced doctors at Al Amanah Medical Center in Sharjah. Specialists in internal medicine, ENT, dentistry, and more."
        canonical="/doctors"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Our Team</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Meet Our Doctors</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            Experienced professionals committed to providing personalized care.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {doctorCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-soft'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-navy-500 py-12">No doctors found in this category. Please check back soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
