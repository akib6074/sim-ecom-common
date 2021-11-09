import { BaseDto } from '../core/base.dto';
import { RoleDto } from './role.dto';
import { UserDto } from './user.dto';
export declare class UserRoleDto extends BaseDto {
    user: UserDto;
    role: RoleDto;
}
