import { type PropsWithChildren } from 'react';
import { AppLayout } from '@components';

export default function LoggedLayout({ children }: Readonly<PropsWithChildren>) {
    return <AppLayout>{children}</AppLayout>;
}
