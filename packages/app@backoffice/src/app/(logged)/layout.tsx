import { type PropsWithChildren } from 'react';
import { Layout } from '@components';

export default function LoggedLayout({ children }: Readonly<PropsWithChildren>) {
    return <Layout>{children}</Layout>;
}
