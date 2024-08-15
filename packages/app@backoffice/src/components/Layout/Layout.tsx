'use client';

import { EUserRole } from '@/models';
import { SdDrawer, SdHeader, SdLogo } from '@digital/ui';
import React, { type PropsWithChildren } from 'react';
import Location from './components/Location';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Theme from './components/Theme';
import User from './components/User';
import './styles.css';

const fakeUser = {
    id: '1',
    username: 'John Doe',
    email: 'lol',
    role: EUserRole.User,
    isActive: true,
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
