import { NextAuth, signIn } from '@/auth';
import React from 'react';

export default async function Home() {
    const session = await NextAuth.auth();
    return (
        <React.Fragment>
            {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
            <form
                action={async formData => {
                    'use server';
                    await signIn(formData);
                }}
                style={{
                    width: 200,
                    display: 'flex',
                    margin: '2rem auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 18,
                }}>
                <div>
                    <label htmlFor="login">Name</label>
                    <input id="login" name="login" placeholder="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <button>Sign In</button>
            </form>
        </React.Fragment>
    );
}
