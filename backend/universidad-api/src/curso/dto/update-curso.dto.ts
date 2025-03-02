import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateCursoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsInt()
  profesorId?: number;
}
