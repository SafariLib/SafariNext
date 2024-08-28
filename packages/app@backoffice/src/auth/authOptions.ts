import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { login as authorize } from './authApi';

export const authBaseUrl = '/api/auth';

const authOptions: NextAuthConfig = {
    providers: [Credentials({ credentials: { login: {}, password: {} }, authorize })],
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
