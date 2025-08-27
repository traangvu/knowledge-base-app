///src/components/ui/NoteForm.tsx
"use client";

import { useState } from "react";
import Input from "./Input";
import {Button} from "./Button";

interface NoteFormProps {
    onSubmit: (data: { title: string; content: string }) => void;
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <Input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows={6}
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Save Note</Button>
        </form>
    );
}
