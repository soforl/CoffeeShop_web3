import {
  Param,
  Controller,
  Body,
  NotImplementedException,
  Post,
  Get,
  Delete,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CoffeeService } from './coffee.service';
import { CoffeeDto } from './coffee.dto';
@ApiBearerAuth()
@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  private readonly coffeeService: CoffeeService;

  constructor(coffeeService: CoffeeService) {
    this.coffeeService = coffeeService;
  }

  @Post('/createCoffee')
  @ApiOperation({
    summary: 'create coffee',
  })
  @ApiBody({ type: CoffeeDto })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async createRating(@Body() dto: CoffeeDto): Promise<CoffeeDto> {
    throw new NotImplementedException();
  }

  @Delete('/deleteCoffee')
  @ApiOperation({
    summary: 'delete coffee',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async deleteOrder(@Param('coffee id') id: number): Promise<CoffeeDto> {
    throw new NotImplementedException();
  }

  @Get('/findCoffee')
  @ApiOperation({
    summary: 'find coffee',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async findCoffee(@Param('coffee id') id: number) {
    return new NotImplementedException();
  }
}
