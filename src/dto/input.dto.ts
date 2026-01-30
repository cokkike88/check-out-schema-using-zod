import { Expose, Type } from 'class-transformer';
import { IsObject, IsString } from 'class-validator';

export class DataInputDto {
  @Expose()
  @IsString()
  description: string;

  @Expose()
  size: number;
}

export class EmployeeDataInputDto {
  @Expose()
  name: string;

  @Expose()
  lastName: string;
}

export class InputDto {
  @IsString()
  @Expose()
  type: string;

  @IsObject()
  @Expose()
  data: DataInputDto | EmployeeDataInputDto;
}
