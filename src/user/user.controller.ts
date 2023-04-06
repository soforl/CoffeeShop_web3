import {
  Param,
  Controller,
  Body,
  NotImplementedException,
  UnauthorizedException, Post, Get,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post('/registerUser')
  @ApiOperation({
    summary: 'register user',
  })
  @ApiBody({ type: UserDto })
  @ApiResponse({
    status: '2XX',
    description: 'user was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async registerUser(@Body() dto: UserDto): Promise<UserDto> {
    throw new NotImplementedException();
  }

  @Get('/loginUser')
  @ApiOperation({
    summary: 'login user',
  })
  @ApiResponse({
    status: '2XX',
    description: 'user was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async loginUser(
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    return new UnauthorizedException();
  }
}
