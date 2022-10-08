import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChantController } from './chant.controller';
import { ChantService } from './chant.service';
import Chant from '../entity/chant.entity';
import Auteur from '../entity/auteur.entity';
import { AuteursModule } from '../auteurs/auteurs.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chant, Auteur]), AuteursModule],
  controllers: [ChantController],
  providers: [ChantService],
})
export class ChantModule {}
