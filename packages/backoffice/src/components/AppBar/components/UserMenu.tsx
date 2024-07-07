'use client';

import { AppUser } from '@/components';
import type { User } from '@/models';

export default function UserMenu(props: User) {
    return <AppUser {...props} onClick={() => console.log('choupi')} />;
}
