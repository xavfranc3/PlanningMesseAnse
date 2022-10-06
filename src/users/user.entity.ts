import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  @Expose()
  public id?: number;

  @Column({
    unique: true,
  })
  @Expose()
  public email: string;

  @Column()
  public password: string;
}

export default User;
