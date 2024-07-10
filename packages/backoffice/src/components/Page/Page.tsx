import './styles.css';
import type { PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {
    return <main className="Page">{children}</main>;
}
