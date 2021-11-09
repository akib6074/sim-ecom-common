import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { OrderDto } from '../order/order.dto';
import { CartDetailsDto } from './cart-details.dto';
import { UserDto } from '../user/user.dto';
import { CouponDto } from '../coupon/coupon.dto';

export class CartDto extends BaseDto {
  @Type(() => OrderDto)
  order: OrderDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CartDetailsDto)
  cartDetails: CartDetailsDto[];

  @Type(() => CouponDto)
  coupon: CouponDto;
}
