import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, AlertCircle, ArrowRight, User, Clock, Share2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { getArticleBySlug, articles } from '@/data/healthGuide';
import { services } from '@/data/services';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { NotFoundPage } from './LegalPages';

export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');

  if (!article) return <NotFoundPage />;

  const relatedService = services.find((s) => s.slug === article.relatedService);
  const relatedArticles = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: article.author ? { '@type': 'Organization', name: article.author } : undefined,
    publisher: { '@type': 'Organization', name: 'Al Amanah Medical Center' },
  };

  const content = article.content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-xl md:text-2xl font-bold text-navy-900 mt-10 mb-4 tracking-tight">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('**') && block.endsWith('**')) {
      return <p key={i} className="text-sm md:text-base font-bold text-navy-800 mt-6 mb-3">{block.replace(/\*\*/g, '')}</p>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.replace('- ', ''));
      return (
        <ul key={i} className="space-y-3 my-6">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm md:text-base text-navy-600 leading-relaxed">
              <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 shrink-0 shadow-sm shadow-accent-500/50" />
              <span>{item.replace(/\*\*/g, '')}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="text-sm md:text-base text-navy-600 leading-relaxed mb-5">{block.replace(/\*\*/g, '')}</p>;
  });

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/health-guide/${article.slug}`}
        structuredData={articleSchema}
      />

      {/* Breadcrumb */}
      <div className="bg-navy-50/80 border-b border-navy-100 backdrop-blur-sm">
        <div className="container-app py-3.5">
          <nav className="flex items-center gap-2 text-xs text-navy-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/health-guide" className="hover:text-primary-700 transition-colors">Health Guide</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-navy-50 via-white to-white py-12 md:py-16">
        <div className="container-app max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-xs font-semibold uppercase tracking-wider mb-4 inline-block shadow-sm">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 tracking-tight leading-snug">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-navy-400 pb-6 border-b border-navy-100">
              {article.author && (
                <span className="flex items-center gap-1.5 font-medium text-navy-600 bg-navy-50 px-3 py-1.5 rounded-lg">
                  <User className="w-4 h-4 text-primary-600" /> {article.author}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Published: {new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-app max-w-3xl">
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose-custom mb-10"
          >
            {content}
          </motion.article>

          {/* Medical Disclaimer */}
          <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/60 mb-10 shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-navy-700 leading-relaxed">
              <strong className="text-navy-900 font-semibold">Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for formal diagnosis and personalized treatment.
            </p>
          </div>

          {/* CTA Box */}
          <div className="card p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 border border-primary-100 shadow-soft rounded-3xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">Need to Consult a Professional?</h3>
            <p className="text-sm text-navy-500 mb-6 max-w-lg">Book an appointment with our expert specialists at Al Amanah Medical Center today.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary shadow-md">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-navy-50/70 border-t border-navy-100">
          <div className="container-app max-w-5xl">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 tracking-tight">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <motion.div key={a.slug} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Link to={`/health-guide/${a.slug}`} className="card group p-6 bg-white border border-navy-100 shadow-soft hover:shadow-premium transition-all rounded-2xl flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs font-semibold text-accent-600 mb-2.5 block">{a.category}</span>
                      <h3 className="text-base font-bold text-navy-900 mb-3 group-hover:text-primary-700 transition-colors leading-snug">{a.title}</h3>
                      <p className="text-xs text-navy-500 line-clamp-2 mb-4 leading-relaxed">{a.excerpt}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}