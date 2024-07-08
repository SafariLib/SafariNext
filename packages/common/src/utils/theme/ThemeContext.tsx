import React, { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<{
    theme: 'dark' | 'light' | undefined;
    switchTheme: () => void;
}>({
    theme: undefined,
    switchTheme: () => {},
});

export function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<'dark' | 'light' | undefined>();

    useEffect(() => setTheme(resolveTheme()), []);
    useEffect(() => (theme ? document.documentElement.setAttribute('data-theme', theme) : void 0), [theme]);

    const resolveTheme = () => {
        return localStorage['data-theme'] === 'dark' ||
            (!('data-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : 'light';
    };

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('data-theme', newTheme);
    };

    return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
