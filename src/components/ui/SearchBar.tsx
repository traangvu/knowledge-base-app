///src/components/ui/SearchBar.tsx
"use client";

import { useState } from "react";
import Input from "./Input";
import { Search } from "lucide-react";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    }

    export default function SearchBar({ onSearch, placeholder = "Search..." }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="pl-8"
            />
        </div>
        <button type="submit" className="hidden" />
        </form>
    );
}
