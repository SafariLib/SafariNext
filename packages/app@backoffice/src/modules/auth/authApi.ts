import type { JWT } from '@auth/core/jwt';
import type { User } from '@auth/core/types';
import { isDevelopment } from '@digital/common';
import { cookies, headers } from 'next/headers';
import type { Result } from '@dto';
import { decodeJwt } from './authUtils';
import { DigitalApi } from '../http';

const cookiePrefix = isDevelopment() ? 'dev_' : '';

type LoginResponse = Result<{
    token: string;
}>;

export async function login(payload: Partial<Record<'login' | 'password', unknown>>): Promise<User | null> {
    const { data, ...response } = await DigitalApi.post<LoginResponse>('/authentication/login', {
        body: payload,
    });
    const cookie = response.headers.get('set-cookie');
    if (response.unauthorized || data.value.token || !cookie) return null;

    cookies().set({
        name: `${cookiePrefix}token`,
        value: cookie,
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
    });

    return data.value;
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
