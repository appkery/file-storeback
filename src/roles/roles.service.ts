import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateRoleInput } from 'src/graphql';
import { UpdateRoleInput } from 'src/graphql';
import { Role } from 'src/graphql';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    return await this.rolesRepository.save(createRoleInput);
  }

  async findAll(): Promise<Role[]> {
    return await this.rolesRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    return await this.rolesRepository.findOne(id);
  }

  async update(id: number, updateRoleInput: UpdateRoleInput): Promise<UpdateResult> {
    return await this.rolesRepository.update(id, updateRoleInput);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.rolesRepository.delete(id);
  }
}
