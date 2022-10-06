import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  password: string;
}

export default CreateUserDto;