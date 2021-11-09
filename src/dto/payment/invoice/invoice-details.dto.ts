import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../core/base.dto';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDto } from '../../product/product.dto';
import { ProductAttributeDto } from '../../product/product-attribute.dto';
import { InvoiceDto } from './invoice.dto';

export class InvoiceDetailsDto extends BaseDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  additional: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Should be a string' })
  note: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt({ message: 'Quantity should be an integer!' })
  @Min(1)
  quantity: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;

  @Type(() => ProductDto)
  product: ProductDto;

  @Type(() => ProductAttributeDto)
  productAttribute: ProductAttributeDto;

  @Type(() => InvoiceDto)
  invoice: InvoiceDto;
}
