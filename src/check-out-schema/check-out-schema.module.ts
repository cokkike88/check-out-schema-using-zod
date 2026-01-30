import { Module } from '@nestjs/common';
import { CheckOutSchemaService } from './check-out-schema.service';
import { InputMapper } from '../mappers/input.mapper';

@Module({
  imports: [],
  providers: [CheckOutSchemaService, InputMapper],
  exports: [CheckOutSchemaService],
})
export class CheckOutSchemaModule {}
