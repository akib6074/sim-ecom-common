import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { Type } from 'class-transformer';
import { ShopDto } from './shop.dto';
import { PromotionDto } from './promotion.dto';

export class ShopTypeDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(64, { message: 'Maximum 64 character supported' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(200, { message: 'Maximum 200 character supported' })
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  description: string;

  @Type(() => ShopDto)
  shops: ShopDto[];

  @Type(() => PromotionDto)
  promotions: PromotionDto[];
}
