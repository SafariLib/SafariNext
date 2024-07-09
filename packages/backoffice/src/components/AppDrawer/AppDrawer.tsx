'use client';

import { SdButton, SdIcon, SdLogo } from '@safaridigital/common';
import './styles.css';
import type { PropsWithChildren } from 'react';

interface AppDrawerProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
}

export default function AppDrawer({ children, open, onClose }: AppDrawerProps) {
    return (
        <dialog className="AppDrawer" open={open}>
            <div className="AppDrawer-head">
                <SdLogo />
                <SdButton variant="icon" onClick={onClose}>
                    <SdIcon.CloseIcon />
                </SdButton>
            </div>
            <div className="AppDrawer-content">{children}</div>
        </dialog>
    );
}
