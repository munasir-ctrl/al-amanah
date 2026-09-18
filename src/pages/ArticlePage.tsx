import { useParams, Link } from 'react-router-dom';
import { Calendar, MessageCircle, AlertCircle, ArrowRight, User } from 'lucide-react';
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
      return <h2 key={i} className="text-xl font-bold text-navy-900 mt-8 mb-4">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('**') && block.endsWith('**')) {
      return <p key={i} className="text-sm font-bold text-navy-700 mt-4 mb-2">{block.replace(/\*\*/g, '')}</p>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.replace('- ', ''));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-navy-600">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
              {item.replace(/\*\*/g, '')}
            </li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="text-sm text-navy-600 leading-relaxed mb-4">{block.replace(/\*\*/g, '')}</p>;
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
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="container-app py-3">
          <nav className="flex items-center gap-2 text-xs text-navy-500">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <Link to="/health-guide" className="hover:text-primary-700">Health Guide</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-10 md:py-14">
        <div className="container-app max-w-3xl">
          <span className="text-xs font-semibold text-accent-600 mb-3 inline-block">{article.category}</span>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-xs text-navy-400">
            {article.author && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {article.author}
              </span>
            )}
            <span>Published: {new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>Updated: {new Date(article.updatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-app max-w-3xl">
          <div className="mb-8">{content}</div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100 mb-8">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-navy-600 leading-relaxed">
              <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment. If you are experiencing a medical emergency, contact your nearest emergency department.
            </p>
          </div>

          {/* CTA */}
          <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
            <h3 className="text-lg font-bold text-navy-900 mb-2">Need to See a Doctor?</h3>
            <p className="text-sm text-navy-500 mb-4">Book an appointment with our team today.</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/book" className="btn btn-primary">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section bg-navy-50">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((a) => (
                <Link key={a.slug} to={`/health-guide/${a.slug}`} className="card group p-5 hover:shadow-premium transition-all">
                  <span className="text-xs font-semibold text-accent-600 mb-2 block">{a.category}</span>
                  <h3 className="text-sm font-bold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors">{a.title}</h3>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
