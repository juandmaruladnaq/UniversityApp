import { IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateEvaluacionDto {
  @IsOptional()
  @IsInt()
  nota?: number;

  @IsOptional()
  @IsDateString()
  fecha?: string;
}
