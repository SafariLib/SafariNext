import type { Metadata } from 'next';
import React from 'react';
import { APP_DOMAIN } from '@/config';

export const metadata: Metadata = {
    title: `${APP_DOMAIN}/Views`,
};

export default function ViewsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
