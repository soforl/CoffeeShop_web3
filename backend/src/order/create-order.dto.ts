import { ApiProperty } from '@nestjs/swagger';
import {IsDate} from "class-validator";

export class CreateOrderDto {
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  @IsDate()
  createdAt: Date;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  coffeeToOrderId: number[];
}
