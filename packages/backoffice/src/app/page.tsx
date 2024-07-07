import React from 'react';
import { AppBar } from '@/components';

export default function Home() {
    return (
        <React.Fragment>
            <AppBar>
                <AppBar.Title />
                <AppBar.Actions />
            </AppBar>
            <main></main>
        </React.Fragment>
    );
}
