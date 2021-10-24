import { Crud } from 'src/crud.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Comment extends Crud {
  @Column()
  content: string;

  @ManyToOne((type) => User, (user) => user.comments, {
    cascade: true,
  })
  user: User;

  @ManyToOne((type) => Post, (post) => post.comments, {
    cascade: true,
  })
  post: Post;
}
