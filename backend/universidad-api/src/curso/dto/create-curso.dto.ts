import { IsNotEmpty, IsString, IsInt, IsOptional, IsArray } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  profesorId: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  prerrequisitos?: number[];
}
