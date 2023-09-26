import {
  Param,
  Controller,
  Body,
  NotImplementedException,
  Post,
  Get,
  Delete,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CoffeeService } from './coffee.service';
import { CoffeeEntity } from './coffee.entity';
import { CreateCoffeeDto } from './create-coffee.dto';
import { ValidationExceptionFilter } from '../validation/validationExceptionFilter';
@ApiBearerAuth()
@UseFilters(new ValidationExceptionFilter())
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
  @ApiCreatedResponse({ type: CoffeeEntity })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  createCoffee(@Body() dto: CreateCoffeeDto) {
    return this.coffeeService.create(dto);
  }

  @Get('/findAllCoffee')
  @ApiOperation({
    summary: 'find all coffee',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee were found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findAllCoffee() {
    try {
      return this.coffeeService.findAll();
    } catch (e) {
      console.log(e);
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'delete coffee',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was deleted',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  deleteCoffee(@Param('coffee id', ParseIntPipe) id: number) {
    return this.coffeeService.remove(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'find coffee',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findCoffee(@Param('coffee id', ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }
}
