import { NextAuth } from '@modules/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextApiRequest, response: NextApiResponse) {
    return NextAuth.auth(request, response);
}
