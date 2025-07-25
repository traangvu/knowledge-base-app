import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
            <header className="mb-6">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            </header>
            <section>{children}</section>
        </div>
        </main>
    );
}
