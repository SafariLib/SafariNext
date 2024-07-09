import './styles.css';
import type { PropsWithChildren } from 'react';
import { AppLayout } from '@components/AppLayout';

export interface PageProps extends PropsWithChildren {
    renderAppLayout?: boolean;
}

export default function Page({ children, renderAppLayout = true }: PageProps) {
    return <main className="Page">{renderAppLayout ? <AppLayout>{children}</AppLayout> : children}</main>;
}
