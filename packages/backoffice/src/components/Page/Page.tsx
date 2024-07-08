import './styles.css';
import type { PropsWithChildren } from 'react';
import { AppBar } from '../AppBar';
import { EUserRole } from '@/models';

const fakeUser = {
    id: '1',
    username: 'John Doe',
    email: 'lol',
    role: EUserRole.User,
    isActive: true,
};

export interface PageProps extends PropsWithChildren {
    renderAppBar?: boolean;
}

export default function Page({ children, renderAppBar = true }: PageProps) {
    return (
        <main className="Page">
            {renderAppBar && (
                <AppBar>
                    <AppBar.Navigation />
                    <AppBar.Location />
                    <AppBar.Actions>
                        <AppBar.Actions.User {...fakeUser} />
                        <AppBar.Actions.Theme />
                        <AppBar.Actions.Settings />
                    </AppBar.Actions>
                </AppBar>
            )}
            {children}
        </main>
    );
}
