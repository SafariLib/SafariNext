'use client';

import './styles.css';
import React from 'react';
import { repeatElement, useProps } from '../../utils/element';

export interface SdLoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    color?: 'primary' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large';
}

export default function SdLoader({ color = 'text', size = 'medium', ...props }: SdLoaderProps) {
    const resolved = useProps({ ...props, color, size }, 'SdLoader');

    return <div {...resolved}>{repeatElement(4, <div />)}</div>;
}
