import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { articles } from '@/data/articles';
import { articlesFull } from '@/data/articlesFull'; // Fallback or use articles data
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { NotFoundPage } from './LegalPages';

export function ArticlePage() {
  const { slug } = useParams();
  
  // Find article from data list
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: article.title,
    description: article.excerpt,
    about: {
      '@type': 'MedicalSpecialty',
      name: article.category,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: siteConfig.name,
      address: siteConfig.address.full,
    },
  };

  return (
    <>
      <SEO
        title={`${article.title} — Al Amanah Medical Center Sharjah`}
        description={article.excerpt}
        canonical={`/health-guide/${article.slug}`}
        structuredData={articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-navy-50 border-b border-navy-100 py-3">
        <div className="container-app">
          <Link
            to="/health-guide"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Health Guide
          </Link>
        </div>
      </div>

      {/* Article Content Section */}
      <main className="py-12 sm:py-16 md:py-20 bg-white">
        <article className="container-app max-w-3xl">
          
          {/* Header Meta */}
          <div className="mb-8 pb-8 border-b border-navy-100">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-navy-400 mb-4 font-medium flex-wrap">
              <span className="uppercase tracking-wider text-primary-700 font-bold bg-primary-50 px-3 py-1 rounded-md">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {article.readTime || '3 min read'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {article.date || 'Sharjah Medical Update'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-navy-600 font-medium leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Body Content */}
          <div className="prose prose-navy max-w-none text-sm sm:text-base text-navy-700 leading-relaxed space-y-6">
            <p>{article.content}</p>
            
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 pt-4">
              Professional Care at Al Amanah Medical Center, Sharjah
            </h2>
            <p>
              If you or a loved one are experiencing symptoms related to {article.category.toLowerCase()}, early clinical consultation ensures effective management and lasting relief. Located conveniently at {siteConfig.address.full}, our medical team is equipped to provide comprehensive, patient-centered diagnostics and treatment plans.
            </p>

            <div className="bg-navy-50 border-l-4 border-primary-600 p-5 rounded-r-xl my-6">
              <h3 className="text-base font-bold text-navy-900 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600" /> Visit Our Center in Sharjah
              </h3>
              <p className="text-xs sm:text-sm text-navy-600">
                {siteConfig.address.full} • Open Saturday to Thursday. Walk-ins welcome or book your consultation directly.
              </p>
            </div>
          </div>

          {/* Local Geo-Targeted Consultation CTA Banner */}
          <div className="mt-12 pt-8 border-t border-navy-100 text-center bg-gradient-to-br from-navy-50 to-white rounded-2xl p-6 sm:p-8 border">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
              Ready to Consult a Specialist?
            </h2>
            <p className="text-xs sm:text-sm text-navy-500 mb-6 max-w-lg mx-auto leading-relaxed">
              Speak directly with our practitioners or book your appointment today via WhatsApp or phone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href={buildWhatsAppUrl(whatsappMessages.general)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp justify-center text-xs sm:text-sm py-3 px-6"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a 
                href={`tel:${siteConfig.phoneRaw}`} 
                className="btn btn-primary justify-center text-xs sm:text-sm py-3 px-6"
              >
                <Phone className="w-4 h-4" /> Call: {siteConfig.phone}
              </a>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}