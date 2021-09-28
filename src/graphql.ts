
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
    MEMBER = "MEMBER",
    GUEST = "GUEST"
}

export class GetAuthInput {
    username: string;
    password: string;
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

export class GetUserInput {
    username: string;
}

export class CreateUserInput {
    username: string;
    password: string;
    full_name: string;
    roles?: CreateRoleInput[];
    is_active?: boolean;
}

export class UpdateUserInput {
    id: number;
    username?: string;
    password?: string;
    full_name?: string;
    roles?: UpdateRoleInput[];
    is_active?: boolean;
}

export abstract class IMutation {
    abstract login(getAuthInput?: GetAuthInput): LoginResult | Promise<LoginResult>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): UpdateResult | Promise<UpdateResult>;

    abstract removeOrder(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;

    abstract updateRole(updateRoleInput: UpdateRoleInput): UpdateResult | Promise<UpdateResult>;

    abstract removeRole(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteUser(id: number): DeleteResult | Promise<DeleteResult>;
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

export class LoginResult {
    access_token?: Json;
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

    abstract getUser(getUserInput: GetUserInput): User | Promise<User>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export class Role {
    id: number;
    role: UserRole;
}

export class User {
    id: number;
    username: string;
    password: string;
    full_name: string;
    roles?: Role[];
    is_active?: boolean;
}

export type Json = any;
