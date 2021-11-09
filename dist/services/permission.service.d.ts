import { Request } from 'express';
import { UserResponseDto } from '../dto/reponse/user-response.dto';
export declare class PermissionService {
    private readonly request;
    constructor(request: Request);
    returnRequest: () => UserResponseDto;
    superAdmin: () => {
        user: string;
        status: boolean;
    };
    admin: () => {
        user: string;
        status: boolean;
    };
    customer: () => {
        user: string;
        status: boolean;
    };
    affiliator: () => {
        user: string;
        status: boolean;
    };
    employee: () => {
        user: string;
        status: boolean;
    };
    user: () => {
        user: string;
        status: boolean;
    };
}
