import { Entity, Column, OneToMany } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Crud } from 'src/crud.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Role } from 'src/graphql';

@Entity()
export class User extends Crud {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.CUSTOMER,
  })
  roles: Role;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany((type) => Post, (post) => post.user, {
    cascade: true,
  })
  posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user, {
    cascade: true,
  })
  comments: Comment[];

  @OneToMany((type) => Order, (order) => order.user, {
    cascade: true,
  })
  orders: Order[];
}
