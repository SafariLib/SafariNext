'use client';

import React from 'react';
import { useProps } from '../../utils/element';

export interface SdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: SnButtonVariant | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
}

export type SnButtonVariant = 'primary' | 'secondary' | 'text';

export default function SdButton({ children, ...props }: SdButtonProps) {
    const resolved = useProps(props, 'SdButton');

    return props.href ? <a {...resolved}>{children}</a> : <button {...resolved}>{children}</button>;
}
