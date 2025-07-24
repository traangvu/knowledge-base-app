'use client';

import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';

export default function SignInPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const error = searchParams.get('error');

    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (status === 'authenticated') {
        router.push(callbackUrl);
        }
    }, [status, router, callbackUrl]);

    const handleSignIn = async (provider: string) => {
        await signIn(provider, { callbackUrl });
    };

    const handleEmailSignIn = async () => {
        await signIn('credentials', {
        redirect: true,
        email,
        password,
        callbackUrl,
        });
    };

    return (
        <div className={`min-h-screen flex items-center justify-center transition bg-${theme === 'light' ? 'gray-100' : 'gray-900'} text-${theme === 'light' ? 'black' : 'white'}`}>
        <div className="w-full max-w-md rounded-xl p-8 shadow-md bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Sign In</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            </div>

            {error && (
            <div className="text-red-500 text-sm text-center mb-4">
                {getErrorMessage(error)}
            </div>
            )}

            <div className="space-y-4">
            <button
                onClick={() => handleSignIn('github')}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
                Sign in with GitHub
            </button>

            <button
                onClick={() => handleSignIn('google')}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
                Sign in with Google
            </button>

            <div className="border-t border-gray-300 my-4"></div>

            <input
                type="email"
                className="w-full border rounded p-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="w-full border rounded p-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleEmailSignIn}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Sign in with Email
            </button>
            </div>
        </div>
        </div>
    );
    }

    function getErrorMessage(error: string) {
    switch (error) {
        case 'CredentialsSignin':
        return 'Invalid email or password';
        case 'OAuthAccountNotLinked':
        return 'Email already linked to another account. Try another login method.';
        default:
        return 'Something went wrong. Please try again.';
    }
}
