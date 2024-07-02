import type { Meta, StoryObj } from '@storybook/react';
import component from './SdButton';

const meta: Meta = { title: 'Button/SdButton', component };
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
        selected: {
            control: { type: 'boolean' },
        },
        fullWidth: {
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
        selected: false,
        loading: false,
        fullWidth: false,
    },
};
