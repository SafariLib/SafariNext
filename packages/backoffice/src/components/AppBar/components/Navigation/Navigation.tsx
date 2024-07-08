'use client';

import { SdButton, SdIcon, SdLogo } from '@safaridigital/common';
import './styles.css';

export default function Navigation() {
    return (
        <div className="AppBar-navigation">
            <SdButton variant="icon">
                <SdIcon.MenuIcon />
            </SdButton>
            <SdLogo />
        </div>
    );
}
