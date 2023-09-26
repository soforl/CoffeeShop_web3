import { Order, Rating, User } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserEntity implements User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
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
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  hash: string;
  @ApiProperty()
  hashRt: string;
}
