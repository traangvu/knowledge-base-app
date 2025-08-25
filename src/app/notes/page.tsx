import { prisma } from '@/lib/prisma'
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default async function NotesPage() {
    const notes = await prisma.note.findMany({ include: { folder: true } });

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map(note => (
            <Link key={note.id} href={`/notes/${note.id}`}>
            <Card>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-500">{note.folder?.name || "No folder"}</p>
            </Card>
            </Link>
        ))}
        </div>
    );
}
