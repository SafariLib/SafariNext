'use client';

import React from 'react';
import './Navigation.styles.css';
import Link from '../Text/Link';

interface NavigationProps {
    nav: { link: string; name: string }[];
    direction?: 'row' | 'column';
    spacing?: 'small' | 'medium' | 'large';
}

export default function Navigation({ nav, direction, spacing }: NavigationProps) {
    const [pathname, setPathname] = React.useState('');
    React.useLayoutEffect(() => setPathname(window.location.pathname), []);

    return nav.length === 0 ? null : (
        <nav className="sdui-nav">
            <ul
                className={
                    `sdui-nav-list sdui-nav-list-${direction}` +
                    (spacing ? ` sdui-nav-list-spacing-${spacing}` : '')
                }>
                {nav.map(({ link, name }) => (
                    <li
                        key={name}
                        className={`sdui-nav-item sdui-nav-item${pathname === link ? '-active' : ''}`}>
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
