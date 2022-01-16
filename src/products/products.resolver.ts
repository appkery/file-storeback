import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput, UpdateProductInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query('getProducts')
  findAll() {
    return this.productsService.findAll();
  }

  @Query('getProduct')
  findOne(@Args('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation('createProduct')
  @UseGuards(GqlJwtGuard)
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Mutation('updateProduct')
  @UseGuards(GqlJwtGuard)
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update( updateProductInput);
  }

  @Mutation('deleteProduct')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.productsService.delete(id);
  }
}
