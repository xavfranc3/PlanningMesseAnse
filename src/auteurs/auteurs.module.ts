import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuteursController } from './auteurs.controller';
import { AuteursService } from './auteurs.service';
import Auteur from '../entity/auteur.entity';
import Chant from '../entity/chant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auteur, Chant])],
  controllers: [AuteursController],
  providers: [AuteursService],
  exports: [AuteursService],
})
export class AuteursModule {}
