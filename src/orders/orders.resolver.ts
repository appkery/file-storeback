import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { CreateOrderInput } from 'src/graphql';
import { UpdateOrderInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query('getOrders')
  @UseGuards(GqlJwtGuard)
  findAll() {
    return this.ordersService.findAll();
  }

  @Query('getOrder')
  @UseGuards(GqlJwtGuard)
  findOne(@Args('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation('createOrder')
  @UseGuards(GqlJwtGuard)
  create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Mutation('updateOrder')
  @UseGuards(GqlJwtGuard)
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation('deleteOrder')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.ordersService.delete(id);
  }
}
