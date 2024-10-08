import React from 'react';
import PageHeaderLogo from './PageHeaderLogo';
import type { PageNavItem } from './types';
import { Box } from '../Box';
import { Link } from '../Text';
import Nav from './components/Navigation/Navigation';

export interface PageHeaderProps {
    nav: PageNavItem[];
}

export default function PageHeader(props: PageHeaderProps) {
    return (
        <header className="sdui-page-header">
            <Box align="center" justify="space-between" direction="row" fullWidth>
                <PageHeaderLogo />
                <Nav nav={props.nav} direction="row" spacing="medium" />
            </Box>
            <Link href="mailto:safari.digital.web@gmail.com" className="sdui-page-header-contact-mobile">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
            </Link>
        </header>
    );
}
