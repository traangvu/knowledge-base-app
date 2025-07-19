// src/app/api/graphql/route.ts
import { createYoga } from 'graphql-yoga'
import { createSchema } from 'graphql-yoga'
import { NextRequest } from 'next/server'

    const yoga = createYoga<{
    req: NextRequest
    }>({
    graphqlEndpoint: '/api/graphql',
    schema: createSchema({
        typeDefs: /* GraphQL */ `
        type Query {
            hello: String
        }
        `,
        resolvers: {
        Query: {
            hello: () => 'Hello world!',
        },
        },
    }),
    fetchAPI: { Request, Response },
})

export { yoga as GET, yoga as POST }
