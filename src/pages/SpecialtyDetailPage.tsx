import { useParams, Link } from 'react-router-dom';
import { Calendar, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { getSpecialtyBySlug, specialtyPages } from '@/data/specialties';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { NotFoundPage } from './LegalPages';

export function SpecialtyDetailPage() {
  const { slug } = useParams();
  const specialty = getSpecialtyBySlug(slug || '');

  if (!specialty) return <NotFoundPage />;

  const relatedServices = services.filter((s) => specialty.services.includes(s.slug));
  const otherSpecialties = specialtyPages.filter((s) => s.slug !== specialty.slug).slice(0, 4);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alamanahmedicalcenter.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://www.alamanahmedicalcenter.com/specialties' },
      { '@type': 'ListItem', position: 3, name: specialty.h1, item: `https://www.alamanahmedicalcenter.com/specialties/${specialty.slug}` },
    ],
  };

  const content = specialty.content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-xl font-bold text-navy-900 mt-8 mb-4">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.replace('- ', ''));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-navy-600">
              <div className="flex items-center justify-center w-5 h-5 rounded-lg bg-accent-50 shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-accent-600" />
              </div>
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
        title={specialty.title}
        description={specialty.metaDescription}
        canonical={`/specialties/${specialty.slug}`}
        structuredData={breadcrumbSchema}
      />

      {/* Breadcrumb */}
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="container-app py-3">
          <nav className="flex items-center gap-2 text-xs text-navy-500">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <Link to="/specialties" className="hover:text-primary-700">Specialties</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium">{specialty.h1}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-12 md:py-16">
        <div className="container-app max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{specialty.h1}</h1>
          <p className="text-base md:text-lg text-navy-500 leading-relaxed mb-6">{specialty.intro}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn btn-primary">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-app max-w-3xl">
          <div>{content}</div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-navy-50">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Specialties */}
      <section className="section bg-white">
        <div className="container-app">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Explore Other Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherSpecialties.map((sp) => (
              <Link key={sp.slug} to={`/specialties/${sp.slug}`} className="card group p-5 hover:shadow-premium transition-all">
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-primary-700 transition-colors mb-1">{sp.h1}</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-700 text-white">
        <div className="container-app text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Book Your Appointment</h2>
          <p className="text-primary-100 mb-6">Our team is ready to help. Book online or reach out via WhatsApp.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn bg-white text-primary-700 hover:bg-primary-50">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
