
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export class UpdateUserInput {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export class User {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export class UpdateResult {
    raw?: JSON;
    affected?: number;
    generatedMaps?: JSON;
}

export class DeleteResult {
    raw?: JSON;
    affected?: number;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): UpdateResult | Promise<UpdateResult>;

    abstract removeUser(id: number): DeleteResult | Promise<DeleteResult>;
}

export type JSON = any;
