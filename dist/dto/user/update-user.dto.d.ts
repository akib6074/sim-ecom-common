import { BaseDto } from '../../dto/core/base.dto';
export declare class UpdateUserDto extends BaseDto {
    firstName: string;
    lastName: string;
    password: string;
    addressPlain: string;
}
