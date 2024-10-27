import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { GoogleAnalytics } from '../analytics';
import { APP_DOMAIN, APP_NAME, validateEnv } from '../config';
import { neoneon } from './fonts';

export const metadata: Metadata = {
    title: APP_DOMAIN,
    description: `${APP_DOMAIN} ${APP_NAME}`,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    validateEnv();

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="safaridigital.fr.favicon.ico" sizes="any" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="safaridigital.fr" />
                <meta property="og:description" content="Votre boussole dans la jungle du numérique." />
                <meta property="og:url" content="https://safaridigital.fr/" />
                <meta property="og:image" content="https://safaridigital.fr/opengraph.jpg" />
            </head>
            <body className={neoneon.variable}>{children}</body>
            <GoogleAnalytics googleAnalyticsId="G-S3ZDR6BPY2" />
        </html>
    );
}
