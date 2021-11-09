import { BaseDto } from '../core/base.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString, MaxLength} from 'class-validator';
import { Type } from 'class-transformer';
import { CartDto } from '../cart/cart.dto';
import { InvoiceDto } from '../payment/invoice/invoice.dto';
import { OrderDetailsDto } from './order-details.dto';
import { UserDto } from '../user/user.dto';
import { OrderStatus } from '../../enum/order-status.enum';
import { AddressDto } from '../core/address.dto';

export class OrderDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  reference: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  coupon: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  deliveredAt: Date | null;

  @ApiProperty()
  @IsEnum(OrderStatus, { message: 'Must be a valid Order Status [0-5]' })
  status: OrderStatus;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;

  @Type(() => CartDto)
  cart: CartDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => OrderDetailsDto)
  orderDetails: OrderDetailsDto[];

  @Type(() => AddressDto)
  billingAddress: AddressDto;

  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}
