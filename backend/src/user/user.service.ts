// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateUserDto } from './create-user.dto';
// import { PrismaClient } from '@prisma/client';
//
// @Injectable()
// export class UserService {
//   constructor(private prisma: PrismaService) {}
//
//   async create(createUserDto: CreateUserDto) {
//     // const existUser = await this.prisma.user.findFirst({
//     //   where: { email: createUserDto.email },
//     // });
//     // if (existUser) {
//     //   throw new Error('user was previously created');
//     // }
//     // const user = this.prisma.user.create({ data: createUserDto });
//     // const userDto = new UserTokenDto(user);
//     // const tokens = this.token.generateTokens({ ...userDto });
//     // console.log(tokens);
//     // await this.token.saveToken(userDto.id, (await tokens).refreshToken);
//     // return {
//     //   ...tokens,
//     //   user: userDto,
//     // };
//     return this.prisma.user.create({ data: createUserDto });
//   }
//
//   findAll() {
//     return this.prisma.user.findMany();
//   }
//
//   async findOne(id: number) {
//     return this.prisma.user.findUnique({ where: { id } });
//   }
//
//   remove(id: number) {
//     return this.prisma.user.delete({ where: { id } });
//   }
// }
