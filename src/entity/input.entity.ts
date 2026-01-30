import { Expose } from 'class-transformer';

export class DataInput {
  @Expose()
  description: string;

  @Expose()
  size: number;
}

export class EmployeeDataInput {
  @Expose()
  name: string;

  @Expose()
  lastName: string;
}

export class InputEntity {
  @Expose()
  type: string;

  @Expose()
  data: DataInput | EmployeeDataInput;
}
