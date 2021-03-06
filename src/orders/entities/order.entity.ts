import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Crud } from 'src/crud.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class Order extends Crud {
  @ManyToOne((type) => User, (user) => user.orders)
  user: User;

  @ManyToMany((type) => Product)
  @JoinTable()
  products: Product[];

  @Column()
  quantity?: number;

  @ManyToOne((type) => Payment, (payment) => payment.orders)
  payment: Payment;
}
