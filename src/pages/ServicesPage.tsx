import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services, serviceCategories } from '@/data/services';

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (id: string) => {
    if (id === 'all') setSearchParams({});
    else setSearchParams({ category: id });
  };

  return (
    <>
      <SEO
        title="Our Services — Medical & Dental Care in Sharjah"
        description="Explore our full range of medical and dental services at Al Amanah Medical Center in Sharjah. Internal medicine, ENT, cardiology, pediatrics, dentistry, and more."
        canonical="/services"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Our Services</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Medical & Dental Care in Sharjah</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by experienced specialists, all under one roof.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-soft'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
