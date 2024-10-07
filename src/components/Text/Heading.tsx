import type { PropsWithChildren } from 'react';
import React from 'react';
import './Text.styles.css';
import { ClassName } from '../../utils';

export interface HeadingProps extends PropsWithChildren {
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default function Heading({ children, variant = 'h1' }: HeadingProps) {
    return React.createElement(
        variant,
        {
            className: `Sdui-Text ${ClassName.resolveProps('Sdui-Heading', { variant })}`,
        },
        children,
    );
}
