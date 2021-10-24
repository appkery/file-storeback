import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from 'src/graphql';
import { UpdatePaymentInput } from 'src/graphql';

@Injectable()
export class PaymentsService {
  create(createPaymentInput: CreatePaymentInput) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentInput: UpdatePaymentInput) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}