import { PromotionType } from '../../enum/promotion-type.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ProductEntity } from '../product/product.entity';
import { ShopTypeEntity } from '../shop/shop-type.entity';
import { UserEntity } from '../user/user.entity';
import { ShopEntity } from './shop.entity';

@Entity({ name: 'promotions', schema: 'public' })
export class PromotionEntity extends CustomBaseEntity {
  @Column({
    type: 'date',
    name: 'start_date',
    nullable: true,
  })
  startDate: Date | null;

  @Column({
    type: 'date',
    name: 'end_date',
    nullable: true,
  })
  endDate: Date | null;

  @Column({ type: 'varchar', name: 'title', length: 100 })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 200 })
  description: string;

  @Column({
    type: 'varchar',
    name: 'promotion_cover_image',
    length: 200,
    nullable: true,
  })
  promotionCoverImage: string;

  @Column({ type: 'varchar', name: 'titleColor', length: 30, nullable: true })
  titleColor: string;

  @Column({
    type: 'varchar',
    name: 'descriptionColor',
    length: 30,
    nullable: true,
  })
  descriptionColor: string;

  @Column({
    type: 'enum',
    name: 'type',
    enum: PromotionType,
    default: `${PromotionType.Banner}`,
  })
  type: PromotionType;

  @ManyToOne(() => ShopEntity, (shopEntity) => shopEntity.reviews)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.promotions)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ShopTypeEntity,
    (shopTypeEntity) => shopTypeEntity.promotions,
  )
  @JoinColumn({ name: 'shop_type_id' })
  shopType: ShopTypeEntity;

  @ManyToOne(
    () => CategoryEntity,
    (categoryEntity) => categoryEntity.promotions,
  )
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
