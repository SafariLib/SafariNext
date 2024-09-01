'use client';

import { t } from '@locales';
import { SdText, useProps } from '@digital/ui';
import { Puck } from '@measured/puck';
import './styles.css';

interface TreeProps {}

export default function Tree(props: TreeProps) {
    const resolvedProps = useProps(props, 'Editor-tree');
    return (
        <div {...resolvedProps}>
            <SdText variant="caption">{t('editor:tools:tree:title')}</SdText>
            <Puck.Outline />
        </div>
    );
}
