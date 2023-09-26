import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsString()
  rate: string;
  @ApiProperty()
  coffeeid: number;
  @ApiProperty()
  @IsInt()
  userId: number;
}
