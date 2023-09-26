import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatingDto } from './create-rating.dto';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  create(createRatingDto: CreateRatingDto) {
    return this.prisma.rating.create({ data: createRatingDto });
  }
  findAll() {
    return this.prisma.rating.findMany();
  }

  async findOne(id: number) {
    return this.prisma.rating.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.rating.delete({ where: { id } });
  }
}
