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
