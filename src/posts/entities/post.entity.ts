import { Comment } from 'src/comments/entities/comment.entity';
import { Crud } from 'src/crud.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Post extends Crud {
  @Column()
  content: string;

  @ManyToOne((type) => User, (user) => user.posts, {
    cascade: true,
  })
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.post, {
    cascade: true,
  })
  comments: Comment[];
}
