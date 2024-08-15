'use client';

import type { User } from '@/models';
import { SdButtonUser } from '@digital/ui';

interface UserProps extends User {
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function User(props: UserProps) {
    return <SdButtonUser {...props} />;
}
