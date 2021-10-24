import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput, Product, UpdateProductInput } from 'src/graphql';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne(id);
  }

  async create(createProductInput: CreateProductInput): Promise<Product> {
    return await this.productsRepository.save(createProductInput);
  }

  async update(updateProductInput: UpdateProductInput): Promise<unknown> {
    return await this.productsRepository.save(updateProductInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productsRepository.delete(id);
  }
}
