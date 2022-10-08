import { Expose } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Chant from '../chant/chant.entity';

@Entity()
class Auteur {
  @PrimaryGeneratedColumn()
  @Expose()
  public id?: number;

  @Column()
  @Expose()
  public nom: string;

  @ManyToMany(() => Chant, (chant: Chant) => chant.auteurs)
  @JoinTable()
  public chants: Chant[];
}

export default Auteur;
