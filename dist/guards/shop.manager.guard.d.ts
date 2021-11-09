import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ShopManagerGuard implements CanActivate {
    private readonly logger;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
