import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class CustomerGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
