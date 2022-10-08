import { Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import Auteur from '../entity/auteur.entity';

@Entity()
class Chant {
  @PrimaryGeneratedColumn()
  @Expose()
  public id?: number;

  @Column()
  @Expose()
  nom: string;

  @ManyToMany(() => Auteur, (auteur: Auteur) => auteur.chants)
  public auteurs: Auteur[];
}

export default Chant;
