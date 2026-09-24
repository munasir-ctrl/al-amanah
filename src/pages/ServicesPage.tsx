import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ServiceCard } from '@/components/ServiceCard';
import { services, serviceCategories } from '@/data/services';
import { Sparkles, Stethoscope } from 'lucide-react';

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
        title="Our Services — Luxury Medical & Dental Care in Sharjah"
        description="Explore our full range of medical and dental services at Al Amanah Medical Center in Sharjah. Internal medicine, ENT, cardiology, pediatrics, dentistry, and more."
        canonical="/services"
      />

      {/* Classic Editorial Hero Header */}
      <section className="bg-white py-20 md:py-28 border-b border-navy-100">
        <div className="container-app text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200/80 text-navy-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" /> Comprehensive Clinical Care
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight leading-tight">
            Our Medical & <span className="text-primary-600">Dental Services</span>
          </h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8" />
          <p className="text-base md:text-xl text-navy-600 leading-relaxed font-normal max-w-2xl mx-auto">
            World-class healthcare services delivered by experienced specialists under one roof, upholding the finest standards of medical excellence in Sharjah.
          </p>
        </div>
      </section>

      {/* Main Content & Filtering Section */}
      <section className="py-20 md:py-28 bg-navy-50/40">
        <div className="container-app">
          
          {/* Classic Category Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 border-b border-navy-200/60 pb-8">
            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-md scale-[1.02]'
                      : 'bg-white text-navy-700 hover:bg-navy-100/60 border border-navy-200/80 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service) => (
              <div key={service.slug} className="transition-transform duration-300 hover:-translate-y-1">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-navy-200 shadow-sm max-w-md mx-auto px-6">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mx-auto mb-4 border border-navy-100">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">No Services Found</h3>
              <p className="text-sm text-navy-600">There are currently no procedures listed under this category. Please select an alternative option.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}