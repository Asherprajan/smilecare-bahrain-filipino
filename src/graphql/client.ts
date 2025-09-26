import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { mockSEOData } from './schema';

// Mock resolvers for development
const mockResolvers = {
  Query: {
    getSEO: (_: any, { page }: { page: string }) => {
      return mockSEOData[page as keyof typeof mockSEOData] || null;
    },
    getAllSEO: () => {
      return Object.values(mockSEOData).map(seo => ({
        page: seo.page,
        seo
      }));
    }
  },
  Mutation: {
    createSEO: (_: any, { input }: any) => {
      const newSEO = {
        id: Date.now().toString(),
        ...input,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      mockSEOData[input.page as keyof typeof mockSEOData] = newSEO;
      return newSEO;
    },
    updateSEO: (_: any, { id, input }: any) => {
      const existingSEO = Object.values(mockSEOData).find(seo => seo.id === id);
      if (!existingSEO) {
        throw new Error('SEO not found');
      }
      const updatedSEO = {
        ...existingSEO,
        ...input,
        updatedAt: new Date().toISOString()
      };
      mockSEOData[existingSEO.page as keyof typeof mockSEOData] = updatedSEO;
      return updatedSEO;
    },
    deleteSEO: (_: any, { id }: { id: string }) => {
      const existingSEO = Object.values(mockSEOData).find(seo => seo.id === id);
      if (!existingSEO) {
        return false;
      }
      delete mockSEOData[existingSEO.page as keyof typeof mockSEOData];
      return true;
    }
  }
};

// For development, we'll use a mock client
// In production, replace this with your actual GraphQL endpoint
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth-token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  resolvers: mockResolvers,
  typeDefs: `
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
  `
});

export default client;
