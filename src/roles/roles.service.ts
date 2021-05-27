import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from 'src/graphql';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    return this.rolesRepository.save(createRoleInput);
  }

  async findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOne(id);
  }

  async update(id: number, updateRoleInput: UpdateRoleInput): Promise<UpdateResult> {
    return this.rolesRepository.update(id, updateRoleInput);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.rolesRepository.delete(id);
  }
}
