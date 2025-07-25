'use client';

import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const { status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const error = searchParams.get('error');

    useEffect(() => {
        if (status === 'authenticated') {
        router.push(callbackUrl);
        }
    }, [status, router, callbackUrl]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-xl bg-white p-8 shadow-md w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-4 text-center">Sign In</h1>

            {error && (
            <div className="mb-4 text-sm text-red-600 text-center">
                {getErrorMessage(error)}
            </div>
            )}

            <button
            onClick={() => signIn('github', { callbackUrl })}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
            Sign in with GitHub
            </button>
        </div>
        </div>
    );
}

function getErrorMessage(error: string) {
    switch (error) {
        case 'OAuthAccountNotLinked':
        return 'An account with the same email already exists. Please sign in with the same provider.';
        case 'AccessDenied':
        return 'Access Denied. Check your permissions.';
        default:
        return 'An unexpected error occurred. Please try again.';
    }
}
