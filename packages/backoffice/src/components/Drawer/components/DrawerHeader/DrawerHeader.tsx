'use client';

import { SdButton, SdIcon, useProps } from '@safaridigital/common';
import './styles.css';
import type { PropsWithChildren } from 'react';
import React from 'react';

interface DrawerBackgroundProps extends PropsWithChildren {
    onClose: () => void;
    position?: 'left' | 'right';
}

export default function DrawerHeader({ children, ...props }: DrawerBackgroundProps) {
    const { onClose, ...resolvedProps } = useProps(props, 'Drawer-header');

    return (
        <div {...resolvedProps}>
            {children}
            <SdButton variant="icon" onClick={onClose}>
                <SdIcon.CloseIcon />
            </SdButton>
        </div>
    );
}
