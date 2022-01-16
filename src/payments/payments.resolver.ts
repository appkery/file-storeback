import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';
import { CreatePaymentInput, UpdatePaymentInput } from 'src/graphql';
import { PaymentsService } from './payments.service';

@Resolver('Payment')
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Query('getPayments')
  @UseGuards(GqlJwtGuard)
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query('getPayment')
  @UseGuards(GqlJwtGuard)
  findOne(@Args('id') id: number) {
    return this.paymentsService.findOne(id);
  }

  @Mutation('createPayment')
  @UseGuards(GqlJwtGuard)
  create(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Mutation('updatePayment')
  @UseGuards(GqlJwtGuard)
  update(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentsService.update(updatePaymentInput);
  }

  @Mutation('deletePayment')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.paymentsService.delete(id);
  }
}
