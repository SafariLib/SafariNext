import type { PropsWithChildren } from 'react';
import PageHeader, { type PageHeaderProps } from './PageHeader';
import PageFooter, { type PageFooterProps } from '@/components/Page/PageFooter';

export interface PageProps extends PropsWithChildren {
    nav?: PageHeaderProps['paths'];
    cgu: PageFooterProps['cgu'];
    background?: string;
}

export default function Page({ children, cgu, nav, background }: PageProps) {
    return (
        <div className="sdui-page">
            {background ? (
                <div className="sdui-page-background">
                    <img src={background} alt="page wallpaper" />
                </div>
            ) : null}
            {nav ? <PageHeader paths={nav} /> : null}
            <main className="sdui-page-content">
                {children}
                <PageFooter cgu={cgu} />
            </main>
        </div>
    );
}
