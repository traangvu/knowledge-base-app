// src/components/ClientProvider.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo';

export function ClientProvider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
