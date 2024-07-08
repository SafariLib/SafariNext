import type { Metadata } from 'next';
import './fontsources';
import '@safaridigital/common/style.css';
import '@safaridigital/common/default.font.css';
import '@safaridigital/common/default.light.css';
import '@safaridigital/common/default.dark.css';
import './styles.globals.css';
import React from 'react';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
    title: 'Backoffice - safaridigital.fr',
    description: 'Safaridigital.fr backoffice',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
