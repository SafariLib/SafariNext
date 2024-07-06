'use client';

import { useProps, usePropsMapper } from '../../utils/element';
import type { SdIconProps } from './types';
import type React from 'react';
import './styles.css';

interface Props extends SdIconProps {
    children: React.ReactNode;
}

export default function SdBaseIcon({
    variant = 'filled',
    color = 'text',
    size = 'small',
    direction = 'up',
    animation = true,
    ...props
}: Props) {
    const resolved = useProps({ ...props, variant, color, size, direction, animation }, 'SdIcon');
    return usePropsMapper({ ...resolved });
}
