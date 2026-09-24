import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { DoctorCard } from '@/components/DoctorCard';
import { doctors, doctorCategories } from '@/data/doctors';
import { Users, Sparkles } from 'lucide-react';

export function DoctorsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return doctors;
    return doctors.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Our Doctors — Distinguished Medical Board in Sharjah"
        description="Meet the experienced doctors and specialists at Al Amanah Medical Center in Sharjah. Experts in internal medicine, dentistry, cardiology, general practice, Unani, and homeo care."
        canonical="/doctors"
      />
      
      {/* Classic Editorial Header Section */}
      <section className="bg-white py-20 md:py-28 border-b border-navy-100">
        <div className="container-app text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50 border border-navy-200/80 text-navy-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" /> Distinguished Medical Board
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 mb-6 tracking-tight leading-tight">
            Meet Our Expert <span className="text-primary-600">Physicians</span>
          </h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8" />
          <p className="text-base md:text-xl text-navy-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Experienced healthcare leaders committed to upholding international standards of clinical excellence and compassionate, patient-first care.
          </p>
        </div>
      </section>

      {/* Directory & Filtering Section */}
      <section className="py-20 md:py-28 bg-navy-50/40">
        <div className="container-app">
          
          {/* Classic Category Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 border-b border-navy-200/60 pb-8">
            {doctorCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
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

          {/* Doctors Grid with Layout Animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filtered.map((doctor) => (
                <motion.div
                  key={doctor.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 bg-white rounded-2xl border border-navy-200 shadow-sm max-w-md mx-auto px-6 mt-4"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mx-auto mb-4 border border-navy-100">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">No Specialists Found</h3>
              <p className="text-sm text-navy-600">There are currently no physicians listed under this category. Please select an alternative discipline.</p>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}