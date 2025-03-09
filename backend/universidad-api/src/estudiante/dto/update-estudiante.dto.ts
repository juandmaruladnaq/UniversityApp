import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateEstudianteDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsDateString() 
  fechaNacimiento?: string;
}
