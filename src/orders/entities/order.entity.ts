import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { UserOrder } from 'src/graphql';
import { User } from 'src/users/entities/user.entity';
import { Crud } from 'src/crud.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class Order extends Crud {
  @Column({
    type: 'enum',
    enum: UserOrder,
    default: UserOrder.CUSTOMER,
  })
  order: UserOrder;

  @ManyToOne((type) => User, (user) => user.orders, {
    cascade: true,
  })
  user: User;

  @ManyToOne((type) => Payment, (payment) => payment.orders, {
    cascade: true,
  })
  payment: Payment;

  @ManyToMany((type) => Product, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];
}
