'use client';

import type { UserModel } from '@dto';
import { SdButtonUser } from '@digital/ui';

interface UserProps extends UserModel {
    onClick?: (userId: string) => void;
    selected?: boolean;
}

export default function User({ id, ...props }: UserProps) {
    return <SdButtonUser {...props} id={id?.toString()} />;
}
