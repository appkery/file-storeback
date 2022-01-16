import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';
import { CreateAssetInput, UpdateAssetInput } from 'src/graphql';
import { AssetsService } from './assets.service';

@Resolver('Asset')
export class AssetsResolver {
  constructor(private readonly assetsService: AssetsService) {}

  @Query('assets')
  findAll() {
    return this.assetsService.findAll();
  }

  @Query('asset')
  findOne(@Args('id') id: number) {
    return this.assetsService.findOne(id);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation('createAsset')
  create(@Args('createAssetInput') createAssetInput: CreateAssetInput) {
    return this.assetsService.create(createAssetInput);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation('updateAsset')
  update(@Args('updateAssetInput') updateAssetInput: UpdateAssetInput) {
    return this.assetsService.update(updateAssetInput);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation('deleteAsset')
  delete(@Args('id') id: number) {
    return this.assetsService.delete(id);
  }
}
