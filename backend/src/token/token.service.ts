// import { Injectable } from '@nestjs/common';
// const jwt = require('jsonwebtoken');
// import { PrismaService } from '../prisma/prisma.service';
//
// @Injectable()
// export class TokenService {
//   constructor(private prisma: PrismaService) {}
//   async generateTokens(payload) {
//     const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
//       expiresIn: '30m',
//     });
//     const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
//       expiresIn: '30d',
//     });
//     return {
//       accessToken,
//       refreshToken,
//     };
//   }
//
//   async saveToken(userId, refreshToken) {
//     console.log(userId, refreshToken);
//     const tokenData = await this.prisma.tokenInfo.findFirst({
//       where: {
//         userId,
//       },
//     });
//     if (tokenData) {
//       tokenData.refreshToken = refreshToken;
//       return this.prisma.tokenInfo.update({
//         where: { userId },
//         data: { refreshToken: refreshToken },
//       });
//     }
//     const token = this.prisma.tokenInfo.create({
//       data: {
//         userId: userId,
//         refreshToken,
//       },
//     });
//     return token;
//   }
// }
