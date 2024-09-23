import type { PropsWithChildren } from 'react';
import { FlexContainer } from '../Container/Container';
import './Hero.styles.css';

interface HeroProps extends PropsWithChildren {
    id?: string;
    variant?: 'primary' | 'secondary';
}

export default function Hero({ children, variant = 'primary', id }: HeroProps) {
    return (
        <div className={`sdui-hero sdui-hero-${variant}`} id={id}>
            <FlexContainer fullWidth>{children}</FlexContainer>
        </div>
    );
}
