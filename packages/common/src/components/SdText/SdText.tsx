'use client';

import { useProps } from '../../utils/element';
import React, { type PropsWithChildren } from 'react';
import './styles.css';

export interface SdTextProps extends PropsWithChildren {
    bold?: boolean;
    italic?: boolean;
    variant?: 'h1' | 'h2' | 'h3' | 'text' | 'caption';
}

export default function SdText(props: SdTextProps) {
    const resolvedProps = useProps(props, 'SdText');
    if (props.variant === 'text' || props.variant === undefined) return <p {...resolvedProps} />;
    if (props.variant === 'caption') return <span {...resolvedProps} />;
    return React.createElement(props.variant, props, props.children);
}
