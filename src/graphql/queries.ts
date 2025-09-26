import { gql } from '@apollo/client';

export const GET_SEO = gql`
  query GetSEO($page: String!) {
    getSEO(page: $page) {
      id
      page
      title
      description
      keywords
      canonicalUrl
      ogImage
      ogType
      noIndex
      structuredData
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_SEO = gql`
  query GetAllSEO {
    getAllSEO {
      page
      seo {
        id
        page
        title
        description
        keywords
        canonicalUrl
        ogImage
        ogType
        noIndex
        structuredData
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE_SEO = gql`
  mutation CreateSEO($input: CreateSEOInput!) {
    createSEO(input: $input) {
      id
      page
      title
      description
      keywords
      canonicalUrl
      ogImage
      ogType
      noIndex
      structuredData
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SEO = gql`
  mutation UpdateSEO($id: ID!, $input: UpdateSEOInput!) {
    updateSEO(id: $id, input: $input) {
      id
      page
      title
      description
      keywords
      canonicalUrl
      ogImage
      ogType
      noIndex
      structuredData
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_SEO = gql`
  mutation DeleteSEO($id: ID!) {
    deleteSEO(id: $id)
  }
`;
