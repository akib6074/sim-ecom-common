import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  IsEnum,
} from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { ProductDto } from '../product/product.dto';
import { UserDto } from '../user/user.dto';
import { ShopDto } from './shop.dto';
import { CategoryDto, ShopTypeDto } from '../dto.config';
import { PromotionType } from '../../enum/promotion-type.enum';

export class PromotionDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  startDate: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  endDate: Date | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  promotionCoverImage: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  titleColor: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  descriptionColor: string;

  @ApiProperty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(PromotionType, { message: 'Must be either 1, 2 or 3' })
  type: PromotionType;

  @Type(() => ShopDto)
  shop: ShopDto;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CategoryDto)
  category: CategoryDto;

  @Type(() => ShopTypeDto)
  shopType: ShopTypeDto;
}
