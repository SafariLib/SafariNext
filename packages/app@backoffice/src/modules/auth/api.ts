import type { JWT } from '@auth/core/jwt';
import type { User } from '@auth/core/types';
import { cookies } from 'next/headers';
import type { Result } from '@dto';
import { DigitalApi } from '@modules/http';
import { decodeJwt } from './utils';
import NextAuth from './options';
import { buildHeadersAuthorization } from '@modules/http/utils';

const cookieName = 'SafariToken';

type LoginResponse = Result<{
    token: string;
}>;

export async function login(payload: Partial<Record<'login' | 'password', unknown>>): Promise<User | null> {
    const { data, ...response } = await DigitalApi.post<LoginResponse>('/authentication/login', {
        body: payload,
    });

    const refreshToken = response.cookieToken;
    const accessToken = data?.value?.token;

    if (response.unauthorized || !accessToken || !refreshToken) return null;

    // FIXME: Token should be stored only in the cookie, some refactoring is needed
    cookies().set({ ...refreshToken, name: cookieName });
    const { content, exp } = decodeJwt(accessToken);

    return {
        ...content,
        accessToken,
        refreshToken: refreshToken.value,
        exp,
    };
}

export async function logout(): Promise<void> {
    const session = await NextAuth.auth();
    await DigitalApi.post('/authentication/logout', { headers: buildHeadersAuthorization(session) });
    cookies().delete(cookieName);
}

export async function refresh(token: JWT): Promise<JWT> {
    const session = await NextAuth.auth();
    const { data, cookieToken, ...response } = await DigitalApi.post<LoginResponse>(
        '/authentication/refresh',
        { headers: buildHeadersAuthorization(session) },
    );

    const accessToken = data?.value?.token;
    if (response.unauthorized || !accessToken || !cookieToken) {
        cookies().delete(cookieName);
        return { ...token, error: 'Unauthorized', hasError: true };
    }
    cookies().set({ ...cookieToken, name: cookieName });
    const { exp } = decodeJwt(accessToken);

    return {
        ...token,
        accessToken,
        refreshToken: cookieToken.value,
        accessTokenExpires: exp * 1000,
        error: null,
        hasError: false,
    };
}
