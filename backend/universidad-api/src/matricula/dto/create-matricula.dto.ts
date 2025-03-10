import { IsNotEmpty, IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateMatriculaDto {
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
