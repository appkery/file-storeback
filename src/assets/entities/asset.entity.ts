import { Crud } from 'src/crud.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Asset extends Crud {
  @Column()
  filename: string;
}
