import { IsDate, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
export enum TaskEnum{
  TO_DO='TO_DO',
  IN_PROGRESS='IN_PROGRESS',
  DONE='DONE'

}
export class TaskDTO {
  @IsOptional()
  id: string;
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  title: string;
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  description: string;
  @IsEnum(TaskEnum)
  @IsOptional()
  status: string;
  expirationDate: Date;
}
