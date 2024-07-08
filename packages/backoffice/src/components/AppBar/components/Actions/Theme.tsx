'use client';

import { SdButton, SdIcon, useTheme } from '@safaridigital/common';

export default function ThemeAction() {
    const { theme, switchTheme } = useTheme();

    return (
        <SdButton variant="icon" value={theme} onClick={switchTheme}>
            {theme === 'dark' ? (
                <SdIcon.ThemeMoonIcon variant="filled" />
            ) : (
                <SdIcon.ThemeSunIcon variant="filled" />
            )}
        </SdButton>
    );
}
