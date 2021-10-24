import { Crud } from 'src/crud.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Payment extends Crud {
  @Column()
  method: string;

  @OneToMany((type) => Order, (order) => order.payment, {
    cascade: true,
  })
  orders: Order[];
}
