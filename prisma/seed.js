import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.node.create({
        data: {
        title: "Article 1",
        type: "Article" // <-- this was missing
        }
    });

    await prisma.node.create({
        data: {
        title: "Concept 1",
        type: "Concept"
        }
    });

    console.log("Seed finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
