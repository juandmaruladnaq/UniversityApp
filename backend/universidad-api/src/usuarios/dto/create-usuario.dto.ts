import { IsNotEmpty, IsString, IsEmail, MinLength, IsIn } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsIn(['admin', 'profesor', 'estudiante'])
  role: 'admin' | 'profesor' | 'estudiante';
}
