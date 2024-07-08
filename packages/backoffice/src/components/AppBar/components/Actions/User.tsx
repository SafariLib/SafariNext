'use client';

import { AppUser } from '@/components';
import type { User } from '@/models';

export interface UserActionProps extends User {
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function UserAction(props: UserActionProps) {
    return <AppUser {...props} />;
}
