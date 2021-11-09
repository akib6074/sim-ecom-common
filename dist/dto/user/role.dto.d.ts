import { BaseDto } from '../core/base.dto';
import { UserRoleDto } from './user-role.dto';
export declare class RoleDto extends BaseDto {
    role: string;
    description: string;
    users: UserRoleDto[];
}
