import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateOrderInput } from 'src/graphql';
import { UpdateOrderInput } from 'src/graphql';
import { Order } from 'src/graphql';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderInput: CreateOrderInput): Promise<Order> {
    return await this.ordersRepository.save(createOrderInput);
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findOne(id);
  }

  async update(
    id: number,
    updateOrderInput: UpdateOrderInput,
  ): Promise<UpdateResult> {
    return await this.ordersRepository.update(id, updateOrderInput);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.ordersRepository.delete(id);
  }
}
