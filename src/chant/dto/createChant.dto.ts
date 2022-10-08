import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import Auteur from '../../entity/auteur.entity';

export class CreateChantDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsArray()
  auteurs: Auteur[];
}

export default CreateChantDto;
