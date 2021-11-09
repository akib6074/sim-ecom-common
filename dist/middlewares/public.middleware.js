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
var PublicMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_redis_1 = require("nestjs-redis");
const redis_enum_1 = require("../enum/redis.enum");
let PublicMiddleware = PublicMiddleware_1 = class PublicMiddleware {
    constructor(configService, redisService) {
        this.configService = configService;
        this.redisService = redisService;
        this.logger = new common_1.Logger(PublicMiddleware_1.name);
    }
    async use(req, res, next) {
        var _a;
        try {
            const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
            if (token) {
                const payload = await this.redisService
                    .getClient(redis_enum_1.Redis.REDIS_SESSION)
                    .get(token);
                if (payload)
                    req['_user'] = JSON.parse(payload);
            }
            next();
        }
        catch (error) {
            this.logger.log(error);
        }
    }
};
PublicMiddleware = PublicMiddleware_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        nestjs_redis_1.RedisService])
], PublicMiddleware);
exports.PublicMiddleware = PublicMiddleware;
//# sourceMappingURL=public.middleware.js.map