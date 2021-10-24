
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

export class CreateAssetInput {
    filename?: string;
}

export class UpdateAssetInput {
    id: number;
    filename?: string;
}

export class GetAuthInput {
    username: string;
    password: string;
}

export class CreateCommentInput {
    content?: string;
}

export class UpdateCommentInput {
    id: number;
    content?: string;
}

export class CreateOrderInput {
    order: UserOrder;
}

export class UpdateOrderInput {
    id: number;
    order: UserOrder;
    products?: UpdateProductInput[];
}

export class CreatePaymentInput {
    method?: string;
}

export class UpdatePaymentInput {
    id: number;
    method?: string;
    orders?: UpdateOrderInput[];
}

export class CreatePostInput {
    content?: string;
}

export class UpdatePostInput {
    id: number;
    content?: string;
    comments?: UpdatePostInput[];
}

export class CreateProductInput {
    name?: string;
    price?: number;
    quantity?: number;
}

export class UpdateProductInput {
    id: number;
    name?: string;
    price?: number;
    quantity?: number;
    assets?: UpdateAssetInput[];
}

export class GetUserInput {
    username: string;
}

export class CreateUserInput {
    username: string;
    password: string;
    fullname: string;
    roles?: string;
    is_active?: boolean;
}

export class UpdateUserInput {
    id: number;
    username?: string;
    password?: string;
    fullname?: string;
    roles?: string;
    is_active?: boolean;
    posts?: UpdatePostInput[];
    comments?: UpdateCommentInput[];
    orders?: UpdateOrderInput[];
}

export class Asset {
    id?: number;
    filename?: string;
}

export abstract class IQuery {
    abstract assets(): Asset[] | Promise<Asset[]>;

    abstract asset(id: number): Asset | Promise<Asset>;

    abstract getComments(): Comment[] | Promise<Comment[]>;

    abstract getComment(id: number): Comment | Promise<Comment>;

    abstract getOrders(): Order[] | Promise<Order[]>;

    abstract getOrder(id: number): Order | Promise<Order>;

    abstract getPayments(): Payment[] | Promise<Payment[]>;

    abstract getPayment(id: number): Payment | Promise<Payment>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract getPost(id: number): Post | Promise<Post>;

    abstract getProducts(): Product[] | Promise<Product[]>;

    abstract getProduct(id: number): Product | Promise<Product>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract getUser(getUserInput: GetUserInput): User | Promise<User>;
}

export abstract class IMutation {
    abstract createAsset(createAssetInput: CreateAssetInput): Asset | Promise<Asset>;

    abstract updateAsset(updateAssetInput: UpdateAssetInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteAsset(id: number): DeleteResult | Promise<DeleteResult>;

    abstract login(getAuthInput?: GetAuthInput): LoginResult | Promise<LoginResult>;

    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteComment(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteOrder(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;

    abstract updatePayment(updatePaymentInput: UpdatePaymentInput): UpdateResult | Promise<UpdateResult>;

    abstract deletePayment(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): UpdateResult | Promise<UpdateResult>;

    abstract deletePost(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteProduct(id: number): DeleteResult | Promise<DeleteResult>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): UpdateResult | Promise<UpdateResult>;

    abstract deleteUser(id: number): DeleteResult | Promise<DeleteResult>;
}

export class Comment {
    id?: number;
    content?: string;
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
    products?: Product[];
}

export class Payment {
    id?: number;
    method?: string;
    orders?: Order[];
}

export class Post {
    id?: number;
    content?: string;
    comments?: Comment[];
}

export class Product {
    id?: number;
    name?: string;
    price?: number;
    quantity?: number;
    assets?: Asset[];
}

export class User {
    id: number;
    username: string;
    password: string;
    fullname: string;
    roles?: string;
    is_active?: boolean;
    posts?: Post[];
    comments?: Comment[];
    orders?: Order[];
}

export type Json = any;
