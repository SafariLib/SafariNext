import PageFooterLogo from './PageFooterLogo';

export interface PageFooterProps {
    cgu: {
        copyright: string;
        link: string;
        name: string;
    };
}

export default function PageFooter({ cgu }: PageFooterProps) {
    return (
        <footer className="sdui-page-footer">
            <PageFooterLogo />
            <div className="sdui-page-footer-content">
                <div className="sdui-container">
                    <div className="sdui-page-footer-cgu">
                        <div className="cgu-copyright">{cgu.copyright}</div>
                        <div className="cgu-link">
                            <a href={cgu.link} className="sdui-text sdui-link">
                                {cgu.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
