import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CoffeeToOrder, Rating } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CoffeeDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  coffeeToOrder: CoffeeToOrder[];
  @ApiProperty()
  ratings: Rating[];
  constructor({
    id,
    price,
    name,
    description,
    coffeeToOrder,
    ratings,
  }: CoffeeDto) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.description = description;
    this.coffeeToOrder = [];
    this.ratings = [];
  }
}
