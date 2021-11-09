"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MerchantGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantGuard = void 0;
const common_1 = require("@nestjs/common");
const system_exception_1 = require("../exceptions/system.exception");
let MerchantGuard = MerchantGuard_1 = class MerchantGuard {
    constructor() {
        this.logger = new common_1.Logger(MerchantGuard_1.name);
    }
    async canActivate(context) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const user = req['_user'];
        const shopId = req.body['shopId'];
        const error = { isGuard: true };
        if (!user) {
            throw new system_exception_1.SystemException(error);
        }
        if (user.isSuperAdmin) {
            return true;
        }
        if (user.isAdmin) {
            return true;
        }
        if (this.hasMerchantAccess(user, shopId)) {
            return true;
        }
        throw new system_exception_1.SystemException(error);
    }
    hasMerchantAccess(user, shopId) {
        if (!shopId) {
            return false;
        }
        const shops = this.getUserShops(user);
        return shops.includes(shopId);
    }
    getUserShops(user) {
        const shops = [];
        for (const userRole of user.roles) {
            shops.push(userRole.shopId);
        }
        return shops;
    }
};
MerchantGuard = MerchantGuard_1 = __decorate([
    common_1.Injectable()
], MerchantGuard);
exports.MerchantGuard = MerchantGuard;
//# sourceMappingURL=merchant.guard.js.map