import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { BaseDto } from '../../core/base.dto';
import { UserDto } from '../../user/user.dto';
import { InvoiceDetailsDto } from './invoice-details.dto';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';
import { AddressDto } from '../../../dto/core/address.dto';

export class InvoiceDto extends BaseDto {
  @ApiProperty()
  @ValidateIf((o) => !o.datePaid)
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  dateApplied: Date | null;

  @ApiProperty()
  @ValidateIf((o) => !o.dateApplied)
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  datePaid: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @IsEnum(InvoiceStatus, { message: 'Can be either paid or unpaid' })
  status: InvoiceStatus;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => InvoiceDetailsDto)
  invoiceDetails: InvoiceDetailsDto;

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}
