import {MigrationInterface, QueryRunner} from "typeorm";

export class init1635430252448 implements MigrationInterface {
    name = 'init1635430252448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "description" text NOT NULL, "price" numeric NOT NULL, "category" text NOT NULL, "stock" integer NOT NULL, "create_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_update_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_29a733971f71626611bb3808ebe" UNIQUE ("description"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
