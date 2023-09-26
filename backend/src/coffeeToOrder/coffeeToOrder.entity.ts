import { CoffeeToOrder } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class CoffeeToOrderEntity implements CoffeeToOrder {
  @ApiProperty()
  coffeeId: number;
  @ApiProperty()
  id: number;
  @ApiProperty()
  orderId: number;
}
