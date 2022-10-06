import { Expose } from "class-transformer";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  @Expose()
  public id?: number;

  @Column({
    unique: true
  })
  @Expose()
  public email: string;

  @Column()
  public password: string;
}

export default User;