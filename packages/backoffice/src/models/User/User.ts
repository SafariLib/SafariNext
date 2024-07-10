import type { EUserRole } from './EUserRole';

export interface User {
    id: string;
    username: string;
    email: string;
    role: EUserRole;
    isActive: boolean;
}
