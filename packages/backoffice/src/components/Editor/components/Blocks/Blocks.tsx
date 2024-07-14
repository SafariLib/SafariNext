'use client';

import { Puck } from '@measured/puck';
import { SdText, useProps } from '@safaridigital/common';
import { t } from '@/locales';
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
