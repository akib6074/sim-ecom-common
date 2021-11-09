import { UserType } from '../../../enum/user-type.enum';
import { UserDto } from '../user.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsEnum(UserType, { message: 'Must be a valid user type [1-6]' })
  type: UserType;

  @ApiProperty()
  @IsNotEmpty({ message: 'District ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid district ID' })
  district: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Thana ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid thana ID' })
  thana: string;

  @ApiProperty()
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Must be non empty' })
  addressPlain: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'profileImageUrl must be a string' })
  profileImageUrl: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  captcha: string;
}
