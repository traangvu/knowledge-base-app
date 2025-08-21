import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
    const { text } = await req.json();

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
        { role: "system", content: "Summarize the following note:" },
        { role: "user", content: text },
        ],
    });

    return NextResponse.json({
        summary: response.choices[0].message?.content ?? "",
    });
}
