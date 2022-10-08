import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Chant from '../entity/chant.entity';
import CreateChantDto from './dto/createChant.dto';
import { AuteursService } from '../auteurs/auteurs.service';

@Injectable()
export class ChantService {
  constructor(
    @InjectRepository(Chant)
    private chantRepository: Repository<Chant>,
    private auteursService: AuteursService,
  ) {}

  getAllChant() {
    return this.chantRepository.find();
  }

  async addChant(chantData: CreateChantDto) {
    const newChant = new Chant();
    newChant.nom = chantData.nom;
    newChant.auteurs = chantData.auteurs;
    await this.chantRepository.save(newChant);
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
