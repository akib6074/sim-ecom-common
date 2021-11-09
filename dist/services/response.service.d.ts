import { HttpStatus } from '@nestjs/common';
import { ResponseDto } from '../dto/reponse/response.dto';
import { BaseDto } from '../dto/core/base.dto';
export declare class ResponseService {
    toResponse<T>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toDtoResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toDtosResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T[]>): Promise<ResponseDto>;
    toPaginationResponse<T extends BaseDto>(status: HttpStatus, message: string, page: number, limit: number, data: Promise<[T[], number]>): Promise<ResponseDto>;
    toErrorResponse(status: HttpStatus, message: string, error: any): Promise<ResponseDto>;
}
