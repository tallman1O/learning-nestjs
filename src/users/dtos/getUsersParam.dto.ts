import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get User with a specific ID',
    example: 1234,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
