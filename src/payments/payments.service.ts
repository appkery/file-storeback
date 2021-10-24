import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentInput, Payment, UpdatePaymentInput } from 'src/graphql';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async findAll(): Promise<Payment[]> {
    return await this.paymentsRepository.find();
  }

  async findOne(id: number): Promise<Payment> {
    return await this.paymentsRepository.findOne(id);
  }

  async create(createPaymentInput: CreatePaymentInput): Promise<Payment> {
    return await this.paymentsRepository.save(createPaymentInput);
  }

  async update(updatePaymentInput: UpdatePaymentInput): Promise<unknown> {
    return await this.paymentsRepository.save(updatePaymentInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.paymentsRepository.delete(id);
  }
}
