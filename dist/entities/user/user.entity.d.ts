import { Gender } from '../../enum/gender.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
export declare class UserEntity extends CustomBaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    gender: Gender;
    dateOfBirth: Date | null;
}
