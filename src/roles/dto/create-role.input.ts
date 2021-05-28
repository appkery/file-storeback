import { User } from '../../users/entities/user.entity';

export class CreateRoleInput {
  id: number;
  role: string;
  users: User[];
}
