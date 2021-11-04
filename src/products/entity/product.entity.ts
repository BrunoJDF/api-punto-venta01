import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from './category.entity';

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

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({
    name: 'products_categories',
    joinColumn: {
      name: 'product_id'
    },
    inverseJoinColumn: {
      name: "category_id"
    },
  })
  categories: Category[];
}
