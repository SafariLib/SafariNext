import type { CookieToken } from './types';

export default class Cookie {
    public static BuildRefreshToken(cookie?: string | null): CookieToken | null {
        try {
            if (!cookie) return null;
            return {
                name: cookie.split('=')[0],
                value: cookie.split('=')[1].split(';')[0],
                expires: new Date(cookie.split('expires=')[1].split(';')[0]),
                path: cookie.split('path=')[1].split(';')[0],
                sameSite: (cookie.split('samesite=')[1].split(';')[0] as 'strict' | 'lax' | 'none') ?? 'none',
                secure: cookie.includes(' secure'),
                httpOnly: cookie.includes(' httponly'),
            };
        } catch (error) {
            return null;
        }
    }

    public static BuildCookieToken(cookie?: CookieToken | null): string | null {
        if (!cookie) return null;
        try {
            return [
                `${cookie.name}=${cookie.value};`,
                `expires=${cookie.expires.toUTCString()};`,
                `path=${cookie.path};`,
                `samesite=${cookie.sameSite};`,
                cookie.secure ? 'secure;' : [],
                cookie.httpOnly ? ' httponly' : [],
            ]
                .flat()
                .join('');
        } catch (error) {
            return null;
        }
    }
}
