
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

export class CreatePaymentInput {
    id?: number;
}

export class UpdatePaymentInput {
    id: number;
}

export class CreateProductInput {
    id?: number;
}

export class UpdateProductInput {
    id: number;
}

export class CreateRoleInput {
    role: string;
}

export class UpdateRoleInput {
    id: number;
    role: string;
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
    orders?: UpdateOrderInput[];
    is_active?: boolean;
}

export abstract class IMutation {
    abstract login(getAuthInput?: GetAuthInput): LoginResult | Promise<LoginResult>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): UpdateResult | Promise<UpdateResult>;

    abstract removeOrder(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;

    abstract updatePayment(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;

    abstract removePayment(id: number): Payment | Promise<Payment>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Product | Promise<Product>;

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

    abstract payments(): Payment[] | Promise<Payment[]>;

    abstract payment(id: number): Payment | Promise<Payment>;

    abstract products(): Product[] | Promise<Product[]>;

    abstract product(id: number): Product | Promise<Product>;

    abstract roles(): Role[] | Promise<Role[]>;

    abstract role(id: number): Role | Promise<Role>;

    abstract getUser(getUserInput: GetUserInput): User | Promise<User>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export class Payment {
    id?: number;
}

export class Product {
    id?: number;
}

export class Role {
    id: number;
    role: string;
    user?: User;
}

export class User {
    id: number;
    username: string;
    password: string;
    full_name: string;
    roles?: Role[];
    orders?: Order[];
    is_active?: boolean;
}

export type Json = any;
