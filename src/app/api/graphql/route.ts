import { createYoga, createSchema } from "graphql-yoga"
import { NextRequest } from "next/server"
import { resolvers } from "@/app/api/graphql/resolvers"
import { typeDefs } from "@/app/api/graphql/typeDefs"

const yoga = createYoga<{
    req: NextRequest
    }>({
    schema: createSchema({
        typeDefs,
        resolvers,
    }),
    graphqlEndpoint: "/api/graphql",
    fetchAPI: { Response },
})

export { yoga as GET, yoga as POST }
