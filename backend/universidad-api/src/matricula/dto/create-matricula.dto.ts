import { IsNotEmpty, IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateMatriculaDto {
  @IsNotEmpty()
  @IsInt()
  estudianteId: number;

  @IsNotEmpty()
  @IsInt()
  cursoId: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsOptional()
  @IsInt()
  calificacion?: number;
}
