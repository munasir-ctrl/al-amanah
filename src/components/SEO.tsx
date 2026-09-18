import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  structuredData?: object | object[];
}

export function SEO({
  title,
  description,
  canonical,
  image,
  structuredData,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc =
    description ||
    'Expert medical and dental care in Sharjah. Internal medicine, ENT, cardiology, pediatrics, dental services. Book an appointment at Al Amanah Medical Center.';
  const url = canonical
    ? `https://www.alamanahmedicalcenter.com${canonical}`
    : 'https://www.alamanahmedicalcenter.com';
  const img = image || 'https://bolt.new/static/og_default.png';

  const schemas = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteConfig.legalName,
    description: desc,
    url: 'https://www.alamanahmedicalcenter.com',
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.suite}, ${siteConfig.address.building}`,
      addressLocality: siteConfig.address.city,
      addressCountry: 'AE',
    },
    foundingDate: String(siteConfig.established),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <script type="application/ld+json">
        {JSON.stringify([defaultSchema, ...schemas])}
      </script>
    </Helmet>
  );
}
