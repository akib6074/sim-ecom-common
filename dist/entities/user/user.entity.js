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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const gender_enum_1 = require("../../enum/gender.enum");
const custom_base_entity_1 = require("../core/custom-base.entity");
let UserEntity = class UserEntity extends custom_base_entity_1.CustomBaseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'first_name', length: 65 }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'last_name', length: 65 }),
    typeorm_1.Index('users-last-name-idx', { unique: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'email', length: 100, nullable: true }),
    typeorm_1.Index('users-email-idx', { unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'phone', length: 20, nullable: true }),
    typeorm_1.Index('users-phone-idx', { unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'password', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        name: 'gender',
        enum: gender_enum_1.Gender,
        default: `${gender_enum_1.Gender.Unknown}`,
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp without time zone',
        name: 'date_of_birth',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateOfBirth", void 0);
UserEntity = __decorate([
    typeorm_1.Entity({ name: 'users', schema: 'public' }),
    typeorm_1.Index('users-lastName-isactive-idx', ['lastName', 'isActive']),
    typeorm_1.Index('users-email-isactive-idx', ['email', 'isActive']),
    typeorm_1.Index('users-phone-isactive-idx', ['phone', 'isActive'])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map