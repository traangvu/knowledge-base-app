'use client';

import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';

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
    }, [status, callbackUrl, router]);

    return (
        <div>
        <h1>Sign In</h1>
        {error && <p>{getErrorMessage(error)}</p>}
        <button onClick={() => signIn('github', { callbackUrl })}>
            Sign in with GitHub
        </button>
        </div>
    );
}

function getErrorMessage(error: string) {
    switch (error) {
        case 'OAuthAccountNotLinked':
        return 'An account already exists with this email address.';
        case 'AccessDenied':
        return 'Access denied.';
        default:
        return 'An unexpected error occurred.';
    }
}
