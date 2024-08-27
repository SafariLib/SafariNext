import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { DigitalApi } from '@/app/api/DigitalApi';

export const authBaseUrl = '/api/auth';

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            credentials: { login: {}, password: {} },
            async authorize(credentials, _) {
                const response = await DigitalApi.post<{ token: string }>(
                    '/authentication/login',
                    credentials,
                );
                return response.data;
            },
        }),
    ], // TODO: to refactor and define if it's the Bearer token or the cookie one
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.name = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.token = token.name;
            return session;
        },
    },
    basePath: authBaseUrl,
};

export default NextAuth(authOptions);

declare module 'next-auth' {
    interface User {
        token: string;
    }

    interface Session {
        user: User;
    }
}
