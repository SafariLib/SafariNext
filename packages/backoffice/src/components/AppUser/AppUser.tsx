'use client';

import './styles.css';
import type { User } from '@/models';
import { SdAvatar, useProps } from '@safaridigital/common';

export interface AppUserProps extends User {
    size?: 'small' | 'medium' | 'large';
    onClick?: (userId: string) => void;
}

export default function AppUser({ size = 'small', onClick, ...user }: AppUserProps) {
    const handleClick = () => onClick?.(user?.id);
    const resolved = useProps({ size }, 'AppUser');

    return (
        <div className={resolved.className}>
            <span>{user?.username}</span>
            <SdAvatar size={resolved.size} onClick={handleClick} />
        </div>
    );
}
