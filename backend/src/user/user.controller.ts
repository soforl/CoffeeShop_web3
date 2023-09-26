// import {
//   Param,
//   Controller,
//   Body,
//   Post,
//   Get,
//   ParseIntPipe,
//   Delete,
//   UseFilters,
// } from '@nestjs/common';
//
// import {
//   ApiBadRequestResponse,
//   ApiBearerAuth,
//   ApiBody,
//   ApiCreatedResponse,
//   ApiOperation,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { UserService } from './user.service';
// import { UserEntity } from './user.entity';
// import { CreateUserDto } from './create-user.dto';
// import { ValidationExceptionFilter } from '../validation/validationExceptionFilter';
// import { response } from 'express';
//
// @ApiBearerAuth()
// @UseFilters(new ValidationExceptionFilter())
// @ApiTags('user')
// @Controller('user')
// export class UserController {
//   private readonly userService: UserService;
//
//   constructor(userService: UserService) {
//     this.userService = userService;
//   }
//
//   @Post('/registerUser')
//   @ApiOperation({
//     summary: 'register user',
//   })
//   @ApiCreatedResponse({ type: UserEntity })
//   @ApiResponse({
//     status: '2XX',
//     description: 'user was created',
//   })
//   @ApiBadRequestResponse({ description: 'bad request' })
//   async registerUser(@Body() dto: CreateUserDto) {
//     try {
//       const userData = await this.userService.create(dto);
//       // console.log(userData);
//       // response.cookie('refreshToken', userData.refreshToken, {
//       //   maxAge: 30 * 24 * 60 * 60 * 1000,
//       //   httpOnly: true,
//       // });
//       return userData;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   @Get('/allUsers')
//   @ApiOperation({
//     summary: 'find all users',
//   })
//   @ApiResponse({
//     status: '2XX',
//     description: 'users were found',
//   })
//   @ApiBadRequestResponse({ description: 'bad request' })
//   findAll() {
//     return this.userService.findAll();
//   }
//
//   @Get(':id')
//   @ApiOperation({
//     summary: 'find one user',
//   })
//   @ApiCreatedResponse({ type: UserEntity })
//   @ApiResponse({
//     status: '2XX',
//     description: 'user was found',
//   })
//   @ApiBadRequestResponse({ description: 'bad request' })
//   async findUser(@Param('id', ParseIntPipe) id: number) {
//     return this.userService.findOne(id);
//   }
//
//   @Delete(':id')
//   @ApiOperation({
//     summary: 'delete user',
//   })
//   @ApiResponse({
//     status: '2XX',
//     description: 'user was deleted',
//   })
//   @ApiBadRequestResponse({ description: 'bad request' })
//   delete(@Param('id', ParseIntPipe) id: number) {
//     return this.userService.remove(id);
//   }
// }
