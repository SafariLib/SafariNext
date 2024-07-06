import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SdIcon as component } from './index';
import type { SdIconProps } from './types';

const meta: Meta<SdIconProps> = {
    title: 'Icons/SdIcon',
    decorators: (_, { args }) =>
        args.fullWidth ? (
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid red',
                    resize: 'both',
                    overflow: 'hidden',
                }}>
                <component.AccountIcon {...args} />
            </div>
        ) : (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {Object.values(component).map((Icon, i) => (
                    <Icon key={i} {...args} />
                ))}
            </div>
        ),
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Small: Story = {
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
        size: 'small',
        direction: 'up',
        animation: false,
        fullWidth: false,
    },
};

export const Medium: Story = {
    args: {
        ...Small.args,
        size: 'medium',
    },
    argTypes: Small.argTypes,
};

export const Large: Story = {
    args: {
        ...Small.args,
        size: 'large',
    },
    argTypes: Small.argTypes,
};

export const FullWidth: Story = {
    args: {
        ...Small.args,
        fullWidth: true,
    },
    argTypes: Small.argTypes,
};
