import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserOrder } from 'src/graphql';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserOrder,
    default: UserOrder.CUSTOMER,
  })
  order: UserOrder;  

  @ManyToOne((type) => User, (user) => user.orders)
  user: User;
}
