import type { PropsWithChildren } from 'react';
import { FlexContainer } from '../Container/Container';
import './Hero.styles.css';

interface HeroProps extends PropsWithChildren {
    variant?: 'primary' | 'secondary';
}

export default function Hero({ children, variant = 'primary' }: HeroProps) {
    return (
        <div className={`sdui-hero sdui-hero-${variant}`}>
            <FlexContainer fullWidth>{children}</FlexContainer>
        </div>
    );
}
