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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const gender_enum_1 = require("../../enum/gender.enum");
const base_dto_1 = require("../core/base.dto");
class UserDto extends base_dto_1.BaseDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Must be non empty' }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(65, { message: 'Maximum 65 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Must be non empty' }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(65, { message: 'Maximum 65 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Must be non empty' }),
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(100, { message: 'Maximum 100 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Must be non empty' }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(20, { message: 'Maximum 20 character supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    class_validator_1.IsNotEmpty({ message: 'Must be non empty' }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    class_validator_1.MaxLength(100, { message: 'Maximum 100 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(gender_enum_1.Gender, { message: 'Must be a valid gender [1-3]' }),
    __metadata("design:type", Number)
], UserDto.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString({ strict: true }, { message: 'Must be a valid date' }),
    __metadata("design:type", Date)
], UserDto.prototype, "dateOfBirth", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map