'use client';

import { SdButton } from '../../../SdButton';
import { SdIcon } from '../../../SdIcon';
import { useProps } from '../../../../utils/element';

import type { PropsWithChildren } from 'react';
import React from 'react';
import './styles.css';

interface DrawerBackgroundProps extends PropsWithChildren {
    onClose: () => void;
    position?: 'left' | 'right';
}

export default function DrawerHeader({ children, ...props }: DrawerBackgroundProps) {
    const { onClose, ...resolvedProps } = useProps(props, 'SdDrawer-header');

    return (
        <div {...resolvedProps}>
            <div className="SdDrawer-header-content">{children}</div>
            <div className="SdDrawer-header-close">
                <SdButton variant="icon" onClick={onClose}>
                    <SdIcon.CloseIcon />
                </SdButton>
            </div>
        </div>
    );
}
