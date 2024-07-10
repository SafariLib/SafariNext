'use client';

import './styles.css';
import type { User } from '@models';
import { SdAvatar, SdButton, useProps } from '@safaridigital/common';

export interface AppUserProps extends User {
    size?: 'small' | 'medium' | 'large';
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function AppUser({ size = 'small', onClick, ...user }: AppUserProps) {
    const handleClick = () => onClick?.(user?.id);
    const resolved = useProps({ size }, 'AppUser');

    return (
        <div className={resolved.className}>
            <span>{user?.username}</span>
            <SdButton variant="icon" onClick={handleClick}>
                <SdAvatar size={resolved.size} />
            </SdButton>
        </div>
    );
}
