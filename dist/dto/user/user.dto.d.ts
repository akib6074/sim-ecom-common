import { Gender } from '../../enum/gender.enum';
import { BaseDto } from '../core/base.dto';
export declare class UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    gender: Gender;
    dateOfBirth: Date | null;
}
