import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const resolvers = {
    Query: {
        notes: async () => {
        return await prisma.note.findMany()
        },
    },
    Mutation: {
        createNote: async (_: never, { title, content }: never) => {
        return await prisma.note.create({
            data: { title, content, userId: "dummy-user" }, // Replace with actual user
        })
        },
    },
}
