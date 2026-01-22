import { BadRequestException, Injectable } from '@nestjs/common';
import { z, ZodType } from 'zod';
import { SchemaTypeEnum } from '../util/constants';

interface SchemaField {
  type: string;
  schema?: any;
}

type SchemaJson = Record<string, SchemaField>;

@Injectable()
export class CheckOutSchemaService {
  typeToZodSchema: Record<string, () => ZodType> = {
    string: () => z.string(),
    number: () => z.number(),
    boolean: () => z.boolean(),
    SchemaTypeEnum: () => z.enum(SchemaTypeEnum),
  };
  createDynamicSchema(schema: any) {
    const schemaShape: Record<string, ZodType> = {};
    for (const [key, value] of Object.entries(schema as SchemaJson)) {
      console.log(value);
      if (value.type === 'schema') {
        schemaShape[key] = this.createDynamicSchema(value.schema);
      } else {
        const zodType = this.typeToZodSchema[value.type];
        if (!zodType)
          throw new BadRequestException(
            `Invalid type: ${value.type} for key ${key}`,
          );
        const baseSchema = zodType();
        schemaShape[key] = baseSchema;
      }
    }
    return z.object(schemaShape);
  }
  validate(schema: any, data: any) {
    const schemaObject = this.createDynamicSchema(schema);
    const parsed = schemaObject.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.issues);
    }
    return parsed.data;
  }
}
