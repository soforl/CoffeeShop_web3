import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCoffeeDto } from './create-coffee.dto';

@Injectable()
export class CoffeeService {
  constructor(private prisma: PrismaService) {}

  create(createCoffeeDto: CreateCoffeeDto) {
    return this.prisma.coffee.create({ data: createCoffeeDto });
  }

  findAll() {
    return this.prisma.coffee.findMany();
  }

  findOne(id: number) {
    return this.prisma.coffee.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.coffee.delete({ where: { id } });
  }
}
