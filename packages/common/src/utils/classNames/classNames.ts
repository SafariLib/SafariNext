const namedProps = ['loading', 'disabled', 'selected', 'fullwidth', 'animation'];
const specialNamedProps = ['variant', 'color', 'size', 'direction'];

const composeClassName = (...str: Array<string | undefined>) => str.filter(Boolean).join('-');

export const resolveClass = (base: string, props?: Record<string, any>) => {
    const classNames = [base, props?.className].filter(v => v !== undefined);
    Object.keys(props || {}).forEach(prop => {
        const value = props?.[prop];
        if (prop === 'onClick') classNames.push(composeClassName(base, 'action'));
        if (specialNamedProps.includes(prop) && value) classNames.push(composeClassName(base, prop, value));
        else if (namedProps.includes(prop) && value) classNames.push(composeClassName(base, prop));
    });
    return classNames.join(' ');
};
