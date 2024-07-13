'use client';

import { SdButton, SdIcon, useProps } from '@safaridigital/common';
import './styles.css';

interface ToolbarProps {
    disabled?: boolean;
}

export default function Toolbar(props: ToolbarProps) {
    const resolvedProps = useProps(props, 'Editor-toolbar');
    return (
        <div {...resolvedProps}>
            <SdButton variant="icon">
                <SdIcon.BoxIcon variant="filled" size="medium" />
            </SdButton>
        </div>
    );
}
