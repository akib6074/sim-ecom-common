import { BaseDto } from '../core/base.dto';
import { ProductAttributeDto } from './product-attribute.dto';
import { ShopDto } from '../shop/shop.dto';
import { Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';
import { CategoryDto } from '../category/category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../user/user.dto';
import { ProductImageDto } from './product-image.dto';
import { BrandDto } from '../core/brand.dto';
import { ProductReviewDto } from './product-review.dto';
import { Point } from '../location/point';
import { CouponDto } from "../coupon/coupon.dto";
import { CartDetailsDto } from '../cart/cart-details.dto';
import { StockPurchaseDto } from '../stock/stock-purchase.dto';
import { StockItemTransactionDto } from '../stock/stock-item-transaction.dto';


export class ProductDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(130, { message: 'Maximum 130 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  description: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  summary: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  location: string;

  @ApiProperty()
  @Allow()
  @Type(() => Point)
  geoLocation: Point;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(512, { message: 'Maximum 512 character supported' })
  metaDescription: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  metaKeywords: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(130, { message: 'Maximum 130 character supported' })
  metaTitle: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(60, { message: 'Maximum 60 character supported' })
  reference: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(0)
  quantity: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Reserved should be an integer!' })
  reserved: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Sold should be an integer!' })
  sold: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Should be a number with at most 2 decimal places' },
  )
  @Max(5)
  @Min(0)
  rating: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Popular should be an integer!' })
  @Min(0)
  popular: number;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Trending should be an integer!' })
  @Min(0)
  trending: number;

  @ApiProperty()
  @IsInt({ message: 'Low stock threshold should be an integer!' })
  @Min(0)
  lowStockThreshold: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
      { maxDecimalPlaces: 6 },
      { message: 'Should be a number with at most 6 decimal places' },
  )
  purchasedPrice: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  discount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  wholesalePrice: number;

  @ApiProperty()
  @IsNumber(
    { maxDecimalPlaces: 6 },
    { message: 'Should be a number with at most 6 decimal places' },
  )
  additionalShippingCost: number;

  @ApiProperty()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => ProductImageDto)
  image: ProductImageDto;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Must be either 0 or 1' })
  onSale: Bool;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Must be either 0 or 1' })
  isVirtual: Bool;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Must be either 0 or 1' })
  isPack: Bool;

  @Type(() => ProductAttributeDto)
  productAttributes: ProductAttributeDto[];

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => CategoryDto)
  category: CategoryDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CartDetailsDto)
  cartDetails: CartDetailsDto[];

  @Type(() => BrandDto)
  brand: BrandDto;

  @Type(() => ProductReviewDto)
  productReviews: ProductReviewDto[];

  @Type(() => StockPurchaseDto)
  stockPurchases: StockPurchaseDto[];

  @Type(() => StockItemTransactionDto)
  stockItemTransactions: StockItemTransactionDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];

  @Type(() => CouponDto)
  freeCoupons: CouponDto[];

}
