import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PAGE_URL_LOGIN } from '@config';
import { login as authorize } from './api';
import { authorized, jwt, session } from './callbacks';

export const authBaseUrl = '/api/auth';

const options: NextAuthConfig = {
    providers: [Credentials({ credentials: { login: {}, password: {} }, authorize })],
    callbacks: { jwt, session, authorized },
    basePath: authBaseUrl,
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    pages: {
        signIn: PAGE_URL_LOGIN,
        signOut: '/logout',
        error: '/login',
    },
};

declare module 'next-auth' {
    interface User {
        id?: string;
        role?: number;
        accessToken: string;
        refreshToken: string;
        exp: number;
    }

    interface Session {
        user: User;
        expires: string;
    }

    interface JWT {
        id?: string;
        role?: number;
        accessToken: string;
        refreshToken: string;
        accessTokenExpires: number;
        error: string | null;
        hasError: boolean;
    }
}

export default NextAuth(options);
