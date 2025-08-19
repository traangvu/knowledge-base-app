import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewNotePage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/auth/signin");

    return <h1>Create a New Note</h1>;
}
