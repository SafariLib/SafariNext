'use client';

import { SdButton, SdIcon, SdLogo } from '@safaridigital/common';

interface NavigationProps {
    onClick: () => void;
}

export default function Navigation(props: NavigationProps) {
    return (
        <div className="AppBar-actions-navigation">
            <SdButton variant="icon" {...props}>
                <SdIcon.MenuIcon />
            </SdButton>
            <SdLogo />
        </div>
    );
}
