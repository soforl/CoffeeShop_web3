import { Coffee, Rating, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RatingEntity implements Rating {
  @ApiProperty()
  id: number;
  @ApiProperty()
  @IsString()
  rate: string;
  @ApiProperty()
  coffee: Coffee;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  user: User;
  @ApiProperty()
  coffeeid: number;
}
