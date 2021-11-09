import { CustomBaseEntity } from '../entities/core/custom-base.entity';
export declare class ExceptionService {
    notFound<T extends CustomBaseEntity>(entity: T | T[], message: string): void;
}
