import type { NextRequest } from 'next/server';
import type { JWT } from '@auth/core/jwt';
import type { Account, Session, User } from '@auth/core/types';
import { PAGE_URL_HOME } from '@config';
import { refresh } from './api';
import { decodeJwt, isAccessTokenValid } from './utils';

export async function jwt({ token, user, account }: { token: JWT; user: User; account: Account | null }) {
    if (account && user) {
        const { exp } = decodeJwt(user.accessToken);
        token = { ...token, ...user, accessTokenExpires: exp * 1000 };
    }

    if (isAccessTokenValid(token)) {
        token.refreshToken = undefined;
        return token;
    }

    return await refresh(token);
}

export async function session({ session, token }: { session: Session; token: JWT }) {
    return {
        ...session,
        user: {
            ...session.user,
            id: token.id as string,
            role: token.role as number,
            accessToken: token.accessToken as string,
            accessTokenExpires: token.accessTokenExpires as number,
        },
        error: token.error,
    };
}

export async function authorized({ request, auth }: { request: NextRequest; auth: Session | null }) {
    const { pathname } = request.nextUrl;
    const isLogged = !!auth;
    if (isLogged && pathname === '/login') return Response.redirect(new URL(PAGE_URL_HOME, request.nextUrl));
    return isLogged;
}
