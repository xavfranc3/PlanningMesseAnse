import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import Chant from '../entity/chant.entity';
import { AuteursService } from './auteurs.service';
import CreateAuteurDto from './dto/createAuteurDto';

@Controller('auteurs')
export class AuteursController {
  constructor(private readonly auteursService: AuteursService) {}

  @Get()
  getAllAuteurs(@Req() request: Chant) {
    return this.auteursService.getAll();
  }

  @Post()
  async addAuteur(@Body() newAuteurData: CreateAuteurDto) {
    return this.auteursService.addAuteur(newAuteurData);
  }
}
