import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { CreatePaymentInput } from 'src/graphql';
import { UpdatePaymentInput } from 'src/graphql';

@Resolver('Payment')
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Mutation('createPayment')
  create(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Query('payments')
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query('payment')
  findOne(@Args('id') id: number) {
    return this.paymentsService.findOne(id);
  }

  @Mutation('updatePayment')
  update(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentsService.update(updatePaymentInput.id, updatePaymentInput);
  }

  @Mutation('removePayment')
  remove(@Args('id') id: number) {
    return this.paymentsService.remove(id);
  }
}
