import { CreateDateColumn, Timestamp, UpdateDateColumn } from "typeorm";

export class Base {
    @CreateDateColumn({ name: 'created_date_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Timestamp;
    @UpdateDateColumn({ name: 'updated_date_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Timestamp;
}