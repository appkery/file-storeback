import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Crud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @Column()
  deleted_at: Date
}
