'use client';

import { Puck } from '@measured/puck';
import './styles.css';
import { useProps } from '@safaridigital/common';

interface TreeProps {
    disabled?: boolean;
}

export default function Tree(props: TreeProps) {
    const resolvedProps = useProps(props, 'Editor-tree');
    return (
        <div {...resolvedProps}>
            <Puck.Outline />
        </div>
    );
}
