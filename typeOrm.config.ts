import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import UserEntity from './src/users/user.entity';
import { CreateUser1665002763085 } from './migrations/1665002763085-CreateUser';
import ChantEntity from './src/chant/chant.entity';
import { CreateChant1665089004269 } from './migrations/1665089004269-CreateChant';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [UserEntity, ChantEntity],
  migrations: [CreateUser1665002763085, CreateChant1665089004269],
});
