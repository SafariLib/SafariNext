'use client';

import { SdButton, SdIcon, useTheme } from '@safaridigital/common';
import React from 'react';

export default function SettingsMenu() {
    const { theme, switchTheme } = useTheme();

    return (
        <React.Fragment>
            <SdButton variant="icon" value={theme} onClick={switchTheme}>
                {theme === 'dark' ? (
                    <SdIcon.ThemeMoonIcon variant="filled" />
                ) : (
                    <SdIcon.ThemeSunIcon variant="filled" />
                )}
            </SdButton>
            <SdButton variant="icon">
                <SdIcon.GearIcon variant="filled" />
            </SdButton>
        </React.Fragment>
    );
}
