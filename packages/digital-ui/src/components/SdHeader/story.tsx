import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdHeader, { type SdHeaderProps } from './SdHeader';
import { Block, Page } from '../storybook';

const meta: Meta<SdHeaderProps> = {
    title: 'Layout/SdHeader',
    component: SdHeader,
    decorators: _ => {
        return (
            <Page>
                <SdHeader>
                    <Block bordered>Content</Block>
                    <Block bordered>Content</Block>
                    <Block bordered>Content</Block>
                </SdHeader>
            </Page>
        );
    },
    argTypes: {},
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {};
