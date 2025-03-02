import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  fechaNacimiento: string;
}
