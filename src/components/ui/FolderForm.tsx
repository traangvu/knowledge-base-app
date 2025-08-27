///src/components/ui/FolderForm.tsx

"use client";

import { useState } from "react";
import Input from "./Input";
import {Button} from "./Button";

interface FolderFormProps {
    onSubmit: (data: { name: string }) => void;
}

export default function FolderForm({ onSubmit }: FolderFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;
        onSubmit({ name });
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
            type="text"
            placeholder="Folder name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Add</Button>
        </form>
    );
}
