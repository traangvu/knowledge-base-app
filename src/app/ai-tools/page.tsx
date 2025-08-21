"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function AIToolsPage() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");

    const handleSummarize = async () => {
        const res = await fetch("/api/ai/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
        });

        const data = await res.json();
        setSummary(data.summary);
    };

    return (
        <div className="space-y-4 p-6">
        <textarea
            className="w-full rounded-xl border px-3 py-2"
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a note here..."
        />
        <Button onClick={handleSummarize}>Summarize with AI</Button>
        {summary && (
            <div className="p-4 border rounded-xl bg-gray-50">
            <h2 className="font-semibold">AI Summary</h2>
            <p>{summary}</p>
            </div>
        )}
        </div>
    );
}
