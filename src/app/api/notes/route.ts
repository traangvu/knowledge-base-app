import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET all notes for the logged-in user
export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const notes = await prisma.note.findMany({
        where: {
        user: { email: session.user.email },
        },
        orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(notes);
}

// POST create a new note
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const note = await prisma.note.create({
        data: {
        title: body.title,
        content: body.content,
        user: { connect: { email: session.user.email } },
        },
    });

    return NextResponse.json(note);
}
