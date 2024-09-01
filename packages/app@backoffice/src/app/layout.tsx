import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { APP_DOMAIN, APP_NAME } from '@config';
import { Page } from '@components';
import { Providers } from './providers';
import '@digital/ui/default.dark.css';
import '@digital/ui/default.font.css';
import '@digital/ui/default.light.css';
import '@digital/ui/default.spacing.css';
import '@digital/ui/overrides.puck.css';
import '@digital/ui/style.css';
import '@digital/ui/website.dark.css';
import '@digital/ui/website.light.css';
import '@measured/puck/puck.css';
import './fontsources';
import './styles.globals.css';

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
