'use client';

import './styles.css';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Header } from '../../components/Header';
import { EUserRole } from '@/models';
import { Drawer } from '@/components/Drawer';
import { SdLogo } from '@safaridigital/common';

const fakeUser = {
    id: '1',
    username: 'John Doe',
    email: 'lol',
    role: EUserRole.User,
    isActive: true,
};

export default function ApplicationLayout({ children }: PropsWithChildren) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <React.Fragment>
            <Header>
                <Header.Actions>
                    <Header.Actions.Navigation onClick={handleDrawer} />
                </Header.Actions>
                <Header.Location />
                <Header.Actions>
                    <Header.Actions.User {...fakeUser} />
                    <Header.Actions.Theme />
                    <Header.Actions.Settings />
                </Header.Actions>
            </Header>
            <Drawer
                open={drawerOpen}
                onClose={handleDrawer}
                renderHeader={() => <SdLogo />}
                direction="left"
            />
            {children}
        </React.Fragment>
    );
}
