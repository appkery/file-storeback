import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;
}
