import { PointToStringTransformer } from '../../transformers/point-to-string.transformer';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductEntity } from '../product/product.entity';
import { MerchantEntity } from '../user/merchant.entity';
import { Point } from '../../dto/location/point';
import { ShopTypeEntity } from './shop-type.entity';
import { UserEntity } from '../user/user.entity';
import { ShopReviewEntity } from './shop-review.entity';
import { StringToNumericTransformer } from '../../transformers/string-to-numeric.transformer';
import {CouponEntity} from "../coupon/coupon.entity";

@Entity({ name: 'shops', schema: 'public' })
export class ShopEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 64 })
  @Index('shop-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'domain', length: 150 })
  domain: string;

  @Column({
    type: 'varchar',
    name: 'url',
    length: 150,
    nullable: true,
  })
  url: string;

  @Column({ type: 'varchar', name: 'location', length: 150, nullable: true })
  @Index('shops-location-idx', { unique: false })
  location: string;

  @Column({ type: 'varchar', name: 'description', length: 150, nullable: true })
  description: string;

  @Column({
    type: 'point',
    name: 'geo_location',
    transformer: new PointToStringTransformer(),
  })
  geoLocation: Point;

  @Column({
    type: 'decimal',
    name: 'rating',
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
    transformer: new StringToNumericTransformer(),
  })
  rating: number;

  @Column({ type: 'int', name: 'popular', default: () => "'0'" })
  popular: number;

  @Column({ type: 'int', name: 'trending', default: () => "'0'" })
  trending: number;

  @Column({
    type: 'varchar',
    name: 'shop_profile_image',
    length: 200,
    nullable: true,
  })
  shopProfileImage: string;

  @Column({
    type: 'varchar',
    name: 'shop_cover_image',
    length: 200,
    nullable: true,
  })
  shopCoverImage: string;

  @ManyToOne(() => ShopTypeEntity, (shopTypeEntity) => shopTypeEntity.shops)
  @JoinColumn({ name: 'shop_type_id' })
  shopType: ShopTypeEntity;

  @ManyToOne(() => MerchantEntity, (merchantEntity) => merchantEntity.shops)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.shop)
  @JoinColumn({ name: 'shop_id' })
  products: ProductEntity[];

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.followingShops)
  users: UserEntity[];

  @OneToMany(
    () => ShopReviewEntity,
    (shopReviewEntity) => shopReviewEntity.shop,
  )
  @JoinColumn({ name: 'shop_id' })
  reviews: ShopReviewEntity[];

  @ManyToMany(
      () => CouponEntity,
      (couponEntity) => couponEntity.shops,
  )
  coupons: CouponEntity[];
}
