import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuteur1665238617896 implements MigrationInterface {
  name = 'CreateAuteur1665238617896';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "auteur" ("id" SERIAL NOT NULL, "nom" character varying NOT NULL, CONSTRAINT "PK_43f768dab702467bb2d0f577cc0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "auteur"`);
  }
}
