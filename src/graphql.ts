
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserOrder {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}

export enum UserRole {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}

export class CreateOrderInput {
    order: UserOrder;
}

export class UpdateOrderInput {
    id: number;
    order: UserOrder;
}

export class CreateRoleInput {
    role: UserRole;
}

export class UpdateRoleInput {
    id: number;
    role: UserRole;
}

export class CreateUserInput {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: CreateRoleInput[];
}

export class UpdateUserInput {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: UpdateRoleInput[];
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

export class Order {
    id: number;
    order: UserOrder;
}

export abstract class IQuery {
    abstract orders(): Order[] | Promise<Order[]>;

    abstract order(id: number): Order | Promise<Order>;

    abstract roles(): Role[] | Promise<Role[]>;

    abstract role(id: number): Role | Promise<Role>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): UpdateResult | Promise<UpdateResult>;

    abstract removeOrder(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;

    abstract updateRole(updateRoleInput: UpdateRoleInput): UpdateResult | Promise<UpdateResult>;

    abstract removeRole(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): DeleteResult | Promise<DeleteResult>;
}

export class Role {
    id: number;
    role: UserRole;
}

export class User {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    is_active?: boolean;
    roles?: Role[];
}

export type Json = any;
