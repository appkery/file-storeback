import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserRole } from '../../graphql';

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
}
