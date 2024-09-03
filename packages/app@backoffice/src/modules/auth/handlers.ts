import { logout } from './api';
import NextAuth from './options';
import { PAGE_URL_HOME, PAGE_URL_LOGIN } from '@config';

export async function signIn(form: { login: string; password: string }) {
    await NextAuth.signIn('credentials', { ...form, redirectTo: PAGE_URL_HOME });
}

export async function signOut() {
    await logout();
    await NextAuth.signOut({ redirectTo: PAGE_URL_LOGIN });
}
