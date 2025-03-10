import { IsOptional, IsInt, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEvaluacionDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)  
  @Type(() => Number)
  nota?: number;

  @IsOptional()
  @IsDateString()
  fecha?: string;
}
