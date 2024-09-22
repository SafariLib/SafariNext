import React from 'react';
import PageHeaderLogo from './PageHeaderLogo';
import type { PageNavItem } from './types';
import { Sdui } from '@/puck/sdui';

export interface PageHeaderProps {
    nav: PageNavItem[];
}

export default function PageHeader(props: PageHeaderProps) {
    return (
        <header className="sdui-page-header">
            <Sdui.FlexContainer align="center" justify="spaced" direction="row" fullWidth>
                <PageHeaderLogo />
                <Sdui.Nav nav={props.nav} direction="row" spacing="medium" />
            </Sdui.FlexContainer>
        </header>
    );
}
