import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SdIcon as component } from './index';
import type { SdIconProps } from './types';

const meta: Meta<SdIconProps> = {
    title: 'Icons/SdIcon',
    decorators: (_, { args }) => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {Object.values(component).map((Icon, i) => (
                <Icon key={i} {...args} />
            ))}
        </div>
    ),
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['filled', 'outlined'],
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'disabled', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        direction: {
            control: { type: 'select' },
            options: ['up', 'down', 'left', 'right'],
        },
        animation: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
    args: {
        color: 'text',
        variant: 'filled',
        size: 'medium',
        direction: 'up',
        animation: false,
        fullWidth: false,
    },
};
