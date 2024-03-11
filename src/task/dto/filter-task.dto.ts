import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class FilterTaskDto {
  @IsOptional()
  @IsString()
  @IsEnum(TaskStatus)
  status: string;
}
