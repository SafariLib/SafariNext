import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { API_URL, APP_DOMAIN, APP_NAME, validateEnv } from '@/config';
import { neoneon } from '@/assets/fonts';

export const metadata: Metadata = {
    title: APP_DOMAIN,
    description: `${APP_DOMAIN} ${APP_NAME}`,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    validateEnv();

    return (
        <html lang="en">
            <head>
                <link rel="icon" href={`${API_URL}safaridigital.fr.favicon.ico`} sizes="any" />
                {[
                    'safaridigital.fr.theme.dark.css',
                    'safaridigital.fr.theme.light.css',
                    // 'safaridigital.fr.theme.sdui.css',
                ].map((sheet: string) => (
                    <link key={sheet} rel="stylesheet" href={`${API_URL}${sheet}`} />
                ))}
            </head>
            <body className={neoneon.variable}>{children}</body>
        </html>
    );
}
