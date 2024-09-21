import type { PropsWithChildren } from 'react';
import './Page.styles.css';

export default function Page(props: PropsWithChildren) {
    return <main className="SafariDigital-Page" {...props} />;
}
