import { BaseDto } from '../../core/base.dto';
import { AttributeGroupDto } from './attribute-group.dto';
import { ProductAttributeDto } from '../product-attribute.dto';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AttributeDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Position must be defined!' })
  @IsInt({ message: 'Must be an integer value' })
  position: number;

  @Type(() => AttributeGroupDto)
  attributeGroup: AttributeGroupDto;

  @Type(() => ProductAttributeDto)
  productAttributes: ProductAttributeDto[];
}
