import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateEstudianteDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsDateString() 
  fechaNacimiento?: string;
}
