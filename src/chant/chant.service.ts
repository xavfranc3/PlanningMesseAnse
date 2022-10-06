import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Chant from './chant.entity';
import CreateChantDto from './dto/createChant.dto';

@Injectable()
export class ChantService {
  constructor(
    @InjectRepository(Chant)
    private chantRepository: Repository<Chant>,
  ) {}

  getAllChant() {
    return this.chantRepository.find();
  }

  async addChant(chantData: CreateChantDto) {
    const newChant = await this.chantRepository.create(chantData);
    await this.chantRepository.save(newChant);
    return newChant;
  }

  async getChantByName(nom: string) {
    const chant = await this.chantRepository.findOneBy({ nom });
    if (chant) return chant;
    throw new HttpException(
      "Ce chant n'est pas répertorié",
      HttpStatus.NOT_FOUND,
    );
  }
}
