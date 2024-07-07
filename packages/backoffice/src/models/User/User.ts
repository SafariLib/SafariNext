import type { EUserRole } from '@/models/User/EUserRole';

export interface User {
    id: string;
    username: string;
    email: string;
    role: EUserRole;
    isActive: boolean;
}
