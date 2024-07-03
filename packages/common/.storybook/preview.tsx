import { Preview, StoryFn } from '@storybook/react';
import './fontsources';
import '../src/stylesheets/default.font.css';
import '../src/stylesheets/default.light.css';
import '../src/stylesheets/default.dark.css';
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
        darkMode: {
            dark: { class: 'dark' },
            light: { class: 'light' },
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
