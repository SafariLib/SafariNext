'use client';

import { useProps } from '@safaridigital/common';
import './styles.css';
import { Puck } from '@measured/puck';

interface EditProps {
    disabled?: boolean;
}

export default function Edit(props: EditProps) {
    const resolvedProps = useProps(props, 'Editor-edit');
    return (
        <div {...resolvedProps}>
            <Puck.Fields />
        </div>
    );
}
