import { Order, Rating } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  orders: Order[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  ratings: Rating[];

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.orders = [];
    this.createdAt = createdAt;
    this.ratings = [];
  }
}

// import { ApiProperty } from '@nestjs/swagger';
//
// export class CreateUserDto {
//   @ApiProperty()
//   email: string;
//   @ApiProperty()
//   firstName: string;
//   @ApiProperty()
//   lastName: string;
//   @ApiProperty()
//   password: string;
// }
