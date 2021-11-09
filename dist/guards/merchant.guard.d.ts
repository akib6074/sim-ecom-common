import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class MerchantGuard implements CanActivate {
    private readonly logger;
    canActivate(context: ExecutionContext): Promise<boolean>;
    private hasMerchantAccess;
    private getUserShops;
}
