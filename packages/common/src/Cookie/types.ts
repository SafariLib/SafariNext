export interface CookieToken {
    name: string;
    value: string;
    expires: Date;
    path: string;
    sameSite: 'strict' | 'lax' | 'none';
    secure: boolean;
    httpOnly: boolean;
}
