import { NextAuth } from '@modules/auth';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default NextAuth.auth as any;
