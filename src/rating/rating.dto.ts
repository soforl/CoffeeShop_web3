import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Coffee, User } from '@prisma/client';
import {ApiProperty} from "@nestjs/swagger";

export class RatingDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  rate: string;
  @ApiProperty()
  coffee: Coffee;
  @ApiProperty()
  coffeeId: number;
  @ApiProperty()
  user: User;
  @ApiProperty()
  userId: number;

  constructor({ id, rate, coffee, coffeeId, user, userId }: RatingDto) {
    this.id = id;
    this.rate = rate;
    this.coffee = coffee;
    this.coffeeId = coffeeId;
    this.user = user;
    this.userId = userId;
  }
}
