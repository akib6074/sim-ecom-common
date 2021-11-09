import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow, IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

import { BaseDto } from '../core/base.dto';
import { Point } from '../location/point';
import { ProductDto } from '../product/product.dto';
import { MerchantDto } from '../user/merchant.dto';
import { ShopReviewDto } from './shop-review.dto';
import { ShopTypeDto } from './shop-type.dto';
import { CouponDto } from '../coupon/coupon.dto';

export class ShopDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  domain: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  @IsUrl({}, { message: 'Must be a valid url' })
  url: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  description: string;

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
  @Allow()
  @Type(() => Point)
  geoLocation: Point;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  shopProfileImage: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  shopCoverImage: string;

  @Type(() => ShopTypeDto)
  shopType: ShopTypeDto;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => ProductDto)
  products: ProductDto[];

  @Type(() => ShopReviewDto)
  reviews: ShopReviewDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];
}
