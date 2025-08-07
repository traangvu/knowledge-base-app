// src/app/dashboard/page.tsx

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const user = session.user;

    return (
        <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome back, {user?.name?.split(" ")[0]} 👋</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
            <CardHeader>
                <CardTitle>Your Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">View and manage all your markdown notes.</p>
                <Link href="/notes">
                <Button className="mt-4 w-full">Open Notes</Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>Folders</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Organize notes into folders for better structure.</p>
                <Link href="/folders">
                <Button variant="outline" className="mt-4 w-full">Manage Folders</Button>
                </Link>
            </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>New Note</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Jump right in and start writing something new.</p>
                <Link href="/notes/new">
                <Button variant="secondary" className="mt-4 w-full">Create Note</Button>
                </Link>
            </CardContent>
            </Card>
        </div>
        </main>
    );
}
