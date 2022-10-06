import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateChant1665089004269 implements MigrationInterface {
  name = 'CreateChant1665089004269';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "chant" ("id" SERIAL NOT NULL, "nom" character varying NOT NULL, CONSTRAINT "PK_28b84c409659652d23eff20f97d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "chant"`);
  }
}
