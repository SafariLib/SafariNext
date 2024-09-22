import type { PropsWithChildren } from 'react';
import './Text.styles.css';

interface LinkProps extends PropsWithChildren {
    href: string;
}

export default function Link(props: LinkProps) {
    return <a {...props} className="sdui-text sdui-link" />;
}
