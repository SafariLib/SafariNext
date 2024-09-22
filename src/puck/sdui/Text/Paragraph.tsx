import type { PropsWithChildren } from 'react';
import './Text.styles.css';

interface TextProps extends PropsWithChildren {
    align?: 'left' | 'center' | 'right';
}

export default function Paragraph({ align, ...props }: TextProps) {
    const className = `sdui-text${align ? ` sdui-text-align-${align}` : ''}`;
    return <p {...props} className={className} />;
}
