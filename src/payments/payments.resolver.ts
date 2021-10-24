import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePaymentInput, UpdatePaymentInput } from 'src/graphql';
import { PaymentsService } from './payments.service';

@Resolver('Payment')
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Query('getPayments')
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query('getPayment')
  findOne(@Args('id') id: number) {
    return this.paymentsService.findOne(id);
  }

  @Mutation('createPayment')
  create(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Mutation('updatePayment')
  update(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentsService.update(updatePaymentInput);
  }

  @Mutation('deletePayment')
  delete(@Args('id') id: number) {
    return this.paymentsService.delete(id);
  }
}
