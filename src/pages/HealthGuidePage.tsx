import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { articles, articleCategories } from '@/data/healthGuide';
import { ClipboardCheck, ArrowRight } from 'lucide-react';

export function HealthGuidePage() {
  return (
    <>
      <SEO
        title="Health Guide — Medical Tips & Insights | Al Amanah"
        description="Expert-written health articles on dental care, ENT, diabetes, cardiology, pediatrics, and preventive health. Learn more about your health at Al Amanah Medical Center."
        canonical="/health-guide"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Health Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Health Tips & Medical Insights</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            Expert-written articles to help you understand your health and make informed decisions.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {articleCategories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-xl bg-navy-50 text-sm font-semibold text-navy-600">
                {cat}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
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
                  <div className="flex items-center justify-between pt-3 border-t border-navy-50">
                    <span className="text-xs text-navy-400">{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
