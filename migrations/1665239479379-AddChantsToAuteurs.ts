import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddChantsToAuteurs1665239479379 implements MigrationInterface {
  name = 'AddChantsToAuteurs1665239479379';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "auteur_chants_chant" ("auteurId" integer NOT NULL, "chantId" integer NOT NULL, CONSTRAINT "PK_fc8c2311af143747fe5bacd4ba6" PRIMARY KEY ("auteurId", "chantId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_987edc39bf3c3237c8f592ff0c" ON "auteur_chants_chant" ("auteurId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_89a821b78e22b46eef9710864f" ON "auteur_chants_chant" ("chantId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "auteur_chants_chant" ADD CONSTRAINT "FK_987edc39bf3c3237c8f592ff0c1" FOREIGN KEY ("auteurId") REFERENCES "auteur"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "auteur_chants_chant" ADD CONSTRAINT "FK_89a821b78e22b46eef9710864f4" FOREIGN KEY ("chantId") REFERENCES "chant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auteur_chants_chant" DROP CONSTRAINT "FK_89a821b78e22b46eef9710864f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "auteur_chants_chant" DROP CONSTRAINT "FK_987edc39bf3c3237c8f592ff0c1"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_89a821b78e22b46eef9710864f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_987edc39bf3c3237c8f592ff0c"`,
    );
    await queryRunner.query(`DROP TABLE "auteur_chants_chant"`);
  }
}
