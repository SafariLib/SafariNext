import '@safari-node/core';
import { actionKeywords, booleanKeywords, excludedKeywords } from './keywords';

export default class ClassName {
    public static resolveProps(baseClass: string, props: Record<string, any>) {
        const returnReduced = (acc: string, resolved: string) =>
            acc.isEmpty?.() ? resolved : `${acc} ${resolved}`;

        const resolved = Object.keys(props).reduce((acc, key) => {
            if (
                !props[key] ||
                (typeof props[key] === 'string' && props[key].isEmpty?.()) ||
                excludedKeywords.includes(key) ||
                key.startsWith('aria') ||
                key.startsWith('data')
            ) {
                return acc;
            }
            if (key === 'className' || key === 'class') {
                return returnReduced(acc, props[key]);
            }
            if (actionKeywords.includes(key) && typeof props[key] === 'function') {
                return returnReduced(acc, [baseClass, 'action'].join('-'));
            }
            if (booleanKeywords.includes(key) && props[key] === true) {
                return returnReduced(acc, [baseClass, key].join('-'));
            }
            if (typeof props[key] === 'string' || typeof props[key] === 'number') {
                return returnReduced(acc, [baseClass, key, props[key]].join('-'));
            }
            return acc;
        }, '');

        return resolved.isEmpty?.() ? baseClass : `${baseClass} ${resolved}`;
    }
}
