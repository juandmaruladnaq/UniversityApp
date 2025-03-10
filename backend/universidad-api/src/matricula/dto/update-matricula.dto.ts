import { IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateMatriculaDto {
  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsInt()
  calificacion?: number;
}