import { Role } from "../../graphql";

export class CreateUserInput {
  first_name: string;
  last_name: string;
  is_active: boolean;
  roles: Role[];
}
