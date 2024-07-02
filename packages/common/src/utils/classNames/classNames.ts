const namedProps = ['loading', 'disabled', 'selected', 'fullWidth'];
const specialNamedProps = ['variant', 'color', 'size'];

const composeClassName = (...str: Array<string | undefined>) => str.filter(Boolean).join('-');

export const resolveClass = (base: string, props?: Record<string, any>) => {
    const classNames = [base, props?.className].filter(v => v !== undefined);
    Object.keys(props || {}).forEach(prop => {
        const value = props?.[prop];
        if (specialNamedProps.includes(prop) && value) classNames.push(composeClassName(base, prop, value));
        else if (namedProps.includes(prop) && value) classNames.push(composeClassName(base, prop));
    });
    return classNames.join(' ');
};
