import { locales } from './locales';

export { default as usePageTitle } from './usePageTitle';
export * from './locales';

export const t = (key: keyof typeof locales) => locales[key];