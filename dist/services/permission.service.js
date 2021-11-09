"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let PermissionService = class PermissionService {
    constructor(request) {
        this.request = request;
        this.returnRequest = () => {
            const user = this.request['_user'];
            return user ? user : null;
        };
        this.superAdmin = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isAdmin || user.isSuperAdmin) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
        this.admin = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isAdmin) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
        this.customer = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isCustomer) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
        this.affiliator = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isAffiliator) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
        this.employee = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isEmployee) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
        this.user = () => {
            const user = this.request['_user'];
            if (user) {
                if (user.isUser) {
                    return {
                        user: user.userId,
                        status: true,
                    };
                }
            }
            return {
                user: null,
                status: false,
            };
        };
    }
};
PermissionService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map