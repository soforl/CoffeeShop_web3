import {
  Param,
  Controller,
  Body,
  NotImplementedException,
  Post,
  Get,
  Delete,
  ParseIntPipe,
  NotFoundException,
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
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { CreateOrderDto } from './create-order.dto';
import { ValidationExceptionFilter } from '../validation/validationExceptionFilter';

@ApiBearerAuth()
@UseFilters(new ValidationExceptionFilter())
@ApiTags('order')
@Controller('order')
export class OrderController {
  private readonly orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  @Post('/createOrder')
  @ApiOperation({
    summary: 'create order',
  })
  @ApiCreatedResponse({ type: OrderEntity })
  @ApiResponse({
    status: '2XX',
    description: 'order was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  createOrder(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @Get('/findAllOrders')
  @ApiOperation({
    summary: 'find orders',
  })
  @ApiResponse({
    status: '2XX',
    description: 'orders were found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findAllOrders() {
    return this.orderService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'find order',
  })
  @ApiResponse({
    status: '2XX',
    description: 'order was found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findOrder(@Param('order id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'delete order',
  })
  @ApiResponse({
    status: '2XX',
    description: 'order was deleted',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  deleteOrder(@Param('order id', ParseIntPipe) id: number) {
    return this.orderService.remove(id);
  }



}
