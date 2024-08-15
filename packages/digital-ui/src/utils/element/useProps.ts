import React from 'react';
import { resolveClass } from '../classNames';

export default function useProps<T>(props: T, elementName?: string) {
    return React.useMemo(
        () => ({
            className: resolveClass(elementName ?? 'SnComponent', props as Record<string, any>),
            ...props,
        }),
        [elementName, props],
    );
}
