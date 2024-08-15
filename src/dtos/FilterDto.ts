import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

class FilterParamDto {
  @ApiProperty()
  @IsString()
  readonly filterBy: string;

  @ApiProperty()
  @IsString()
  readonly operator: string;

  @ApiProperty()
  @IsString()
  readonly value: string;
}

export class FilterDto {
  @ApiProperty({
    type: [FilterParamDto],
  })
  @IsArray()
  @Type(() => FilterParamDto)
  readonly filters: FilterParamDto[];
}
