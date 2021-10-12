import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column()
  roles: string;

  @OneToMany((type) => Order, (order) => order.user)
  orders: Order[];

  @Column({ default: true })
  is_active: boolean;
}
