import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: '/api/graphql', // or your actual GraphQL endpoint
    cache: new InMemoryCache(),
});