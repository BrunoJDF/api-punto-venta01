import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategoryPt11636001181155 implements MigrationInterface {
    name = 'createCategoryPt11636001181155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("created_date_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_date_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
