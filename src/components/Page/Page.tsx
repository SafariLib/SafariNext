'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import PageHeader from './PageHeader';
import PageFooter from '../../components/Page/PageFooter';
import type { PageNavItem } from '../../components/Page/types';

export interface PageProps extends PropsWithChildren {
    nav: PageNavItem[];
    background?: string;
    setOpen: (open: boolean) => void;
}

export default function Page({ children, background, ...props }: PageProps) {
    return (
        <React.Fragment>
            <div className="sdui-page">
                {background ? (
                    <div className="sdui-page-background">
                        <img src={background} alt="page wallpaper" />
                    </div>
                ) : null}
                <PageHeader {...props} />
                <main className="sdui-page-content">
                    {children}
                    <PageFooter {...props} />
                </main>
            </div>
        </React.Fragment>
    );
}
