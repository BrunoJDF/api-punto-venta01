import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'numeric' })
  price: number;
  @Column({ type: 'text' })
  category: string;
  @Column({ type: 'int' })
  stock: number;
  @Column({ type: 'date', name: 'create_date' })
  createDate: Date;
  @Column({ type: 'date', name: 'last_update_date' })
  lastUpdateDate: Date;
}
