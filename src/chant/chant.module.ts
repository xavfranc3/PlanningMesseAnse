import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChantController } from './chant.controller';
import { ChantService } from './chant.service';
import Chant from './chant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chant])],
  controllers: [ChantController],
  providers: [ChantService],
})
export class ChantModule {}
