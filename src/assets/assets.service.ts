import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset, CreateAssetInput, UpdateAssetInput } from 'src/graphql';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetsRepository: Repository<Asset>,
  ) {}

  async findAll(): Promise<Asset[]> {
    return await this.assetsRepository.find();
  }

  async findOne(id: number): Promise<Asset> {
    return await this.assetsRepository.findOne(id);
  }

  async create(createAssetInput: CreateAssetInput): Promise<Asset> {
    return await this.assetsRepository.save(createAssetInput);
  } 

  async update(updateAssetInput: UpdateAssetInput): Promise<unknown> {
    return await this.assetsRepository.save(updateAssetInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.assetsRepository.delete(id);
  }
}
