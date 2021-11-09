import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { PromotionType } from '../../../enum/promotion-type.enum';
import { PromotionDto } from '../promotion.dto';

export class CreatePromotionDto extends PromotionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shop ID' })
  shopID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Product ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid product ID' })
  productID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEnum(PromotionType, { message: 'Must be a valid user type [1-3]' })
  type: PromotionType;

  @ApiProperty()
  @IsNotEmpty({ message: 'Shop Type ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shop type ID' })
  shopTypeID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Category ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid category ID' })
  categoryID: string;
}
