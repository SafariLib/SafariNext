import { Sdui } from '@/puck/sdui';
import type { PageNavItem } from './types';

export interface PageFooterProps {
    nav: PageNavItem[];
}

export default function PageFooter({ nav }: PageFooterProps) {
    return (
        <footer className="sdui-page-footer">
            <Sdui.LogoNeon />
            <div className="sdui-page-footer-content">
                <Sdui.FlexContainer align="start" fullWidth>
                    <Sdui.Paragraph>
                        <span className="sdui-page-footer-catch">
                            Votre boussole dans la jungle du numérique !
                        </span>
                    </Sdui.Paragraph>
                </Sdui.FlexContainer>
                <Sdui.FlexContainer direction="row" justify="spaced" align="end" fullWidth>
                    <Sdui.Nav nav={nav} direction="column" />
                    <Sdui.FlexContainer align="center">
                        <Sdui.Paragraph>@safaridigital - 2024</Sdui.Paragraph>
                        <Sdui.Link href="">
                            <span className="sdui-page-footer-cgu">CGU/Mentions légales</span>
                        </Sdui.Link>
                    </Sdui.FlexContainer>
                    <Sdui.Networks />
                </Sdui.FlexContainer>
            </div>
        </footer>
    );
}
