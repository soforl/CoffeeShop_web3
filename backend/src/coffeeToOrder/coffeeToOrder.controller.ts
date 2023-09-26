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
import { CoffeeToOrderService } from './coffeeToOrder.service';
import { CoffeeToOrderEntity } from './coffeeToOrder.entity';
import { CreateCoffeeToOrderDto } from './create-coffeeToOrder.dto';
import { ValidationExceptionFilter } from '../validation/validationExceptionFilter';

@ApiBearerAuth()
@UseFilters(new ValidationExceptionFilter())
@ApiTags('coffeeToOrder')
@Controller('coffeeToOrder')
export class CoffeeToOrderController {
  private readonly coffeeToOrderService: CoffeeToOrderService;

  constructor(coffeeToOrderService: CoffeeToOrderService) {
    this.coffeeToOrderService = coffeeToOrderService;
  }

  @Post('/addCoffeeToOrder')
  @ApiOperation({
    summary: 'add coffee to order',
  })
  @ApiCreatedResponse({ type: CoffeeToOrderEntity })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was added to order',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  addCoffeeToOrder(@Body() dto: CreateCoffeeToOrderDto) {
    return this.coffeeToOrderService.create(dto);
  }

  @Get('/findAllCoffeeFromOrder')
  @ApiOperation({
    summary: 'find coffee from orders',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee from order',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findAllCoffeeFromOrder() {
    return this.coffeeToOrderService.findAll();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'deleting coffee from order',
  })
  @ApiResponse({
    status: '2XX',
    description: 'coffee was deleted from order',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  deleteCoffeeOrder(@Param('order id', ParseIntPipe) id: number) {
    return this.coffeeToOrderService.remove(id);
  }


}
