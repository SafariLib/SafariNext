import { type Config } from '@measured/puck';
import { SdText } from '../components/SdText';
import React from 'react';
import { Page } from '../blocks';

export const viewConfig: Config = {
    categories: {
        blocks: {
            title: 'Blocks',
            components: ['Page'],
        },
        typography: {
            title: 'Typography',
            components: ['Text'],
        },
    },
    components: {
        Page: {
            render: ({ puck: { renderDropZone } }) => <Page>{renderDropZone({ zone: 'page-content' })}</Page>,
        },
        Text: {
            fields: {
                content: {
                    type: 'textarea',
                    label: 'Content',
                },
            },
            render: ({ content }) => <SdText>{content}</SdText>,
        },
    },
};

