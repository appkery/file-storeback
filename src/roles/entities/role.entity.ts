import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { UserRole } from 'src/graphql';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CUSTOMER
  })
  role: UserRole;

  @ManyToOne(type => User, user => user.roles)
  user: User;
}
