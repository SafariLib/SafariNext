import { Cookie } from '@digital/common';
import type { Session } from '@auth/core/types';

export async function handleResponse<T>(response: Response) {
    const data = response.status !== 204 ? ((await response.json()) as T) : ({} as T);
    const cookieToken = Cookie.BuildRefreshToken(response.headers.get('set-cookie'));
    return {
        cookieToken,
        data,
        unauthorized: response.status === 401,
        ok: response.ok,
        status: response.status,
    };
}

export function buildHeadersAuthorization(session?: Session | null) {
    return {
        Authorization: `Bearer ${session?.user?.accessToken}`,
        'Set-Cookie': Cookie.BuildRefreshToken(session?.user?.refreshToken),
    };
}