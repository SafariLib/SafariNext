'use client';

import { SdButton, SdIcon, useTheme } from '@digital/ui';

export default function Theme() {
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
