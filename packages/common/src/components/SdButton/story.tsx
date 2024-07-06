import type { Meta, StoryObj } from '@storybook/react';
import component from './SdButton';

const meta: Meta = { title: 'Inputs/SdButton', component };
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        fullwidth: {
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'text'],
        },
    },
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
        loading: false,
        fullwidth: false,
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        variant: 'secondary',
        children: 'Secondary Button',
    },
    argTypes: Primary.argTypes,
};

export const Text: Story = {
    args: {
        ...Primary.args,
        variant: 'text',
        children: 'Text Button',
    },
    argTypes: Primary.argTypes,
};
