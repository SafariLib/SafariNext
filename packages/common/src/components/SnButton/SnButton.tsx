'use client';

import React from 'react';
import { classExtender } from '../../utils/classExtender';

export interface SnButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: SnButtonVariant | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
    fullWidth?: boolean | undefined;
}

export type SnButtonVariant = 'primary' | 'secondary' | 'text';

export default function SnButton({ children, ...props }: SnButtonProps): JSX.Element {
    return (
        <button {...props} className={classExtender('SnButton', props.className)}>
            {children}
        </button>
    );
}
