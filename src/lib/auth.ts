import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
            const user = await prisma.user.findUnique({
                where: { email: credentials?.email },
            });
    
            if (user && credentials?.password === 'testpassword') {
                return user;
            }
    
            return null;
            },
        }),
        ],
        pages: {
        signIn: '/auth/signin',
        },
        secret: process.env.NEXTAUTH_SECRET,
    };