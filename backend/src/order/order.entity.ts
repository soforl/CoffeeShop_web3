import { CoffeeToOrder, Order, Rating, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class OrderEntity implements Order {
  @ApiProperty()
  id: number;
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  user: User;
  @ApiProperty()
  coffeeToOrder: CoffeeToOrder[];
  @ApiProperty()
  userId: number;
}
