import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { articles, articleCategories } from '@/data/healthGuide';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export function HealthGuidePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Health Guide — Medical Tips & Insights | Al Amanah"
        description="Expert-written health articles on dental care, ENT, diabetes, cardiology, pediatrics, and preventive health. Learn more about your health at Al Amanah Medical Center."
        canonical="/health-guide"
      />

      {/* Classic Journal Header */}
      <section className="bg-white py-16 md:py-24 border-b border-navy-100">
        <div className="container-app text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-4 inline-block">
            Clinical Insights & Resources
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
            Health Guide & Medical Articles
          </h1>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-base md:text-lg text-navy-600 leading-relaxed font-normal">
            Authoritative health literature curated by our specialist practitioners to empower your wellness journey and preventive care decisions.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-20 bg-navy-50/40">
        <div className="container-app">
          
          {/* Classic Category Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14 border-b border-navy-200/60 pb-8">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeCategory === 'All'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 hover:bg-navy-100/60 border border-navy-200/80'
              }`}
            >
              All Articles
            </button>
            {articleCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-white text-navy-700 hover:bg-navy-100/60 border border-navy-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Classic Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/health-guide/${article.slug}`}
                className="group bg-white rounded-xl border border-navy-200/80 shadow-sm hover:shadow-md hover:border-navy-300 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Minimalist Top Accent Bar */}
                <div className="h-1 bg-primary-600 w-full group-hover:bg-primary-700 transition-colors" />
                
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-navy-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-primary-700 transition-colors tracking-tight leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-navy-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-navy-100 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                      Read Complete Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Clock className="w-4 h-4 text-navy-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Classic Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-navy-200 shadow-sm max-w-md mx-auto px-6">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center mx-auto mb-4 border border-navy-100">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">No Articles Found</h3>
              <p className="text-sm text-navy-600">There are currently no published guides available under this classification. Please select an alternative category.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}