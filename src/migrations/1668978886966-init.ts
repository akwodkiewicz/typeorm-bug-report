import { MigrationInterface, QueryRunner } from "typeorm";

export class init1668978886966 implements MigrationInterface {
    name = 'init1668978886966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" text PRIMARY KEY NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "post" ("id" text PRIMARY KEY NOT NULL, "author_id" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_post" ("id" text PRIMARY KEY NOT NULL, "author_id" text NOT NULL, CONSTRAINT "FK_2f1a9ca8908fc8168bc18437f62" FOREIGN KEY ("author_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_post"("id", "author_id") SELECT "id", "author_id" FROM "post"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`ALTER TABLE "temporary_post" RENAME TO "post"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME TO "temporary_post"`);
        await queryRunner.query(`CREATE TABLE "post" ("id" text PRIMARY KEY NOT NULL, "author_id" text NOT NULL)`);
        await queryRunner.query(`INSERT INTO "post"("id", "author_id") SELECT "id", "author_id" FROM "temporary_post"`);
        await queryRunner.query(`DROP TABLE "temporary_post"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
