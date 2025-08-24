import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
    try {
        // ✅ Safely parse incoming JSON
        const { text } = await req.json();

        if (!text || typeof text !== "string") {
        return NextResponse.json(
            { error: "Invalid input. Expected a text string." },
            { status: 400 }
        );
        }

        // ✅ Call OpenAI API
        const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Summarize the following note:" },
            { role: "user", content: text },
        ],
        });

        // ✅ Extract summary safely
        const summary = response.choices?.[0]?.message?.content?.trim();

        if (!summary) {
        return NextResponse.json(
            { error: "No summary generated." },
            { status: 500 }
        );
        }

        // ✅ Return proper JSON response
        return NextResponse.json({ summary });
    } catch (err) {
        console.error("API Error:", err);
        return NextResponse.json(
        { error: "Something went wrong while summarizing." },
        { status: 500 }
        );
    }
}
