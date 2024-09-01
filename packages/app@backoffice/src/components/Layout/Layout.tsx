'use client';

import { SdDrawer, SdHeader, SdLogo } from '@digital/ui';
import React, { type PropsWithChildren } from 'react';
import Location from './components/Location';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Theme from './components/Theme';
import User from './components/User';
import './styles.css';
import type { UserModel } from '@dto';

const fakeUser: UserModel = {
    id: '1111-2222-3333-4444-5555',
    username: 'John Doe',
    email: 'lol',
    role: 1,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

export default function Layout({ children }: PropsWithChildren) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <React.Fragment>
            <SdHeader>
                <Navigation onClick={handleDrawer} />
                <Location />
                <div>
                    <User {...fakeUser} />
                    <Theme />
                    <Settings />
                </div>
            </SdHeader>
            <SdDrawer
                open={drawerOpen}
                onClose={handleDrawer}
                renderHeader={() => <SdLogo />}
                direction="left"
            />
            {children}
        </React.Fragment>
    );
}
