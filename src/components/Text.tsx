import type { PropsWithChildren } from 'react';
import './Text.styles.css';

export default Object.assign(Text, {
    Heading,
    Link,
});

function Text(props: PropsWithChildren) {
    return <p className="SafariDigital-Text" {...props} />;
}

function Heading(props: PropsWithChildren) {
    return <h2 className="SafariDigital-Text SafariDigital-H2" {...props} />;
}

function Link(props: PropsWithChildren & { href: string }) {
    return <a className="SafariDigital-Text SafariDigital-Link" {...props} />;
}
