'use client';

import Edit from './components/Edit/Edit';
import Toolbar from './components/Toolbar/Toolbar';
import Render from './components/Render/Render';
import Tree from './components/Tree/Tree';
import { type Config, type Data, Puck } from '@measured/puck';

import './styles.css';
import { useProps } from '@safaridigital/common';
import { useMemo } from 'react';
import { defaultPuckConfig, defaultPuckData } from '@/components/Editor/utils/default';

export interface EditorProps {
    data?: Data;
    config?: Config;
    onPublish?: () => void;
    disabled?: boolean;
}

export default function Editor({ disabled, ...props }: EditorProps) {
    const { className, ...resolvedProps } = useProps({ disabled }, 'Editor');
    return (
        <Wrapper {...props}>
            <div className={className}>
                <Toolbar {...resolvedProps} />
                <Render {...resolvedProps} />
                <Tree {...resolvedProps} />
                <Edit {...resolvedProps} />
            </div>
        </Wrapper>
    );
}

function Wrapper(props: EditorProps) {
    const resolvedProps = useMemo(
        () => ({
            data: props.disabled ? defaultPuckData : props.data || defaultPuckData,
            config: props.disabled ? defaultPuckConfig : props.config || defaultPuckConfig,
        }),
        [props.data, props.config, props.disabled],
    );

    return <Puck {...props} {...resolvedProps} />;
}
