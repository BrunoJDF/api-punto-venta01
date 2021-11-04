import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./base.entity";
import { Product } from "./product.entity";

@Entity()
export class Category extends Base {
    @PrimaryGeneratedColumn()
    private id: number;
    @Column({ type: 'text' })
    private description: string;

    @ManyToMany(() => Product, (product) => product.categories)
    products: Product[];
}