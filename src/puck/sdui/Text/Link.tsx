import type { PropsWithChildren } from 'react';
import React from 'react';
import './Text.styles.css';

interface LinkProps extends PropsWithChildren {
    href: string;
    className?: string;
}

export default function Link(props: LinkProps) {
    const onClick = React.useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (props.href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(props.href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        },
        [props.href],
    );

    return (
        <a
            {...props}
            onClick={onClick}
            className={`sdui-text sdui-link${props.className ? ' ' + props.className : ''}`}
        />
    );
}
