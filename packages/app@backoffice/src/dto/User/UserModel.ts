import type { EntityBase } from '@/dto/EntityBase';
import type { AvatarModel } from '@/dto/Avatar/AvatarModel';

export interface UserModel extends EntityBase {
    username: string;
    email: string;
    role: number;
    avatar: AvatarModel;
    isActive: boolean;
}
