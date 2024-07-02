import { type ReactElement } from 'react';

export const repeatElement = (length: number, element: ReactElement) =>
    Array(length)
        .fill(null)
        .map(() => element);
