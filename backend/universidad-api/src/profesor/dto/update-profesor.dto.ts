import { IsString, IsDateString, IsInt, IsOptional } from 'class-validator';

export class UpdateProfesorDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsDateString()
  fechaContratacion?: string;

  @IsOptional()
  @IsInt()
  departamentoId?: number;
}
