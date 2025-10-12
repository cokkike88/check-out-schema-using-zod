import { Module } from '@nestjs/common';
import { CheckOutSchemaService } from './check-out-schema.service';

@Module({
  imports: [],
  providers: [CheckOutSchemaService],
  exports: [CheckOutSchemaService],
})
export class CheckOutSchemaModule {}
