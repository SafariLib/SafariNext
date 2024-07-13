'use client';

import { AppUser } from '@/components';
import type { User } from '@/models';

interface UserProps extends User {
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function User(props: UserProps) {
    return <AppUser {...props} />;
}
