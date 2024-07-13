import type { Config } from '@measured/puck';
import { SdButton } from '../components/SdButton';
import { SdLogo } from '../components/SdLogo';
import React from 'react';

export const viewConfig: Config = {
    components: {
        Button: {
            fields: {
                children: {
                    type: 'text',
                    label: 'Content',
                },
            },
            render: props => <SdButton {...props} />,
        },
        Logo: {
            render: () => <SdLogo />,
        },
    },
};
