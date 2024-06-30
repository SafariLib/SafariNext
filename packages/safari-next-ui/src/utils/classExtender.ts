export const classExtender = (base: string, ...extenders: Array<string | undefined>): string =>
    [base, ...extenders].filter(extender => extender).join(' ');
