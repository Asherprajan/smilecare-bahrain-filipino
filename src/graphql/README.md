# GraphQL SEO Management

This directory contains the GraphQL implementation for managing SEO data dynamically across your SmileCare website.

## Overview

The GraphQL SEO system allows you to:

- Manage SEO metadata for each page dynamically
- Update titles, descriptions, keywords, and structured data through a GraphQL API
- Use a centralized admin dashboard for SEO management
- Fallback to static SEO data when GraphQL is unavailable

## Files Structure

```
src/graphql/
├── schema.ts          # GraphQL type definitions and mock data
├── queries.ts         # GraphQL queries and mutations
├── client.ts          # Apollo Client configuration
└── README.md          # This documentation
```

## GraphQL Schema

### Types

```graphql
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
```

### Queries

- `getSEO(page: String!)` - Get SEO data for a specific page
- `getAllSEO` - Get SEO data for all pages

### Mutations

- `createSEO(input: CreateSEOInput!)` - Create new SEO data
- `updateSEO(id: ID!, input: UpdateSEOInput!)` - Update existing SEO data
- `deleteSEO(id: ID!)` - Delete SEO data

## Usage

### 1. Using the SEO Component

The SEO component automatically uses GraphQL data when available:

```tsx
import SEO from '@/components/SEO';

// Automatically uses GraphQL data for current page
<SEO />

// Or disable GraphQL and use props
<SEO
  useGraphQL={false}
  title="Custom Title"
  description="Custom Description"
/>
```

### 2. Using SEO Hooks

```tsx
import { useSEO, useCreateSEO, useUpdateSEO } from "@/hooks/useSEO";

function MyComponent() {
  const { seo, loading, error } = useSEO("/plans");
  const { createSEO } = useCreateSEO();
  const { updateSEO } = useUpdateSEO();

  // Use the data...
}
```

### 3. Admin Dashboard

Access the SEO management dashboard at `/admin/seo` to:

- View all pages and their SEO status
- Edit SEO data for any page
- Create new SEO entries
- Delete SEO data

## Configuration

### Environment Variables

Set up your GraphQL endpoint:

```env
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### Production Setup

1. Replace the mock client in `client.ts` with your actual GraphQL server
2. Implement the resolvers on your backend
3. Set up authentication if needed
4. Configure caching strategies

## Mock Data

The system includes mock data for development. You can find it in `schema.ts`:

- Home page (`/`)
- Plans page (`/plans`)
- Registration page (`/registration`)
- Partners page (`/partners`)
- Challenges page (`/challenges`)

## Benefits

1. **Dynamic Management**: Update SEO without code changes
2. **Centralized Control**: Manage all SEO from one dashboard
3. **Fallback Support**: Graceful degradation when GraphQL is unavailable
4. **Type Safety**: Full TypeScript support
5. **Real-time Updates**: Changes reflect immediately
6. **Scalable**: Easy to add new pages and SEO fields

## Integration with Headless CMS

This GraphQL setup can easily integrate with headless CMS solutions like:

- Strapi
- Contentful
- Sanity
- WordPress with GraphQL

## Next Steps

1. Set up a real GraphQL server
2. Implement authentication
3. Add SEO analytics integration
4. Set up automated SEO testing
5. Add bulk SEO operations
6. Implement SEO templates
