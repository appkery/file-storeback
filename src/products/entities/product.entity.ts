import { Asset } from 'src/assets/entities/asset.entity';
import { Crud } from 'src/crud.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Product extends Crud {
  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToMany((type) => Asset, {
    cascade: true,
  })
  @JoinTable()
  assets: Asset[];
}
