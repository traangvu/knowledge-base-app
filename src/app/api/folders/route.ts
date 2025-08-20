import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET all folders for logged-in user
export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const folders = await prisma.folder.findMany({
        where: {
        user: { email: session.user.email },
        },
        include: {
        notes: true, // also return notes inside each folder
        },
    });

    return NextResponse.json(folders);
}

// POST create a new folder
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const folder = await prisma.folder.create({
        data: {
        name: body.name,
        user: { connect: { email: session.user.email } },
        },
    });

    return NextResponse.json(folder);
}
