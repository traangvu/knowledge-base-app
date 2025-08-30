'use client'

import { ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from '@apollo/client/link/http'
import { onError } from '@apollo/client/link/error'
import React from 'react'

// HTTP Link
const httpLink = createHttpLink({
    uri: '/api/graphql',
})

// Auth Link (if you need authentication)
const authLink = setContext((_, { headers }) => {
    // Get token from localStorage, cookies, or session
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
})

// Error Link (for handling GraphQL errors)
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
    }
    
    if (networkError) {
        console.log(`[Network error]: ${networkError}`)
    }
})

// Combine links
const link = from([
    errorLink,
    authLink,
    httpLink
])

// Apollo Client with enhanced config
const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        // Type policies for better caching
        typePolicies: {
            // Example: if you have a User type
            // User: {
            //     fields: {
            //         posts: {
            //             merge(existing = [], incoming) {
            //                 return [...existing, ...incoming]
            //             }
            //         }
            //     }
            // }
        }
    }),
    // Enable developer tools
    connectToDevTools: process.env.NODE_ENV === 'development',
    // Default options for queries
    defaultOptions: {
        watchQuery: {
            errorPolicy: 'ignore',
        },
        query: {
            errorPolicy: 'all',
        },
    },
})

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}