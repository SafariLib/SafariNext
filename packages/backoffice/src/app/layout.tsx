import '@measured/puck/puck.css';
import '@safaridigital/common/style.css';
import '@safaridigital/common/default.font.css';
import '@safaridigital/common/default.spacing.css';
import '@safaridigital/common/default.light.css';
import '@safaridigital/common/default.dark.css';
import '@safaridigital/common/overrides.puck.css';
import '@safaridigital/common/website.light.css';
import '@safaridigital/common/website.dark.css';
import './fontsources';
import './styles.globals.css';
import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { Providers } from './providers';
import { APP_DOMAIN, APP_NAME } from '@/config';
import { Page } from '@/components';

export const metadata: Metadata = {
    title: APP_DOMAIN,
    description: `${APP_DOMAIN} ${APP_NAME}`,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body>
                <Page>
                    <Providers>{children}</Providers>
                </Page>
            </body>
        </html>
    );
}
