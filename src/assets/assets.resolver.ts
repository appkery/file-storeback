import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AssetsService } from './assets.service';
import { CreateAssetInput } from './dto/create-asset.input';
import { UpdateAssetInput } from './dto/update-asset.input';

@Resolver('Asset')
export class AssetsResolver {
  constructor(private readonly assetsService: AssetsService) {}

  @Mutation('createAsset')
  create(@Args('createAssetInput') createAssetInput: CreateAssetInput) {
    return this.assetsService.create(createAssetInput);
  }

  @Query('assets')
  findAll() {
    return this.assetsService.findAll();
  }

  @Query('asset')
  findOne(@Args('id') id: number) {
    return this.assetsService.findOne(id);
  }

  @Mutation('updateAsset')
  update(@Args('updateAssetInput') updateAssetInput: UpdateAssetInput) {
    return this.assetsService.update(updateAssetInput.id, updateAssetInput);
  }

  @Mutation('removeAsset')
  remove(@Args('id') id: number) {
    return this.assetsService.remove(id);
  }
}
