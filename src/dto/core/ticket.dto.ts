import { TicketStatus } from './../../enum/ticket-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserDto } from '../user/user.dto';
import { BaseDto } from './base.dto';
import { TicketDepartmentDto } from './ticket-department.dto';

export class TicketDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 character supported' })
  subject: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(600, { message: 'Maximum 600 character supported' })
  issueDetails: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(TicketStatus, { message: 'Must be a valid status [0-2]' })
  status: TicketStatus;

  @Type(() => TicketDepartmentDto)
  ticketDepartment: TicketDepartmentDto;

  @Type(() => UserDto)
  user: UserDto;
}
