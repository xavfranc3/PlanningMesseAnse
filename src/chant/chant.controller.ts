import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ChantService } from './chant.service';
import CreateChantDto from './dto/createChant.dto';

@Controller('chants')
export class ChantController {
  constructor(private readonly chantService: ChantService) {}

  @Get()
  getAllChants(@Req() request: CreateChantDto) {
    return this.chantService.getAllChant();
  }

  @Post()
  async addChant(@Body() newChantData: CreateChantDto) {
    return this.chantService.addChant(newChantData);
  }

  @Get(':nom')
  async findOneChant(@Param('nom') nom: string) {
    return this.chantService.getChantByName(nom);
  }
}
