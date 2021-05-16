
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
}

export class UpdateUserInput {
    id: number;
}

export class User {
    id: number;
    first_name: string;
    last_name: string;
    is_active?: boolean;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): User | Promise<User>;
}
