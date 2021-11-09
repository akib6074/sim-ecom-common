"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGuard = exports.ShopManagerGuard = exports.MerchantGuard = exports.CustomerGuard = exports.SuperAdminGuard = exports.AdminGuard = exports.EmployeeGuard = void 0;
const admin_guard_1 = require("./admin.guard");
Object.defineProperty(exports, "AdminGuard", { enumerable: true, get: function () { return admin_guard_1.AdminGuard; } });
const employee_guard_1 = require("./employee.guard");
Object.defineProperty(exports, "EmployeeGuard", { enumerable: true, get: function () { return employee_guard_1.EmployeeGuard; } });
const super_admin_guard_1 = require("./super-admin.guard");
Object.defineProperty(exports, "SuperAdminGuard", { enumerable: true, get: function () { return super_admin_guard_1.SuperAdminGuard; } });
const customer_guard_1 = require("./customer.guard");
Object.defineProperty(exports, "CustomerGuard", { enumerable: true, get: function () { return customer_guard_1.CustomerGuard; } });
const merchant_guard_1 = require("./merchant.guard");
Object.defineProperty(exports, "MerchantGuard", { enumerable: true, get: function () { return merchant_guard_1.MerchantGuard; } });
const shop_manager_guard_1 = require("./shop.manager.guard");
Object.defineProperty(exports, "ShopManagerGuard", { enumerable: true, get: function () { return shop_manager_guard_1.ShopManagerGuard; } });
const user_guard_1 = require("./user.guard");
Object.defineProperty(exports, "UserGuard", { enumerable: true, get: function () { return user_guard_1.UserGuard; } });
//# sourceMappingURL=guards.config.js.map