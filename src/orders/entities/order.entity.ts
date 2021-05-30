import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserOrder } from 'src/graphql';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserOrder,
    default: UserOrder.CUSTOMER
  })
  order: UserOrder;
}
