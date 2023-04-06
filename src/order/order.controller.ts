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
import { OrderService } from './order.service';
import { OrderDto } from './order.dto';

@ApiBearerAuth()
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
  @ApiBody({ type: OrderDto })
  @ApiResponse({
    status: '2XX',
    description: 'order was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async createRating(@Body() dto: OrderDto): Promise<OrderDto> {
    throw new NotImplementedException();
  }

  @Delete('/deleteOrder')
  @ApiOperation({
    summary: 'delete order',
  })
  @ApiResponse({
    status: '2XX',
    description: 'order was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async deleteOrder(@Param('order id') id: number): Promise<OrderDto> {
    throw new NotImplementedException();
  }

  @Get('/findOrder')
  @ApiOperation({
    summary: 'find order',
  })
  @ApiResponse({
    status: '2XX',
    description: 'order was found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async findOrder(@Param('order id') id: number) {
    return new NotImplementedException();
  }
}
