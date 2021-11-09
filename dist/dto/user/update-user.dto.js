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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const base_dto_1 = require("../../dto/core/base.dto");
class UpdateUserDto extends base_dto_1.BaseDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(65, { message: 'Maximum 65 characters supported' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(65, { message: 'Maximum 65 characters supported' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(100, { message: 'Maximum 100 characters supported' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: 'Must be string' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "addressPlain", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map