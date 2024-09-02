import type { JWT } from '@auth/core/jwt';
import type { User } from '@auth/core/types';
import { isDevelopment } from '@digital/common';
import { cookies, headers } from 'next/headers';
import type { Result } from '@dto';
import { DigitalApi } from '@modules/http';
import { decodeJwt } from './utils';

const cookiePrefix = isDevelopment() ? 'dev_' : '';

type LoginResponse = Result<{
    token: string;
}>;

export async function login(payload: Partial<Record<'login' | 'password', unknown>>): Promise<User | null> {
    const { data, ...response } = await DigitalApi.post<LoginResponse>('/authentication/login', {
        body: payload,
    });

    const refreshToken = response.headers.get('set-cookie');
    const accessToken = data.value.token;

    if (response.unauthorized || !accessToken || !refreshToken) return null;

    cookies().set({
        name: `${cookiePrefix}token`,
        value: refreshToken,
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
    });
    const { content, exp } = decodeJwt(accessToken);

    return {
        ...content,
        accessToken,
        refreshToken,
        exp,
    };
}

export async function logout(): Promise<void> {
    await DigitalApi.post('/authentication/logout', { headers: headers() });
    cookies().delete(`${cookiePrefix}token`);
}

export async function refresh(token: JWT): Promise<JWT> {
    const { data, ...response } = await DigitalApi.get<LoginResponse>('/authentication/refresh', {
        headers: headers(),
    });
    if (response.unauthorized) {
        cookies().delete(`${cookiePrefix}token`);
        return { ...token, error: 'Unauthorized', hasError: true };
    }

    const bearerToken = data.value.token;
    const cookie = response.headers.get('set-cookie');
    const { exp } = decodeJwt(bearerToken);

    return {
        ...token,
        accessToken: bearerToken,
        refreshToken: cookie,
        accessTokenExpires: exp * 1000,
        error: null,
        hasError: false,
    };
}
