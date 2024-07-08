import './styles.css';
import type { PropsWithChildren } from 'react';
import { AppBar } from '../AppBar';

export interface PageProps extends PropsWithChildren {
    renderAppBar?: boolean;
}

export default function Page({ children, renderAppBar = true }: PageProps) {
    return (
        <main className="Page">
            {renderAppBar && (
                <AppBar>
                    <AppBar.Title />
                    <AppBar.Actions />
                </AppBar>
            )}
            {children}
        </main>
    );
}
