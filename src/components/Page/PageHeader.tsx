'use client';

import PageHeaderLogo from './PageHeaderLogo';
import React from 'react';

export interface PageHeaderProps {
    paths: Array<{ link: string; name: string }>;
}

export default function PageHeader(props: PageHeaderProps) {
    const [pathname, setPathname] = React.useState('');
    React.useLayoutEffect(() => setPathname(window.location.pathname), []);

    return (
        <header className="sdui-page-header">
            <div className="sdui-container">
                <PageHeaderLogo />
                <nav className="sdui-page-header-nav">
                    <ul>
                        {props.paths.map(({ link, name }) => (
                            <li
                                key={name}
                                className={
                                    pathname === link ? 'sdui-nav-item sdui-nav-item-active' : 'sdui-nav-item'
                                }>
                                <a href={link} className="sdui-text sdui-link">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
