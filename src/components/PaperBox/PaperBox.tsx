import React, { type PropsWithChildren } from 'react';
import { Heading, Paragraph } from '../Text';
import { Box } from '../Box';
import './PaperBox.styles.css';
import { ClassName } from '../../utils';

interface PaperBoxProps extends PropsWithChildren {
    variant?: 'primary' | 'secondary';
    title: string;
    id?: string;
    className?: string;
    icon: React.ReactNode;
}

export default function PaperBox({
    children,
    className,
    id,
    title,
    icon,
    variant = 'primary',
}: PaperBoxProps) {
    return (
        <div
            id={id}
            className={ClassName.resolveProps('Sdui-PaperBox', {
                className,
                variant,
            })}>
            <Box align="start" gap={1} fullWidth>
                <Box align="center" justify="center" gap={1} direction="row">
                    {icon}
                    <Heading variant="h3">{title}</Heading>
                </Box>
                <Paragraph>{children}</Paragraph>
            </Box>
        </div>
    );
}
