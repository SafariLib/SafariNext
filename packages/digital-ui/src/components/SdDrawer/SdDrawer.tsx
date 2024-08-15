'use client';

import { useProps } from '../../utils/element';
import DrawerBackground from './components/DrawerBackground/DrawerBackground';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';
import React, { type PropsWithChildren } from 'react';
import './styles.css';

export interface SdDrawerProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    renderHeader?: () => React.ReactNode;
    direction?: 'left' | 'right';
}

export default function SdDrawer({ children, direction = 'left', ...props }: SdDrawerProps) {
    const { className, renderHeader, ...resolvedProps } = useProps({ direction, ...props }, 'SdDrawer');

    return (
        <React.Fragment>
            <DrawerBackground {...resolvedProps} />
            <dialog {...resolvedProps} className={className}>
                <DrawerHeader {...resolvedProps}>{renderHeader && renderHeader()}</DrawerHeader>
                <div className="SdDrawer-content">{children}</div>
            </dialog>
        </React.Fragment>
    );
}
