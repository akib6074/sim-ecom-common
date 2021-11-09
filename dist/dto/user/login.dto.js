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
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const bool_enum_1 = require("../../enum/bool.enum");
class LoginDto {
}
__decorate([
    swagger_1.ApiProperty({ default: '01957206205' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString({ message: 'Phone must be a string' }),
    __metadata("design:type", String)
], LoginDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString({ message: 'Email must be a string' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ default: 's1234' }),
    class_validator_1.IsDefined({ message: 'Password must be defined' }),
    class_validator_1.IsString({ message: 'Password must be a string' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsInt({ message: 'Must be an integer value' }),
    class_validator_1.IsEnum(bool_enum_1.Bool, { message: 'Can be either 0 or 1' }),
    __metadata("design:type", Number)
], LoginDto.prototype, "isChecked", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map