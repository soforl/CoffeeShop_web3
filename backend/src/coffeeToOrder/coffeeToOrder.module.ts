import { Module } from '@nestjs/common';
import { CoffeeToOrderController } from './coffeeToOrder.controller';
import { CoffeeToOrderService } from './coffeeToOrder.service';

@Module({
  controllers: [CoffeeToOrderController],
  providers: [CoffeeToOrderService],
  exports: [CoffeeToOrderService],
})
export class OrderModule {}
