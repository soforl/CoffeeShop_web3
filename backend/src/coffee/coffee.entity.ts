import { Coffee, CoffeeToOrder, Rating } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {IsString} from "class-validator";

export class CoffeeEntity implements Coffee {
  @ApiProperty()
  id: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty()
  coffeeToOrder: CoffeeToOrder[];
  @ApiProperty()
  ratings: Rating[];
  @ApiProperty()
  image: string;
}
