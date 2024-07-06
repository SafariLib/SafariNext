import { type ReactElement } from 'react';

export const repeatElement = (length: number, element: ReactElement) =>
    Array(length)
        .fill(null)
        .map(() => element);

export const convertToHtmlAttributes = (props: Record<string, unknown>) => {
    for (const key in props) if (typeof props[key] === 'boolean') props[key] = props[key].toString();
    return props;
};