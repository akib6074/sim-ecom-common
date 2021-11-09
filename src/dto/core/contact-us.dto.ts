import { BaseDto } from './base.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';
import { Bool } from '../../enum/bool.enum';

export class ContactUsDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEmail()
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  message: string;

  @ApiProperty({ default: Bool.No })
  @IsNotEmpty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  isSms: Bool;

  @ApiProperty({ default: Bool.Yes })
  @IsNotEmpty()
  @IsInt({ message: 'Must be an integer value' })
  @IsEnum(Bool, { message: 'Can be either 0 or 1' })
  isEmail: Bool;

  @ApiProperty()
  @ValidateIf((o) => o.isSms === Bool.Yes)
  @IsNotEmpty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(30, { message: 'Maximum 30 character supported' })
  phone: string;
}
