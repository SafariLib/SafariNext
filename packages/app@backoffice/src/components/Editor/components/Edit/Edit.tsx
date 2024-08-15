'use client';

import { useProps } from '@digital/ui';
import { Puck } from '@measured/puck';
import './styles.css';

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
