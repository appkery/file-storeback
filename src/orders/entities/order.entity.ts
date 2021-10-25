import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Crud } from 'src/crud.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class Order extends Crud {
  @ManyToOne((type) => User, (user) => user.orders)
  user: User;

  @ManyToOne((type) => Payment, (payment) => payment.orders)
  payment: Payment;

  @ManyToMany((type) => Product, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];
}
