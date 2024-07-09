import type { Metadata } from 'next';
import './fontsources';
import '@safaridigital/common/style.css';
import '@safaridigital/common/default.font.css';
import '@safaridigital/common/default.spacing.css';
import '@safaridigital/common/default.light.css';
import '@safaridigital/common/default.dark.css';
import './styles.globals.css';
import React from 'react';
import { Providers } from '@/app/providers';
import { APP_DOMAIN, APP_NAME } from '@/config';

export const metadata: Metadata = {
    title: APP_DOMAIN,
    description: `${APP_DOMAIN} ${APP_NAME}`,
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
