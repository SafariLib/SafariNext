import type { PropsWithChildren } from 'react';
import './Text.styles.css';

interface HeadingProps extends PropsWithChildren {
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default function Heading({ children, variant = 'h1' }: HeadingProps) {
    return <h1 className={`sdui-text sdui-${variant}`}>{children}</h1>;
}
