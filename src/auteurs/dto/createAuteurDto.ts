import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAuteurDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
}

export default CreateAuteurDto;
