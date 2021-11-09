"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const custom_base_entity_1 = require("../entities/core/custom-base.entity");
const user_entity_1 = require("../entities/user/user.entity");
let TypeormConfigModule = class TypeormConfigModule {
};
TypeormConfigModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_DB'),
                    schema: configService.get('DATABASE_SCHEMA'),
                    entities: [user_entity_1.UserEntity, custom_base_entity_1.CustomBaseEntity],
                    synchronize: !!configService.get('DATABASE_SYNCRONIZE'),
                    logging: false,
                    autoLoadEntities: true,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], TypeormConfigModule);
exports.TypeormConfigModule = TypeormConfigModule;
//# sourceMappingURL=typeorm-config.module.js.map