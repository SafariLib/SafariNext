'use client';

import { t } from '@/locales';
import { SdText, useProps } from '@digital/ui';
import { Puck } from '@measured/puck';
import './styles.css';

interface BlocksProps {}

export default function Blocks(props: BlocksProps) {
    const resolvedProps = useProps(props, 'Editor-components');

    return (
        <div {...resolvedProps}>
            <SdText variant="caption">{t('editor:tools:blocks:title')}</SdText>
            <Puck.Components />
        </div>
    );
}
