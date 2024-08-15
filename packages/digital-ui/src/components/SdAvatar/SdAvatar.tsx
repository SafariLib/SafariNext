'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import { useProps, usePropsMapper } from '../../utils/element';
import { SdIcon } from '../SdIcon';
import './styles.css';
import { useImageValidation } from '../../utils/url';

export interface SdAvatarProps {
    src?: string;
    color?: 'primary' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    fullwidth?: boolean;
}

export default function SdAvatar({
    color = 'text',
    size = 'small',
    fullwidth = false,
    ...props
}: SdAvatarProps) {
    const { src, ...resolved } = useProps({ color, size, fullwidth, ...props }, 'SdAvatar');
    const svgProps = useMemo(() => ({ color, size, fullwidth }), [color, size, fullwidth]);
    const isValid = useImageValidation(src);

    return (
        <AvatarContainer {...resolved}>
            {src && isValid ? (
                <div className="SdAvatar-container">
                    <img src={src} />
                    <SdIcon.CircleIcon {...svgProps} />
                </div>
            ) : (
                <SdIcon.AccountIcon {...svgProps} />
            )}
        </AvatarContainer>
    );
}

function AvatarContainer({ children, ...props }: SdAvatarProps & PropsWithChildren) {
    return usePropsMapper(props, <div>{children}</div>);
}
