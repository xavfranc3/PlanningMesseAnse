import {
  Injectable,
  HttpStatus,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Auteur from '../entity/auteur.entity';
import CreateAuteurDto from './dto/createAuteurDto';

@Injectable()
export class AuteursService {
  constructor(
    @InjectRepository(Auteur)
    private auteursRepository: Repository<Auteur>,
  ) {}

  getAll() {
    return this.auteursRepository.find();
  }

  async addAuteur(auteurData: CreateAuteurDto) {
    const newAuteur = await this.auteursRepository.create(auteurData);
    await this.auteursRepository.save(newAuteur);
    return newAuteur;
  }

  async getChantById(id) {
    const auteur = await this.auteursRepository.findOneBy({ id: id });
    if (auteur) return auteur;
    throw new NotFoundException("Cet auteur n'existe pas");
  }
}
