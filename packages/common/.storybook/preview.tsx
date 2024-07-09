import { Preview, StoryFn } from '@storybook/react';
import './fontsources';
import '../stylesheets/default.spacing.css';
import '../stylesheets/default.font.css';
import '../stylesheets/default.light.css';
import '../stylesheets/default.dark.css';
import React from 'react';

const Decorator = (Story: StoryFn) => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
                display: 'flex',
                padding: '2rem',
            }}>
            <Story />
        </div>
    );
};

const preview: Preview = {
    decorators: [Decorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                order: ['*'],
            },
        },
    },
};

export default preview;
