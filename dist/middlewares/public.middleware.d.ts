import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { RedisService } from 'nestjs-redis';
export declare class PublicMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly redisService;
    private readonly logger;
    constructor(configService: ConfigService, redisService: RedisService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
