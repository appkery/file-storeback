import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { CreateOrderInput } from 'src/graphql';
import { UpdateOrderInput } from 'src/graphql';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query('getOrders')
  findAll() {
    return this.ordersService.findAll();
  }

  @Query('getOrder')
  findOne(@Args('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Mutation('updateOrder')
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation('deleteOrder')
  delete(@Args('id') id: number) {
    return this.ordersService.delete(id);
  }
}
