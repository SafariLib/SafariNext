'use client';

import { type Config, type Data, Puck, usePuck } from '@measured/puck';

import { useProps } from '@digital/ui';
import type { PropsWithChildren} from 'react';
import { useEffect, useMemo } from 'react';
import Edit from './components/Edit/Edit';
import Render from './components/Render/Render';
import Toolbar from './components/Toolbar/Toolbar';
import './styles.css';
import { defaultPuckConfig, defaultPuckData } from './utils/default';

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
            <Handler>
                <div className={className}>
                    <Toolbar {...resolvedProps} />
                    <Render {...resolvedProps} />
                    <Edit {...resolvedProps} />
                </div>
            </Handler>
        </Wrapper>
    );
}

function Handler({ children }: PropsWithChildren) {
    const { appState } = usePuck();
    useEffect(() => console.log(appState), [appState]);
    return children;
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
