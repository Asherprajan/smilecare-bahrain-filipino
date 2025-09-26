export const typeDefs = `
  type SEO {
    id: ID!
    page: String!
    title: String!
    description: String!
    keywords: [String!]!
    canonicalUrl: String!
    ogImage: String
    ogType: String
    noIndex: Boolean
    structuredData: JSON
    createdAt: String!
    updatedAt: String!
  }

  type PageSEO {
    page: String!
    seo: SEO
  }

  type Query {
    getSEO(page: String!): SEO
    getAllSEO: [PageSEO!]!
  }

  type Mutation {
    createSEO(input: CreateSEOInput!): SEO!
    updateSEO(id: ID!, input: UpdateSEOInput!): SEO!
    deleteSEO(id: ID!): Boolean!
  }

  input CreateSEOInput {
    page: String!
    title: String!
    description: String!
    keywords: [String!]!
    canonicalUrl: String!
    ogImage: String
    ogType: String
    noIndex: Boolean
    structuredData: JSON
  }

  input UpdateSEOInput {
    title: String
    description: String
    keywords: [String!]
    canonicalUrl: String
    ogImage: String
    ogType: String
    noIndex: Boolean
    structuredData: JSON
  }

  scalar JSON
`;

// Mock data for development
export const mockSEOData = {
  "/": {
    id: "1",
    page: "/",
    title: "SmileCare - Affordable Dental Insurance for Filipino Community in Bahrain | BD 14/Year",
    description: "Affordable dental insurance for Filipino residents in Bahrain. Plans from BD 14/year with comprehensive coverage, Tagalog support, and same-month activation. Trusted by 500+ Filipino families.",
    keywords: [
      "dental insurance Bahrain",
      "Filipino dental insurance",
      "affordable dental care Bahrain",
      "SmileCare",
      "dental coverage Bahrain",
      "Filipino community Bahrain",
      "dental plans Bahrain",
      "BD 14 dental insurance",
      "Tagalog dental support"
    ],
    canonicalUrl: "https://smilecare-bahrain.com",
    ogImage: "https://smilecare-bahrain.com/logo.png",
    ogType: "website",
    noIndex: false,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SmileCare Dental Insurance - Home",
      "description": "Affordable dental insurance for Filipino residents in Bahrain with comprehensive coverage and Tagalog support",
      "url": "https://smilecare-bahrain.com"
    },
    createdAt: "2024-12-19T00:00:00Z",
    updatedAt: "2024-12-19T00:00:00Z"
  },
  "/plans": {
    id: "2",
    page: "/plans",
    title: "Dental Insurance Plans - SmileCare Plans A & B | BD 14-18/Year",
    description: "Compare SmileCare dental insurance plans for Filipino residents in Bahrain. Plan A (BD 18/year) for general public and Plan B (BD 14/year) for household staff. Comprehensive coverage with same-month activation.",
    keywords: [
      "dental insurance plans Bahrain",
      "SmileCare Plan A",
      "SmileCare Plan B",
      "dental coverage options",
      "Filipino dental insurance plans",
      "BD 14 dental plan",
      "BD 18 dental plan",
      "household staff dental insurance"
    ],
    canonicalUrl: "https://smilecare-bahrain.com/plans",
    ogImage: "https://smilecare-bahrain.com/logo.png",
    ogType: "website",
    noIndex: false,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SmileCare Dental Insurance Plans - Compare Coverage Options",
      "description": "Compare SmileCare dental insurance plans for Filipino residents in Bahrain",
      "url": "https://smilecare-bahrain.com/plans"
    },
    createdAt: "2024-12-19T00:00:00Z",
    updatedAt: "2024-12-19T00:00:00Z"
  },
  "/registration": {
    id: "3",
    page: "/registration",
    title: "Register for SmileCare Dental Insurance - Simple 4-Step Process",
    description: "Register for SmileCare dental insurance in 4 simple steps. Online registration, same-month activation, and comprehensive coverage for Filipino residents in Bahrain. Start your registration today.",
    keywords: [
      "register dental insurance Bahrain",
      "SmileCare registration",
      "dental insurance sign up",
      "Filipino dental insurance registration",
      "online dental insurance registration",
      "BD 14 dental insurance registration"
    ],
    canonicalUrl: "https://smilecare-bahrain.com/registration",
    ogImage: "https://smilecare-bahrain.com/logo.png",
    ogType: "website",
    noIndex: false,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SmileCare Registration - How to Register for Dental Insurance",
      "description": "Simple 4-step registration process for SmileCare dental insurance",
      "url": "https://smilecare-bahrain.com/registration"
    },
    createdAt: "2024-12-19T00:00:00Z",
    updatedAt: "2024-12-19T00:00:00Z"
  },
  "/partners": {
    id: "4",
    page: "/partners",
    title: "SmileCare Partners - Trusted Insurance & Dental Providers in Bahrain",
    description: "Meet our trusted partners including Gulf Union Insurance, Fakhro Insurance Services, Philippine Embassy, and Mazaya Dental Centre providing comprehensive dental insurance for Filipino residents in Bahrain.",
    keywords: [
      "SmileCare partners",
      "Gulf Union Insurance",
      "Fakhro Insurance Services",
      "Mazaya Dental Centre",
      "Philippine Embassy Bahrain",
      "dental insurance partners",
      "trusted dental providers Bahrain"
    ],
    canonicalUrl: "https://smilecare-bahrain.com/partners",
    ogImage: "https://smilecare-bahrain.com/logo.png",
    ogType: "website",
    noIndex: false,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SmileCare Partners - Trusted Insurance and Dental Providers",
      "description": "Meet our trusted partners providing comprehensive dental insurance",
      "url": "https://smilecare-bahrain.com/partners"
    },
    createdAt: "2024-12-19T00:00:00Z",
    updatedAt: "2024-12-19T00:00:00Z"
  },
  "/challenges": {
    id: "5",
    page: "/challenges",
    title: "Dental Insurance Challenges & Solutions - SmileCare for Filipino Residents",
    description: "Understanding the challenges Filipino residents face with dental insurance in Bahrain and how SmileCare provides affordable, culturally sensitive solutions with comprehensive coverage starting from BD 14/year.",
    keywords: [
      "dental insurance challenges Bahrain",
      "Filipino dental insurance problems",
      "affordable dental insurance solutions",
      "SmileCare solutions",
      "dental insurance barriers",
      "cultural sensitive dental care"
    ],
    canonicalUrl: "https://smilecare-bahrain.com/challenges",
    ogImage: "https://smilecare-bahrain.com/logo.png",
    ogType: "website",
    noIndex: false,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dental Insurance Challenges & Solutions - SmileCare for Filipino Residents",
      "description": "Understanding challenges and SmileCare's solutions for affordable dental insurance",
      "url": "https://smilecare-bahrain.com/challenges"
    },
    createdAt: "2024-12-19T00:00:00Z",
    updatedAt: "2024-12-19T00:00:00Z"
  }
};
