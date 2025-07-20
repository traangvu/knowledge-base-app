// src/app/api/graphql/route.ts
import { createYoga, createSchema } from 'graphql-yoga'
import type { NextRequest } from 'next/server'

// 1. Define the schema
const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
        type Query {
            hello: String
        }
        `,
        resolvers: {
        Query: {
            hello: () => 'Hello from Yoga + Next.js!',
        },
        },
    }),
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Request, Response },
})

// 2. Next.js App Router expects (request: NextRequest)
export async function GET(request: NextRequest) {
    return yoga.handleRequest(request, {})
}

export async function POST(request: NextRequest) {
    return yoga.handleRequest(request, {})
}
