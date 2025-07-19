export const typeDefs = /* GraphQL */ `
    type Note {
        id: String!
        title: String!
        content: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        notes: [Note!]!
    }

    type Mutation {
        createNote(title: String!, content: String!): Note!
    }
`
