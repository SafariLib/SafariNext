import type { PropsWithChildren } from 'react';
import './Text.styles.css';
import { ClassName } from '../../utils';

export interface ParagraphProps extends PropsWithChildren {
    align?: 'left' | 'center' | 'right';
}

export default function Paragraph(props: ParagraphProps) {
    return <p {...props} className={ClassName.resolveProps('Sdui-Text', props)} />;
}
