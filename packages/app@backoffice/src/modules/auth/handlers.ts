import NextAuth from './options';

export async function signIn(form: FormData) {
    await NextAuth.signIn('credentials', form);
}

export async function signOut() {
    await NextAuth.signOut();
}
