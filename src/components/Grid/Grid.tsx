import React from 'react';
import { ClassName } from '../../utils';
import './Grid.styles.css';

type Size = null | 0 | 1 | 2 | 3 | 4 | 5;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: Size;
}

export default function Grid({ gap = null, className, ...props }: GridProps) {
    return (
        <div
            className={ClassName.resolveProps('Sdui-Grid', {
                className,
                gap,
            })}
            {...props}
        />
    );
}
