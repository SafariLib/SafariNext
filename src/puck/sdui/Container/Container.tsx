import './Container.styles.css';
import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
    direction?: 'row' | 'column';
    justify?: 'start' | 'end' | 'center' | 'spaced';
    align?: 'start' | 'end' | 'center';
    spacing?: 'small' | 'medium' | 'large';
    className?: string;
    fullWidth?: boolean;
}

export function Container(props: PropsWithChildren) {
    return <div className="sdui-container">{props.children}</div>;
}

export function FlexContainer({
    children,
    className,
    spacing,
    direction = 'column',
    justify,
    align,
    fullWidth,
}: ContainerProps) {
    const dirClass = `sdui-container-flex-${direction}`;
    const jusClass = justify ? ` sdui-container-justify-${justify}` : '';
    const alClass = align ? ` sdui-container-align-${align}` : '';
    const spacingClass = spacing ? ` sdui-container-spacing-${spacing}` : '';
    const propsClass = className ? ` ${className}` : '';
    const fullWidthClass = fullWidth ? ' sdui-container' : '';

    return (
        <div
            className={`sdui-container-flex${fullWidthClass} ${dirClass}${spacingClass}${jusClass}${alClass}${propsClass}`}>
            {children}
        </div>
    );
}
