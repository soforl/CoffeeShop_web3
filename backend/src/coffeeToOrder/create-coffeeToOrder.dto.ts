import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
export class CreateCoffeeToOrderDto {
  @ApiProperty()
  @IsInt()
  coffeeId: number;
  @ApiProperty()
  @IsInt()
  orderId: number;
}
