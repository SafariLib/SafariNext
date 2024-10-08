'use client';

import { setCGUDialogOpen } from '../CGUDialog/CGUDialog';
import type { PageNavItem } from './types';
import { Box } from '../Box';
import { Paragraph } from '../Text';
import Networks from './components/Networks/Networks';
import Nav from './components/Navigation/Navigation';
import LogoNeon from './components/LogoNeon/LogoNeon';

export interface PageFooterProps {
    nav: PageNavItem[];
}

export default function PageFooter({ nav }: PageFooterProps) {
    return (
        <footer className="sdui-page-footer">
            <LogoNeon />
            <div className="sdui-page-footer-content">
                <Box align="start" fullWidth>
                    <Paragraph>
                        <span className="sdui-page-footer-catch">
                            Votre boussole dans la jungle du numérique !
                        </span>
                    </Paragraph>
                </Box>
                <Box
                    direction="row"
                    justify="space-between"
                    align="end"
                    fullWidth
                    className="sdui-page-footer-content-actions">
                    <Nav nav={nav} direction="column" />
                    <Box align="center">
                        <Paragraph>@safaridigital - 2024</Paragraph>
                        <button className="sdui-page-footer-cgu" onClick={() => setCGUDialogOpen(true)}>
                            CGU/Mentions légales
                        </button>
                    </Box>
                    <Networks />
                </Box>
            </div>
        </footer>
    );
}
