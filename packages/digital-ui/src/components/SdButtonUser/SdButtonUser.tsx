'use client';

import './styles.css';
import { SdButton } from '../SdButton';
import { SdAvatar } from '../SdAvatar';
import { useProps } from '../../utils/element';
import React from 'react';

export interface SdButtonUserProps {
    size?: 'small' | 'medium' | 'large';
    onClick?: (userId: string) => void;
    username?: string;
    id?: string;
}

export default function SdButtonUser({ size = 'small', onClick, id, username }: SdButtonUserProps) {
    const handleClick = () => onClick?.(id ?? '');
    const resolved = useProps({ size }, 'SdButtonUser');

    return (
        <div className={resolved.className}>
            <span>{username ?? ''}</span>
            <SdButton variant="icon" onClick={handleClick}>
                <SdAvatar size={resolved.size} />
            </SdButton>
        </div>
    );
}
