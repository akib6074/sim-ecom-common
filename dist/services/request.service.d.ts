import { BaseDto } from '../dto/core/base.dto';
import { Request } from 'express';
import { CustomBaseEntity } from '../entities/core/custom-base.entity';
export declare class RequestService {
    private readonly request;
    constructor(request: Request);
    forCreate<T extends BaseDto>(dto: T): T;
    forCreateEntity<T extends CustomBaseEntity>(entity: T): T;
    forUpdate<T extends BaseDto>(dto: T): T;
    forUpdateEntity<T extends CustomBaseEntity>(entity: T): T;
}
