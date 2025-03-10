import { IsNotEmpty, IsInt, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEvaluacionDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  estudianteId: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  cursoId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)  
  @Max(5) 
  @Type(() => Number)
  nota: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;
}
