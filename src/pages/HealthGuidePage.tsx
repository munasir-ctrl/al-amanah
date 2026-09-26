import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { articles } from '@/data/articles';
import { ArrowRight, Calendar, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function HealthGuidePage() {
  return (
    <>
      <SEO
        title="Health Guide & Medical Articles — Al Amanah Medical Center Sharjah"
        description="Explore expert health advice, preventative care tips, and clinical insights from leading practitioners at Al Amanah Medical Center located in Al Mubarak Center, Sharjah."
        canonical="/health-guide"
      />

      {/* Luxury Geo-Optimized Hero Section */}
      <section className="bg-gradient-to-b from-navy-50/80 via-white to-white py-12 sm:py-16 md:py-20 border-b border-navy-100/50">
        <div className="container-app text-center px-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-accent-50 text-accent-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <MapPin className="w-3.5 h-3.5" /> Sharjah Health & Wellness Hub
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
            Expert Medical Articles & Tips
          </h1>
          <p className="text-base sm:text-lg text-navy-500 leading-relaxed font-normal">
            Trusted clinical guidance, preventative health advice, and patient education written by specialized practitioners serving the Sharjah and UAE community since {siteConfig.established}.
          </p>
        </div>
      </section>

      {/* Completely Imageless Clean Articles Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, i) => (
              <article
                key={article.slug}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-navy-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] hover:border-primary-200 transition-all duration-300 flex flex-col justify-between"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div>
                  {/* Category & Read Time Meta */}
                  <div className="flex items-center justify-between text-xs text-navy-400 mb-4 font-medium">
                    <span className="uppercase tracking-wider text-primary-700 font-bold bg-primary-50 px-3 py-1 rounded-md">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime || '3 min read'}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-navy-900 group-hover:text-primary-700 transition-colors mb-3 tracking-tight leading-snug">
                    <Link to={`/health-guide/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Meta & Action */}
                <div className="pt-4 border-t border-navy-100/60 flex items-center justify-between text-xs font-semibold text-navy-700 group-hover:text-primary-700 transition-colors">
                  <span className="flex items-center gap-1 text-navy-400 font-normal">
                    <Calendar className="w-3.5 h-3.5" /> {article.date || 'Sharjah Medical Update'}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Geo-Targeted Consultation CTA Banner */}
      <section className="py-12 sm:py-16 bg-navy-900 text-white">
        <div className="container-app max-w-4xl text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Have Questions About Your Health?
          </h2>
          <p className="text-sm sm:text-base text-navy-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit our medical center at {siteConfig.address.full} or connect directly with our expert practitioners via phone or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a 
              href={buildWhatsAppUrl(whatsappMessages.general)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp justify-center text-sm py-3 px-6"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="btn bg-white/10 text-white hover:bg-white/20 border border-white/20 justify-center text-sm py-3 px-6"
            >
              <Phone className="w-4 h-4" /> Call: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}