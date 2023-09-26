import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCoffeeToOrderDto } from './create-coffeeToOrder.dto';

@Injectable()
export class CoffeeToOrderService {
  constructor(private prisma: PrismaService) {}

  create(createCoffeeToOrderDao: CreateCoffeeToOrderDto) {
    return this.prisma.coffeeToOrder.create({ data: createCoffeeToOrderDao });
  }

  findAll() {
    return this.prisma.coffeeToOrder.findMany();
  }

  findOne(id: number) {
    return this.prisma.coffeeToOrder.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.coffeeToOrder.delete({ where: { id } });
  }
}
