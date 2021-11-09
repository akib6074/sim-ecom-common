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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleDto = void 0;
const class_transformer_1 = require("class-transformer");
const base_dto_1 = require("../core/base.dto");
const role_dto_1 = require("./role.dto");
const user_dto_1 = require("./user.dto");
class UserRoleDto extends base_dto_1.BaseDto {
}
__decorate([
    class_transformer_1.Type(() => user_dto_1.UserDto),
    __metadata("design:type", user_dto_1.UserDto)
], UserRoleDto.prototype, "user", void 0);
__decorate([
    class_transformer_1.Type(() => role_dto_1.RoleDto),
    __metadata("design:type", role_dto_1.RoleDto)
], UserRoleDto.prototype, "role", void 0);
exports.UserRoleDto = UserRoleDto;
//# sourceMappingURL=user-role.dto.js.map