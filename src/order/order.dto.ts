import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CoffeeToOrder, Rating, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  createdAt: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  user: User;
  @ApiProperty()
  coffeeToOrder: CoffeeToOrder[];

  constructor({
    id,
    totalPrice,
    createdAt,
    userId,
    user,
    coffeeToOrder,
  }: OrderDto) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.createdAt = createdAt;
    this.userId = userId;
    this.user = user;
    this.coffeeToOrder = [];
  }
}
