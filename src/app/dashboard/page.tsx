// src/app/dashboard/page.tsx

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    console.log("Session:", session);

    if (!session) {
        redirect("/auth/signin");
    }
    console.log("Session at /dashboard:", session);

    const user = session.user;

    return (
        <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name?.split(" ")[0]} 👋
        </h1>
        <p className="text-muted-foreground mb-8 text-sm">
            Your thoughts are safe here. Capture new ideas, revisit old ones, and
            explore how they connect.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
            <CardHeader>
                <CardTitle>Explore Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Dive into your existing notes and refine your thinking.
                </p>
                <Link href="/notes">
                <Button className="mt-4 w-full">View Notes</Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>Create a New Thought</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Capture a fleeting idea before it fades.
                </p>
                <Link href="/notes/new">
                <Button variant="secondary" className="mt-4 w-full">
                    New Note
                </Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>Organize Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Use folders and tags to bring structure to your thoughts.
                </p>
                <Link href="/folders">
                <Button variant="outline" className="mt-4 w-full">
                    Manage Folders
                </Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>Visualize Connections</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Explore the graph view to see how your ideas relate.
                </p>
                <Link href="/graph">
                <Button variant="ghost" className="mt-4 w-full">
                    Open Graph
                </Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Let AI suggest tags, summaries, or related thoughts.
                </p>
                <Link href="/ai-tools">
                <Button variant="default" className="mt-4 w-full">
                    Use AI Tools
                </Button>
                </Link>
            </CardContent>
            </Card>
        </div>
        </main>
    );
}
