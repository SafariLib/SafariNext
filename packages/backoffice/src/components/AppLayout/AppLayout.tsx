'use client';

import './styles.css';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { AppBar } from '../AppBar';
import { EUserRole } from '@models/User';
import { AppDrawer } from '@components/AppDrawer';

const fakeUser = {
    id: '1',
    username: 'John Doe',
    email: 'lol',
    role: EUserRole.User,
    isActive: true,
};

interface AppLayoutProps extends PropsWithChildren {}

export default function AppLayout({ children }: AppLayoutProps) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <React.Fragment>
            <AppBar>
                <AppBar.Actions>
                    <AppBar.Actions.Navigation onClick={handleDrawer} />
                </AppBar.Actions>
                <AppBar.Location />
                <AppBar.Actions>
                    <AppBar.Actions.User {...fakeUser} />
                    <AppBar.Actions.Theme />
                    <AppBar.Actions.Settings />
                </AppBar.Actions>
            </AppBar>
            <AppDrawer open={drawerOpen} onClose={handleDrawer} />
            {children}
        </React.Fragment>
    );
}
