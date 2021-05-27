
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateRoleInput {
    role: string;
}

export class UpdateRoleInput {
    id: number;
    role: string;
}

export class CreateUserInput {
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export class UpdateUserInput {
    id?: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export class Role {
    id: number;
    role: string;
}

export class UpdateResult {
    raw?: Json;
    affected?: number;
    generatedMaps?: Json;
}

export class DeleteResult {
    raw?: Json;
    affected?: number;
}

export abstract class IQuery {
    abstract roles(): Role[] | Promise<Role[]>;

    abstract role(id: number): Role | Promise<Role>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;

    abstract updateRole(updateRoleInput: UpdateRoleInput): UpdateResult | Promise<UpdateResult>;

    abstract removeRole(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): UpdateResult | Promise<UpdateResult>;

    abstract removeUser(id: number): DeleteResult | Promise<DeleteResult>;
}

export class User {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: Role[];
}

export type Json = any;
