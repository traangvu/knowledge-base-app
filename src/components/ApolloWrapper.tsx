'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'

const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
})

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
