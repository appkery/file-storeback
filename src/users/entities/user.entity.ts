import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(type => Role, role => role.user)
  roles: Role[];
}
