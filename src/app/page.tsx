// src/app/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-muted px-4">
        <Card className="max-w-2xl w-full shadow-md">
            <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
                Build Your Second Brain
            </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
                Capture atomic thoughts, explore bidirectional links, and visualize the connections between ideas.
            </p>

            <p className="text-muted-foreground text-sm">
                This digital garden helps you grow knowledge over time — linking concepts, surfacing insights, and letting AI support your thinking process.
            </p>

            <div className="flex justify-center gap-4 mt-6">
                <Link href="/dashboard">
                <Button>Enter Your Garden</Button>
                </Link>
                <Link href="/login">
                <Button variant="outline">Login</Button>
                </Link>
            </div>
            </CardContent>
        </Card>
        </main>
    );
}

