import { IsString, IsEmail, MinLength, IsOptional, IsIn } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsIn(['admin', 'profesor', 'estudiante'])
  role?: 'admin' | 'profesor' | 'estudiante';
}
