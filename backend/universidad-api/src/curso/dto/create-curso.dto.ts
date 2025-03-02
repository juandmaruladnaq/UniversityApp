import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

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
}
