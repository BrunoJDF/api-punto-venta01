import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', unique: true })
  description: string;
  @Column({ type: 'numeric' })
  price: number;
  @Column({ type: 'text' })
  category: string;
  @Column({ type: 'int' })
  stock: number;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'create_date' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'last_update_date' })
  lastUpdateDate: Date;
}
