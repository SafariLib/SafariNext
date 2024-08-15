'use client';

import { useProps } from '@digital/ui';
import { Puck } from '@measured/puck';
import './styles.css';

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
