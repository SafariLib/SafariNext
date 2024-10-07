import type { PropsWithChildren } from 'react';
import { ClassName } from '../../utils';
import { Box } from '../Box';
import './Hero.styles.css';

export interface HeroProps extends PropsWithChildren {
    id?: string;
    variant?: 'primary' | 'secondary';
}

export default function Hero({ children, variant = 'primary', id }: HeroProps) {
    return (
        <Box className={ClassName.resolveProps('Sdui-Hero', { variant })} id={id}>
            <Box container>{children}</Box>
        </Box>
    );
}
