import { type PropsWithChildren } from 'react';
import ApplicationLayout from './ApplicationLayout';

export default function LoggedLayout({ children }: Readonly<PropsWithChildren>) {
    return <ApplicationLayout>{children}</ApplicationLayout>;
}
