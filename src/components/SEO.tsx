import { Helmet } from 'react-helmet-async';
import { useSEO } from '@/hooks/useSEOSimple';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
  useGraphQL?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType,
  structuredData,
  noIndex,
  useGraphQL = true
}: SEOProps) => {
  const location = useLocation();
  const currentPage = location.pathname;
  
  // Use GraphQL data if enabled and available
  const { seo: graphqlSEO, loading } = useSEO(currentPage);
  
  // Fallback to props if GraphQL is disabled or data is loading
  const seoData = useGraphQL && graphqlSEO && !loading ? graphqlSEO : {
    title: title || "SmileCare - Affordable Dental Insurance for Filipino Community in Bahrain",
    description: description || "Affordable dental insurance for Filipino residents in Bahrain. Plans from BD 14/year with comprehensive coverage, Tagalog support, and same-month activation.",
    keywords: keywords ? keywords.split(', ') : ["dental insurance Bahrain", "Filipino dental insurance", "affordable dental care Bahrain", "SmileCare", "dental coverage Bahrain", "Filipino community Bahrain", "dental plans Bahrain", "BD 14 dental insurance"],
    canonicalUrl: canonicalUrl || "https://smilecare-bahrain.com",
    ogImage: ogImage || "https://smilecare-bahrain.com/logo.png",
    ogType: ogType || "website",
    structuredData: structuredData,
    noIndex: noIndex || false
  };

  const fullTitle = seoData.title?.includes("SmileCare") ? seoData.title : `${seoData.title} | SmileCare Dental Insurance`;
  const keywordsString = Array.isArray(seoData.keywords) ? seoData.keywords.join(', ') : seoData.keywords;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content={seoData.noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoData.ogType} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SmileCare Dental Insurance" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoData.canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.ogImage} />
      
      {/* Structured Data */}
      {seoData.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
