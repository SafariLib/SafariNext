import { NextAuth, signOut } from '@modules/auth';
import React from 'react';

export default async function Home() {
    const session = await NextAuth.auth();
    return (
        <React.Fragment>
            {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
            <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
                style={{
                    width: 200,
                    display: 'flex',
                    margin: '2rem auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 18,
                }}>
                <button>Sign Out</button>
            </form>
        </React.Fragment>
    );
}
