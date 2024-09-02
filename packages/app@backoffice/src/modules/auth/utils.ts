import type { JWT } from '@auth/core/jwt';

export interface DecodedJwt {
    content: JwtContent;
    nbf: number;
    exp: number;
    iat: number;
    iss: string;
    aud: string;
}

export interface JwtContent {
    id: string;
    role: number;
}

export function decodeJwt(token: string): DecodedJwt {
    const jsonString = Buffer.from(token.split('.')[1], 'base64').toString().toLowerCase();
    return JSON.parse(jsonString);
}

export function isAccessTokenValid(token: JWT): boolean {
    return (
        (token.accessTokenExpires !== undefined && Date.now() < Number(token.accessTokenExpires)) ||
        token.hasError === true
    );
}
