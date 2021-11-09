"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGuard = void 0;
const common_1 = require("@nestjs/common");
const system_exception_1 = require("../exceptions/system.exception");
let CustomerGuard = class CustomerGuard {
    async canActivate(context) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const user = req['_user'];
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
        if (user.isCustomer) {
            return true;
        }
        throw new system_exception_1.SystemException(error);
    }
};
CustomerGuard = __decorate([
    common_1.Injectable()
], CustomerGuard);
exports.CustomerGuard = CustomerGuard;
//# sourceMappingURL=customer.guard.js.map