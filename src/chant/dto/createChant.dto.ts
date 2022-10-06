import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChantDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
}

export default CreateChantDto;
