import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="favicon.ico" sizes="any" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={process.env.META_TITLE} />
                <meta property="og:description" content={process.env.META_DESC} />
                <meta property="og:url" content={process.env.META_URL} />
            </head>
            <body>{children}</body>
        </html>
    );
}
