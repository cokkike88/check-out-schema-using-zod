import { Expose } from 'class-transformer';
import { IsObject } from 'class-validator';

export class ValidateSchemaDto {
  @IsObject()
  @Expose()
  schema: any;
  @IsObject()
  @Expose()
  data: any;
}
