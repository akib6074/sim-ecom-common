import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { OrderEntity } from '../order/order.entity';
import { UserEntity } from '../user/user.entity';
import { CartDetailsEntity } from './cart-details.entity';

@Entity({ name: 'carts', schema: 'public' })
export class CartEntity extends CustomBaseEntity {
  @OneToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.carts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(
    () => CartDetailsEntity,
    (cartDetailsEntity) => cartDetailsEntity.cart,
  )
  @JoinColumn({ name: 'cart_id' })
  cartDetails: CartDetailsEntity[];

  @ManyToOne(() => CouponEntity, (couponEntity) => couponEntity.carts)
  @JoinColumn({ name: 'coupon_id' })
  coupon: CouponEntity;
}
