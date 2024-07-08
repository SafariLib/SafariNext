'use client';

import './styles.css';
import React from 'react';
import { useProps } from '../../utils/element';
import SdLoader from '../SdLoader/SdLoader';

export interface SdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: SnButtonVariant | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    fullwidth?: boolean | undefined;
    href?: string | undefined;
}

export type SnButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';

export default function SdButton({ children, variant = 'primary', ...props }: SdButtonProps) {
    const resolved = useProps({ ...props, variant }, 'SdButton');

    return props.href ? (
        <a {...resolved}>
            <SdButtonContent {...resolved}>{children}</SdButtonContent>
        </a>
    ) : (
        <button {...resolved}>
            <SdButtonContent {...resolved}>{children}</SdButtonContent>
        </button>
    );
}

function SdButtonContent({ children, loading, disabled }: SdButtonProps) {
    return (
        <React.Fragment>
            {loading && <SdLoader color={disabled ? 'disabled' : 'text'} size="small" />}
            <span className="SdButton-content">{children}</span>
        </React.Fragment>
    );
}