
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserRole {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}

export class CreateRoleInput {
    role: UserRole;
}

export class UpdateRoleInput {
    id: number;
    role: UserRole;
}

export class CreateUserInput {
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: CreateRoleInput[];
}

export class UpdateUserInput {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: UpdateRoleInput[];
}

export class Role {
    id: number;
    role: UserRole;
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

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): DeleteResult | Promise<DeleteResult>;
}

export class User {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: Role[];
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

export type Json = any;
