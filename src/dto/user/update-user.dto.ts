import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';
import { BaseDto } from '../../dto/core/base.dto';

export class UpdateUserDto extends BaseDto {
  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(65, { message: 'Maximum 65 characters supported' })
  firstName: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(65, { message: 'Maximum 65 characters supported' })
  lastName: string;

  @ApiProperty()
  @Exclude({ toPlainOnly: true })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  password: string;

  @ApiProperty()
  @IsString({ message: 'Must be string' })
  addressPlain: string;
}
