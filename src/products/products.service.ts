import { Injectable } from '@nestjs/common';
import { CreateProductInput } from 'src/graphql';
import { UpdateProductInput } from 'src/graphql';

@Injectable()
export class ProductsService {
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
