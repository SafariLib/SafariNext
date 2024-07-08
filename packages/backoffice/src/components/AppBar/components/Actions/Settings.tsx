'use client';

import { SdButton, SdIcon } from '@safaridigital/common';

export interface SettingsActionProps {
    onClick?: () => void;
    selected?: boolean;
}

export default function SettingsAction(props: SettingsActionProps) {
    return (
        <SdButton variant="icon" {...props}>
            <SdIcon.GearIcon variant="filled" />
        </SdButton>
    );
}
