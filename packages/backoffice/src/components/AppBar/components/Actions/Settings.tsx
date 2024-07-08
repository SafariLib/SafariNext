'use client';

import { SdButton, SdIcon } from '@safaridigital/common';

export interface SettingsProps {
    onClick?: () => void;
    selected?: boolean;
}

export default function Settings(props: SettingsProps) {
    return (
        <SdButton variant="icon" {...props}>
            <SdIcon.GearIcon variant="filled" />
        </SdButton>
    );
}
