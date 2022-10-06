import { Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Chant {
  @PrimaryGeneratedColumn()
  @Expose()
  public id?: number;

  @Column()
  @Expose()
  nom: string;
}

export default Chant;
