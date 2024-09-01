'use client';

import { SdButton, SdIcon, useProps } from '@digital/ui';
import React from 'react';
import useToolbar from './useToolbar';
import Blocks from '../Blocks/Blocks';
import Tree from '../Tree/Tree';
import './styles.css';

interface ToolbarProps {
    disabled?: boolean;
}

type ToolOptions = keyof typeof toolbarOptions;

const toolbarOptions = {
    Components: {
        icon: SdIcon.BoxIcon,
        render: <Blocks />,
    },
    Layers: {
        icon: SdIcon.LayerIcon,
        render: <Tree />,
    },
};

export default function Toolbar(props: ToolbarProps) {
    const resolvedProps = useProps(props, 'Editor-toolbar');
    const { mapTools, getTool } = useToolbar(toolbarOptions);
    const [activeTool, setActiveTool] = React.useState<ToolOptions | null>(null);
    const handleToolClick = (key: ToolOptions) => setActiveTool(activeTool === key ? null : key);

    return (
        <React.Fragment>
            <div {...resolvedProps}>
                {mapTools((key, tool) => (
                    <SdButton
                        variant="icon"
                        key={key}
                        selected={key === activeTool}
                        onClick={() => handleToolClick(key)}>
                        {React.createElement(tool.icon, { variant: 'filled', size: 'medium' })}
                    </SdButton>
                ))}
            </div>
            {activeTool && <div className="Editor-tool">{getTool(activeTool).render}</div>}
        </React.Fragment>
    );
}
