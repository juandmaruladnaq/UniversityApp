import { IsString, IsInt, IsOptional, IsArray } from 'class-validator';

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

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  prerrequisitos?: number[];
}
