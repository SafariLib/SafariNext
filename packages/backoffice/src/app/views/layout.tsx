import type { Metadata } from 'next';
import type React from 'react';
import { APP_DOMAIN } from '@/config';

export const metadata: Metadata = {
    title: `${APP_DOMAIN}/Views`,
};

export default function ViewsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
