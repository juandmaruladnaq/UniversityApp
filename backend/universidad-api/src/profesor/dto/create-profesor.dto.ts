import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateProfesorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  fechaContratacion: string;

  @IsNotEmpty()
  @IsInt()
  departamentoId: number;
}
