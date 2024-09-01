import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';
import { APP_DOMAIN } from '@config';

export const metadata: Metadata = {
    title: `${APP_DOMAIN}/Views`,
};

export default function ViewsLayout({ children }: Readonly<PropsWithChildren>) {
    return children;
}
