'use client';

import { useProps } from '@safaridigital/common';
import './styles.css';
import type { PropsWithChildren } from 'react';
import React from 'react';
import DrawerBackground from './components/DrawerBackground/DrawerBackground';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';

interface DrawerProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    renderHeader?: () => React.ReactNode;
    direction?: 'left' | 'right';
}

export default function Drawer({ children, direction = 'left', ...props }: DrawerProps) {
    const { className, renderHeader, ...resolvedProps } = useProps({ direction, ...props }, 'Drawer');

    return (
        <React.Fragment>
            <DrawerBackground {...resolvedProps} />
            <dialog {...resolvedProps} className={className}>
                <DrawerHeader {...resolvedProps}>{renderHeader && renderHeader()}</DrawerHeader>
                <div className="Drawer-content">{children}</div>
            </dialog>
        </React.Fragment>
    );
}
