import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateEvaluacionDto {
  @IsNotEmpty()
  @IsInt()
  estudianteId: number;

  @IsNotEmpty()
  @IsInt()
  cursoId: number;

  @IsNotEmpty()
  @IsInt()
  nota: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;
}
