import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdDrawer, { type SdDrawerProps } from './SdDrawer';
import { SdLogo } from '../SdLogo';

const meta: Meta<SdDrawerProps> = {
    title: 'Layout/SdDrawer',
    component: SdDrawer,
    decorators: _ => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [title, setTitle] = React.useState(true);
        const handleTitle = () => setTitle(!title);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [direction, setDirection] = React.useState('left');
        const handleDirection = () => setDirection(direction === 'left' ? 'right' : 'left');

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = React.useState(true);
        const onClose = () => setOpen(!open);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            !open ? setTimeout(() => setOpen(true), 2000) : null;
        }, [open]);

        return (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100vh',
                    width: '100vw',
                }}>
                <SdDrawer
                    direction={direction as 'left' | 'right'}
                    open={open}
                    onClose={onClose}
                    renderHeader={() => (title ? <SdLogo /> : <div>Text title</div>)}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem 0',
                            gap: '1rem',
                            height: '100%',
                            width: '100%',
                        }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Change direction: <button onClick={handleDirection}>{direction}</button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Change title: <button onClick={handleTitle}>{title ? 'Logo' : 'Text'}</button>
                        </div>
                    </div>
                </SdDrawer>
            </div>
        );
    },
    argTypes: {},
};
type Story = StoryObj<typeof meta>;
export default meta;

export const ActionsTest: Story = {
    args: {
        direction: 'left',
        open: true,
    },
};
