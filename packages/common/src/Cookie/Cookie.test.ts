import { expect, test } from 'vitest';
import Cookie from './Cookie';

test('Cookie.BuildRefreshToken(): With correct string cookie, should return correct cookie token object', () => {
    const cookie =
        'token=123; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=strict; secure; HttpOnly';
    const result = Cookie.BuildRefreshToken(cookie);

    expect(result).toEqual({
        name: 'token',
        value: '123',
        expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
        path: '/',
        sameSite: 'strict',
        secure: true,
        httpOnly: true,
    });
});

test('Cookie.BuildRefreshToken(): With no cookie, should not throw', () => {
    [Cookie.BuildRefreshToken(), Cookie.BuildRefreshToken(null), Cookie.BuildRefreshToken('')].forEach(
        result => expect(result).toBeNull(),
    );
});

test('Cookie.BuildCookieToken(): With correct cookie token object, should return correct string cookie', () => {
    const cookieToken = {
        name: 'token',
        value: '123',
        expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
        path: '/',
        sameSite: 'strict' as const,
        secure: true,
        httpOnly: true,
    };

    const result = Cookie.BuildCookieToken(cookieToken);
    expect(result).toBe(
        'token=123;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;samesite=strict;secure; httponly',
    );
});

test('Cookie.BuildCookieToken(): With no cookie token, should not throw', () => {
    [Cookie.BuildCookieToken(), Cookie.BuildCookieToken(null)].forEach(result => expect(result).toBeNull());
});
