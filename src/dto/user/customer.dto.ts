import {BaseDto} from '../core/base.dto';
import {NoteDto} from '../core/note.dto';
import {RiskDto} from '../core/risk.dto';
import {AddressDto} from '../core/address.dto';
import {Type} from 'class-transformer';
import {IsInt, IsNumber, Min} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CustomerDto extends BaseDto {
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 6 }, { message: 'Should be a number' })
  outstandingAllowAmount: number;

  @ApiProperty()
  @IsNumber({}, { message: 'Should be a number' })
  @IsInt({ message: 'Should be an unsigned number' })
  @Min(15)
  maxPaymentDays: number;

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddresses: AddressDto[];
}
