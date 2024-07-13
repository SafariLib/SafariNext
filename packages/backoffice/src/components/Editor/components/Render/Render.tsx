'use client';

import { useProps } from '@safaridigital/common';
import './styles.css';
import { Puck } from '@measured/puck';

interface RenderProps {
    disabled?: boolean;
}

export default function Render(props: RenderProps) {
    const resolvedProps = useProps(props, 'Editor-render');
    return (
        <div {...resolvedProps}>
            <Puck.Preview />
        </div>
    );
}
