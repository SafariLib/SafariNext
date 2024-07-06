import type { PropsWithChildren } from 'react';
import React from 'react';
import { convertToHtmlAttributes } from './element';

export default function usePropsMapper<T extends (Partial<unknown> & React.Attributes) & PropsWithChildren>(
    { children: childFromProps, ...props }: T,
    children?: React.ReactNode | undefined,
) {
    return React.useMemo(
        () =>
            React.Children.map(children ?? childFromProps, c =>
                React.isValidElement(c) ? React.cloneElement(c, { ...convertToHtmlAttributes(props) }) : c,
            ),
        [props, children, childFromProps],
    );
}

