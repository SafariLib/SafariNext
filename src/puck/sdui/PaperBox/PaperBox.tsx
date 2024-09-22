import type { PropsWithChildren } from 'react';
import React from 'react';
import { FlexContainer } from '../Container/Container';
import Paragraph from '../Text/Paragraph';
import Heading from '../Text/Heading';
import './PaperBox.styles.css';

interface PaperBoxProps extends PropsWithChildren {
    variant?: 'primary' | 'secondary';
    title: string;
    icon: React.ReactNode;
}

export default function PaperBox({ children, title, icon, variant = 'primary' }: PaperBoxProps) {
    const variantClass = `sdui-paperbox sdui-paperbox-${variant}`;

    return (
        <div className={variantClass}>
            <FlexContainer fullWidth align="start" spacing="small">
                <FlexContainer align="center" justify="center" spacing="small" direction="row">
                    {icon}
                    <Heading variant="h3">{title}</Heading>
                </FlexContainer>
                <Paragraph>{children}</Paragraph>
            </FlexContainer>
        </div>
    );
}
