import './Box.styles.css';
import { ClassName } from '../../utils';
import React from 'react';

type Size = null | 0 | 1 | 2 | 3 | 4 | 5;

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    p?: Size;
    pt?: Size;
    pb?: Size;
    m?: Size;
    mt?: Size;
    mb?: Size;
    gap?: Size;
    flex?: Size;
    container?: boolean;
    resizable?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    wrap?: boolean;
    direction?: 'row' | 'column';
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
}

export default function Box({
    container = false,
    resizable = false,
    fullWidth = false,
    fullHeight = false,
    wrap = false,
    p = null,
    pt = null,
    pb = null,
    m = null,
    mt = null,
    mb = null,
    gap = null,
    flex = null,
    direction = 'column',
    align = 'start',
    justify = 'start',
    className,
    ...props
}: BoxProps) {
    return (
        <div
            className={ClassName.resolveProps('Sdui-Box', {
                className,
                container,
                resizable,
                fullWidth,
                fullHeight,
                wrap,
                p,
                pt,
                pb,
                m,
                mt,
                mb,
                gap,
                flex,
                direction,
                align,
                justify,
                ...props,
            })}
            {...props}
        />
    );
}
